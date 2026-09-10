
import { useForm } from "react-hook-form"

function App() {
  const { register, handleSubmit , formState:{errors} } = useForm()

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <div className="bg-white mx-auto rounded-lg shadow-md w-100 h-140 p-6 mt-10">
       <h2 className="text-2xl text-center font-bold mb-4"> Student Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className=" p-10   w-75 mx-auto h-100">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.name && <p className="text-red-500 text-xs italic">Name is required</p>}  
        </div>
       <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
            Email
          <input
            type="email"
            id="email"
            {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
            className="mt-1  w-full border border-gray-300 rounded-md shadow-sm "
          />
          {errors.email && <p className="text-red-500 text-xs italic">Email is required</p>}
       </div>

       <div>
<label>Grade Level</label>
<select
            id="grade"
            {...register("grade", { required: true })}
            className="mt-1  w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">
              Select Grade Level
            </option>
            <option value="9">9th Grade</option>
            <option value="10">10th Grade</option>
            <option value="11">11th Grade</option>
            <option value="12">12th Grade</option>
          </select>
          {errors.grade && <p className="text-red-500 text-xs italic">Grade Level is required</p>}
       </div>
       <div>
        <h2>Subjects Interested</h2>
      <div className="space-y-2">
        <label htmlFor="subjects" className="block text-sm font-medium text-gray-700">
        
         <input
        type="checkbox"
        id="subjects"
        {...register("subjects", { required: true })}
        
        />
          Mathematics
        </label>
        <label htmlFor="subjects" className="block text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            id="subjects"
            {...register("subjects", { required: true })}
          />
          Science
        </label>
        <label htmlFor="subjects" className="block text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            id="subjects"
            {...register("subjects", { required: true })}
          />
          English
        </label>
        <label htmlFor="subjects" className="block text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            id="subjects"
            {...register("subjects", { required: true })}
          />
          History
        </label>
        {errors.subjects && <p className="text-red-500 text-xs italic">At least one subject must be selected</p>}
      </div>
        <button type="submit" className="bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Submit
      </button>
      </div>

    
       
       
      </form>
    </div>

  )
}

export default App
