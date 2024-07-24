import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex sticky z-40 top-0 ">
        <div className=" cursor-pointer  m-4 ">
          <Link
            href="/"
            className="text-2xl font-semibold hover:text-gray-400 flex"
          >
            MD
          </Link>
        </div>

        <div className="flex gap-2 w-[100%] text-xs justify-center m-4 ">
          {/* <Link
            href="/"
            className="relative transition-transform hover:translate-y-2 cursor-pointer group"
          >
            <span className="absolute group-hover:bg-black top-0 left-0 mt-1 ml-1 h-full w-full rounded  group-hover:bg-black border-black border-2"></span>
            <span className="relative inline-block border-2 border-black hover:border-2 hover:border-black group-hover:bg-white py-2 px-4 font-semibold rounded group-hover:text-black  bg-black text-white">
              Home
            </span>
          </Link> */}

          <Link
            href="projects"
            className="relative transition-transform hover:translate-y-2 cursor-pointer group"
          >
            <span className="absolute group-hover:bg-black top-0 left-0 mt-1 ml-1 h-full w-full rounded  group-hover:bg-black border-black border-2"></span>
            <span className="relative inline-block border-2 border-black hover:border-2 hover:border-black group-hover:bg-white py-2 px-4 font-semibold rounded group-hover:text-black  bg-black text-white">
              Projects
            </span>
          </Link>

          <Link
            href="/about"
            className="relative transition-transform hover:translate-y-2 cursor-pointer group"
          >
            <span className="absolute group-hover:bg-black top-0 left-0 mt-1 ml-1 h-full w-full rounded  group-hover:bg-black border-black border-2"></span>
            <span className="relative inline-block border-2 border-black hover:border-2 hover:border-black group-hover:bg-white py-2 px-4 font-semibold rounded group-hover:text-black  bg-black text-white">
              About
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
