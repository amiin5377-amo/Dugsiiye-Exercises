 function StudentDashboard() {
  const courses = [
    { id: 1, name: 'React Fundamentals', progress: 75, instructor: 'Sarah Wilson', nextLesson: 'Components & Props', color: 'blue' },
    { id: 2, name: 'JavaScript Advanced', progress: 45, instructor: 'Mike Johnson', nextLesson: 'Async/Await', color: 'purple' },
    { id: 3, name: 'UI/UX Design', progress: 90, instructor: 'Emily Chen', nextLesson: 'Color Theory', color: 'pink' },
  ];

  const assignments = [
    { id: 1, title: 'Build a Todo App', course: 'React Fundamentals', dueDate: '2024-03-20', status: 'pending' },
    { id: 2, title: 'API Integration', course: 'JavaScript Advanced', dueDate: '2024-03-18', status: 'completed' },
    { id: 3, title: 'Design System', course: 'UI/UX Design', dueDate: '2024-03-25', status: 'in-progress' },
  ];

  const stats = [
    { label: 'Average Grade', value: '88%', icon: '📊' },
    { label: 'Courses', value: '3', icon: '📚' },
    { label: 'Study Hours', value: '45h', icon: '⏰' },
    { label: 'Assignments', value: '12', icon: '✍️' },
  ];

  const announcements = [
    { id: 1, title: 'New Course Available', message: 'Check out our new TypeScript course!', time: '2 hours ago' },
    { id: 2, title: 'Maintenance Notice', message: 'Platform updates scheduled for tonight', time: '5 hours ago' },
  ];

  function getStatusColor(status) {
    switch (status) {
      case 'pending':
        return 'bg-red-100 text-red-800 font-bold';
      case 'completed':
        return 'bg-green-100 text-green-800 font-semibold';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800 font-bold';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  return (
    <div className="p-6 bg-blue-100 min-h-screen">
      <div className="flex justify-between items-center pl-6 mb-6 h-20 w-full rounded-lg bg-white">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back Student</h2>
          <p className="text-gray-600 text-lg">Here what's happening your courses</p>
        </div>

        <div className="flex gap-4 items-center pr-6">
          <button type="button" aria-label="Notifications">🔔</button>
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold">
            <h2>S</h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
            <span className="text-2xl">{stat.icon}</span>
            <div>
              <h3 className="text-gray-600">{stat.label}</h3>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Your Courses</h2>

          {courses.map((course) => (
            <div key={course.id} className="bg-white p-4 shadow-md mb-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{course.name}</h3>
                <span className="text-sm text-gray-600">{course.progress}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${course.progress}%` }} />
              </div>

              <div className="flex justify-between mt-2">
                <p className="text-gray-600">Next Lesson: {course.nextLesson}</p>
                <p className="text-gray-600">Instructor: {course.instructor}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="p-2 bg-white rounded-md shadow-md mb-6 mt-8">
            <h2 className="text-xl font-bold mb-4">Upcoming Assignments</h2>

            <div className="flex flex-col justify-between items-center mb-2">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="p-4 rounded-lg shadow-md mb-2 w-full">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold">{assignment.title}</h3>
                      <p className="text-gray-600">{assignment.course}</p>
                    </div>

                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(assignment.status)}`}>
                        {assignment.status}
                      </span>
                      <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-2 bg-white rounded-md shadow-md mb-6 mt-2">
            <h2 className="text-xl font-bold mb-4">Announcements</h2>
            <div className="flex flex-col justify-between items-center mb-2">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="p-4  border-l-4 border-blue-500   shadow-md mb-2 w-full">
                  
                    <h3 className="text-lg font-bold">{announcement.title}</h3>
                    <span className="text-sm text-gray-600">{announcement.message}</span>
                  
                  <p className="text-gray-600 mt-2">{announcement.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;