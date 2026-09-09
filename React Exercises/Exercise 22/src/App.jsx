import { useState } from 'react'


function App() {
  const [formData, setFormData] = useState({ 
    username: '',
    email: '',
    password: ''
  })
const [isChecked, setIsChecked] = useState(false)
const [selectedOption, setSelectedOption] = useState('')
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({ username: '', email: '', password: '' })
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked)
  }
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Accept Terms:
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
      <br />
      <label>
        Select Option:
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">--Please choose an option--</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>


    </form>
  )
}

export default App
