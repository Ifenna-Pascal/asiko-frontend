import React from 'react'

function SearchBar() {
  return (
    <div className="relative max-w-[720px] grow  md:flex hidden  items-center">
    <input
      type="text"
      className="w-full pl-12  py-[0.7rem] text-gray-700 bg-AS-grey-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 rounded-lg h-[55px]  dark:focus:border-blue-300 text-[18px]  font-Poppins focus:outline-none"
      placeholder="Search Asiko"
    />
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg
        className="w-6 h-6 font-bold text-gray-600"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </span>
  </div>
  )
}

export default SearchBar