
const Navbar = ({ props, toggle }) => {
  return (
    <div className="w-full text-white bg-black rounded-xl px-4 sm:px-6 py-3 flex items-center justify-between flex-wrap gap-3">

      <div className="h-10 w-10 sm:h-12 sm:w-12">
        <img
          className="h-full w-full object-contain cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/256/11235/11235204.png"
          alt="logo"
        />
      </div>

      <div className="flex items-center gap-4 sm:gap-8 text-sm sm:text-lg">
        <p className="cursor-pointer hover:text-gray-300 transition">Home</p>
        <p className="cursor-pointer hover:text-gray-300 transition">About</p>
        <p className="cursor-pointer hover:text-gray-300 transition">Contact</p>
      </div>

      <button
        onClick={() => props(prev => !prev)}
        className="text-sm sm:text-base border border-white px-3 sm:px-4 py-1.5 sm:py-2 cursor-pointer rounded-xl hover:bg-white hover:text-black transition"
      >
        {!toggle ? "Add Details" : "Show Details"}

      </button>

    </div>
  )
}

export default Navbar