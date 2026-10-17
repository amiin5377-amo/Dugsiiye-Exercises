import jwt from 'jsonwebtoken';

export default function generateToken(userId) {
  return jwt.sign({}, process.env.JWT_SECRET, {
    subject: userId.toString(),
    expiresIn: '1d',
  });
}