

const AllDetails = ({ datas, deleteData, setUpdate, setToggle }) => {

  let employees = [...datas]

  return (
    <div className="h-[90%] w-full bg-gray-800 rounded-xl p-6 overflow-y-auto">

      <h1 className="text-white text-3xl font-bold mb-6">
        All Employees
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {employees.map((emp) => (
          <div
            key={emp.id}
            className="bg-gray-900 text-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >

            <p className="text-xs bg-blue-600 inline-block px-2 py-1 rounded mb-2">
              {emp.empid}
            </p>

            <h2 className="text-xl font-bold mb-2">{emp.name}</h2>


            <p className="text-sm text-gray-400">📧 {emp.email}</p>
            <p className="text-sm text-gray-400">📱 {emp.mobile}</p>

            <p className="text-sm mt-2">
              💼 <span className="text-yellow-400">{emp.designation}</span>
            </p>


            <p className={`mt-2 text-xs px-2 py-1 rounded inline-block ${emp.role === "Manager" ? "bg-green-600" : "bg-purple-600"
              }`}>
              {emp.role}
            </p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => {
                  return (deleteData(emp.id))
                }}
                className="w-full bg-red-500 hover:bg-red-600 py-1.5 rounded-lg text-sm cursor-pointer">
                Delete
              </button>
              <button
                onClick={() => {
                  return (
                    setUpdate(emp),
                    setToggle(prev => !prev)
                  )
                }}
                className="w-full bg-blue-500 hover:bg-blue-600 py-1.5 rounded-lg text-sm cursor-pointer">
                Edit
              </button>
            </div>

          </div>
        ))}

      </div>
    </div >
  );
};

export default AllDetails;