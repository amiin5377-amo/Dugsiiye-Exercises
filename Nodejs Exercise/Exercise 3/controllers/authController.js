import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

function publicUser(user) {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

async function register(req, res) {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email, and password are required' });
  }

  if (role !== undefined && !['user', 'admin'].includes(role)) {
    return res.status(400).json({ message: 'Role must be user or admin' });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const existingUser = await User.findOne({ email: normalizedEmail });
  if (existingUser) {
    return res.status(409).json({ message: 'Email is already registered' });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    name,
    email: normalizedEmail,
    password: hashedPassword,
    role: role || 'user',
  });

  return res.status(201).json({
    user: publicUser(user),
    token: generateToken(user._id),
  });
}

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = await User.findOne({ email: email.trim().toLowerCase() }).select('+password');
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  return res.json({
    user: publicUser(user),
    token: generateToken(user._id),
  });
}

function profile(req, res) {
  return res.json({ user: publicUser(req.user) });
}

export { register, login, profile };