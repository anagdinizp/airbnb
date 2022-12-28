import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left - airbnb logo*/}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="airbnb logo"
          fill
          className="object-contain object-left"
        />
      </div>

      {/* middle - search */}
      <div className="flex items-center md:border-2 rounded-full py-2 ">
        <input type="text" placeholder="Start your search" className="flex-grow outline-none pl-5 bg-transparent md:shadow-sm"/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="hidden md:inline-flex p-1 cursor-pointer h-8 bg-red-400 text-white rounded-full md:mx-2"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* right - became host and user menu*/}
      <div></div>
    </header>
  );
}
