import { useState } from 'react'


function App() {
 const [formData, setFormData] = useState({
   fullName: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    agreeToTerms: false,
    notifications: false
  })
  const skillsOptions = ["JavaScript", "Python", "Java", "C++", "React", "Node.js"]
  const handleSkillChange = (e) => {
    const { value, checked } = e.target
    setFormData((prevData) => {
      const newSkills = checked
        ? [...prevData.skills, value]
        : prevData.skills.filter((skill) => skill !== value)
      return { ...prevData, skills: newSkills }
    })
  }
  const [errors, setErrors] = useState({})
  const validateForm = () => {
    const newErrors = {}
    if (formData.fullName.length < 2 || formData.fullName.length > 50) {
      newErrors.fullName = "Full name must be between 2 and 50 characters"
    }
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.role) {
      newErrors.role = "Role is required"
    }
    if (!formData.experience || formData.experience.length < 0) {
      newErrors.experience = "Experience is required and must be a positive number"
    }
    if (formData.skills.length === 0) {
      newErrors.skills = "At least one skill is required"
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions"
    }
    setErrors(newErrors)
  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validateForm()
    setFormData({
      fullName: "",
      email: "",
      role: "",
      experience: "",
      skills: [],
      agreeToTerms: false,
      notifications: false
    })
  }
  return (
   <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
    <label htmlFor="fullName" className="block mb-2 font-bold">Full Name:</label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      value={formData.fullName}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded mb-2"
    />
    {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
    <label htmlFor="email" className="block mb-2 font-bold">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded mb-2"
    />
    {errors.email && <p className="text-red-500">{errors.email}</p>}
    <label htmlFor="role" className="block mb-2 font-bold">Role:</label>
    <select
      id="role"
      name="role"
      value={formData.role}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded mb-2"
    >
      <option value="">Select a role</option>
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
      <option value="manager">Manager</option>
    </select>
    {errors.role && <p className="text-red-500">{errors.role}</p>}
    <label htmlFor="experience" className="block mb-2 font-bold">Experience:</label>
    <input
      type="number"
      id="experience"
      name="experience"
      value={formData.experience}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded mb-2"
    />
    {errors.experience && <p className="text-red-500">{errors.experience}</p>}
    <label htmlFor="skills" className="block mb-2 font-bold">Skills:</label>
    <div className="space-y-2">
       {skillsOptions.map((skill) => (
        <label key={skill} className="flex items-center">
          <input
            type="checkbox"
            name="skills"
            value={skill}
            checked={formData.skills.includes(skill)}
            onChange={handleSkillChange}
            className="mr-2"
          />
          {skill}
        </label>
      ))}
    </div>
    {errors.skills && <p className="text-red-500">{errors.skills}</p>}
    <label className="block mb-2 font-bold">
      <input
        type="checkbox"
        name="agreeToTerms"
        checked={formData.agreeToTerms}
        onChange={handleChange}
        className="mr-2"
      />
      I agree to the terms and conditions
    </label>
    {errors.agreeToTerms && <p className="text-red-500">{errors.agreeToTerms}</p>}
    <label className="block mb-2 font-bold">
      <input
        type="checkbox"
        name="notifications"
        checked={formData.notifications}
        onChange={handleChange}
        className="mr-2"
      />
      I want to receive notifications
    </label>
    {errors.notifications && <p className="text-red-500">{errors.notifications}</p>}
    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>


   </form>
  )

}
export default App
