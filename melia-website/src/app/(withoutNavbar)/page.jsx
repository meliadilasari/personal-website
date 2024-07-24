import Link from "next/link";

export default function Home() {
  const gradientBackground = {
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
    height: "100vh",
  };

  return (
    <>
      <main
        className="flex-col flex items-center justify-center gap-10"
        style={gradientBackground}
      >
        <div className="text-center">
          <h1 className="text-7xl font-semibold">Melia Dilasari</h1>
          <h5 className="text-2xl font-medium">
            Fullstack Javascript Developer
          </h5>
        </div>

        <div>
          <div className="flex gap-2 w-[100%] text-sm justify-center ">
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
              href="about"
              className="relative transition-transform hover:translate-y-2 cursor-pointer group"
            >
              <span className="absolute group-hover:bg-black top-0 left-0 mt-1 ml-1 h-full w-full rounded  group-hover:bg-black border-black border-2"></span>
              <span className="relative inline-block border-2 border-black hover:border-2 hover:border-black group-hover:bg-white py-2 px-4 font-semibold rounded group-hover:text-black  bg-black text-white">
                About
              </span>
            </Link>

            <a
              href="https://drive.google.com/file/d/18zAugju1ZuuAjCpc5KoCqZaey8rIXjoY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-transform hover:translate-y-2 cursor-pointer group"
            >
              <span className="absolute group-hover:bg-black top-0 left-0 mt-1 ml-1 h-full w-full rounded  group-hover:bg-black border-black border-2"></span>
              <span className="relative  inline-block border-2 border-black hover:border-2 hover:border-black group-hover:bg-white py-2 px-4 font-semibold rounded group-hover:text-black  bg-black text-white">
                <span className="flex flex-cols">
                  Resume
                  <svg
                    className="fill-white ml-2"
                    width="20px"
                    height="20px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      className="fill-white group-hover:fill-black"
                      fill="#000000"
                      fillRule="evenodd"
                      d="M8 3.517a1 1 0 011.62-.784l5.348 4.233a1 1 0 010 1.568l-5.347 4.233A1 1 0 018 11.983v-1.545c-.76-.043-1.484.003-2.254.218-.994.279-2.118.857-3.506 1.99a.993.993 0 01-1.129.096.962.962 0 01-.445-1.099c.415-1.5 1.425-3.141 2.808-4.412C4.69 6.114 6.244 5.241 8 5.042V3.517zm1.5 1.034v1.2a.75.75 0 01-.75.75c-1.586 0-3.066.738-4.261 1.835a8.996 8.996 0 00-1.635 2.014c.878-.552 1.695-.916 2.488-1.138 1.247-.35 2.377-.33 3.49-.207a.75.75 0 01.668.745v1.2l4.042-3.2L9.5 4.55z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </div>
        <footer className="text-small absolute bottom-0 p-4 w-screen">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <a
                href="mailto:meliadilasari@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 69 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M66.8351 16.8701V54.3478C66.8351 56.7822 64.8621 58.7574 62.4277 58.7574H52.1359V33.7729L34.5 47.0036L16.864 33.7729V58.7595H6.57437C4.13996 58.7595 2.16699 56.7866 2.16699 54.3521V54.35V16.8722C2.16699 13.2195 5.12752 10.2568 8.78021 10.2568C10.2766 10.2568 11.6566 10.7549 12.765 11.5916L12.7477 11.5786L34.5 27.895L56.2522 11.5786C57.3433 10.7528 58.7233 10.2568 60.2197 10.2568C63.8724 10.2568 66.8351 13.2174 66.8351 16.8701Z"
                    fill="#09101D"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/meliadilasari/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 69 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.5 51.75C44.0269 51.75 51.75 44.0269 51.75 34.5C51.75 24.9731 44.0269 17.25 34.5 17.25C24.9731 17.25 17.25 24.9731 17.25 34.5C17.25 44.0269 24.9731 51.75 34.5 51.75ZM34.5 46C40.8512 46 46 40.8512 46 34.5C46 28.1487 40.8512 23 34.5 23C28.1487 23 23 28.1487 23 34.5C23 40.8512 28.1487 46 34.5 46Z"
                    fill="#09101D"
                  />
                  <path
                    d="M51.75 14.375C50.1621 14.375 48.875 15.6622 48.875 17.25C48.875 18.8378 50.1621 20.125 51.75 20.125C53.3379 20.125 54.625 18.8378 54.625 17.25C54.625 15.6622 53.3379 14.375 51.75 14.375Z"
                    fill="#09101D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.75513 12.2937C2.875 15.9836 2.875 20.8141 2.875 30.475V38.525C2.875 48.1859 2.875 53.0164 4.75513 56.7062C6.40895 59.9521 9.04786 62.5911 12.2937 64.2448C15.9836 66.125 20.8141 66.125 30.475 66.125H38.525C48.1859 66.125 53.0164 66.125 56.7062 64.2448C59.9521 62.5911 62.5911 59.9521 64.2448 56.7062C66.125 53.0164 66.125 48.1859 66.125 38.525V30.475C66.125 20.8141 66.125 15.9836 64.2448 12.2937C62.5911 9.04786 59.9521 6.40895 56.7062 4.75513C53.0164 2.875 48.1859 2.875 38.525 2.875H30.475C20.8141 2.875 15.9836 2.875 12.2937 4.75513C9.04786 6.40895 6.40895 9.04786 4.75513 12.2937ZM38.525 8.625H30.475C25.5497 8.625 22.2015 8.62948 19.6135 8.84091C17.0926 9.04688 15.8034 9.4202 14.9041 9.87841C12.7402 10.981 10.981 12.7402 9.87841 14.9041C9.4202 15.8034 9.04688 17.0926 8.84091 19.6135C8.62948 22.2015 8.625 25.5497 8.625 30.475V38.525C8.625 43.4504 8.62948 46.7984 8.84091 49.3865C9.04688 51.9076 9.4202 53.1967 9.87841 54.096C10.981 56.2597 12.7402 58.0189 14.9041 59.1215C15.8034 59.5798 17.0926 59.9532 19.6135 60.1591C22.2015 60.3704 25.5497 60.375 30.475 60.375H38.525C43.4504 60.375 46.7984 60.3704 49.3865 60.1591C51.9076 59.9532 53.1967 59.5798 54.096 59.1215C56.2597 58.0189 58.0189 56.2597 59.1215 54.096C59.5798 53.1967 59.9532 51.9076 60.1591 49.3865C60.3704 46.7984 60.375 43.4504 60.375 38.525V30.475C60.375 25.5497 60.3704 22.2015 60.1591 19.6135C59.9532 17.0926 59.5798 15.8034 59.1215 14.9041C58.0189 12.7402 56.2597 10.981 54.096 9.87841C53.1967 9.4202 51.9076 9.04688 49.3865 8.84091C46.7984 8.62948 43.4504 8.625 38.525 8.625Z"
                    fill="#09101D"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/meliadilasari"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 69 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_261_109)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.5 0C53.5544 0 69 15.8353 69 35.3726C69 50.9977 59.1261 64.2527 45.4262 68.9343C43.677 69.2828 43.056 68.1781 43.056 67.2363C43.056 66.0702 43.0974 62.2615 43.0974 57.5281C43.0974 54.2299 41.9934 52.0773 40.7549 50.9802C48.438 50.1039 56.511 47.1124 56.511 33.5263C56.511 29.6623 55.1724 26.5092 52.9575 24.0321C53.3163 23.1385 54.4996 19.5406 52.6194 14.6692C52.6194 14.6692 49.7283 13.7214 43.1422 18.2961C40.3857 17.513 37.4325 17.1189 34.5 17.1051C31.5675 17.1189 28.6178 17.513 25.8647 18.2961C19.2717 13.7214 16.3737 14.6692 16.3737 14.6692C14.5004 19.5406 15.6837 23.1385 16.0391 24.0321C13.8345 26.5092 12.4856 29.6623 12.4856 33.5263C12.4856 47.0779 20.5413 50.1152 28.2038 51.0088C27.2171 51.892 26.3235 53.45 26.013 55.7374C24.0465 56.6413 19.0509 58.2056 15.9735 52.7995C15.9735 52.7995 14.1485 49.4008 10.6847 49.1524C10.6847 49.1524 7.3209 49.1077 10.45 51.3019C10.45 51.3019 12.7098 52.3887 14.2795 56.4769C14.2795 56.4769 16.3047 62.7903 25.9026 60.6513C25.9199 63.6079 25.9509 66.3945 25.9509 67.2363C25.9509 68.1712 25.3161 69.2654 23.5945 68.9377C9.88424 64.2629 0 51.0011 0 35.3726C0 15.8353 15.4491 0 34.5 0Z"
                      fill="#09101D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_261_109">
                      <rect width="69" height="69" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/melia-dilasari-39980516a/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer "
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 69 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_261_108)">
                    <path
                      d="M19.9526 14.3749C19.9519 15.8999 19.3453 17.3622 18.2665 18.44C17.1876 19.5178 15.7248 20.1228 14.1998 20.1221C12.6748 20.1213 11.2125 19.5148 10.1347 18.4359C9.05695 17.357 8.45187 15.8942 8.45264 14.3692C8.4534 12.8442 9.05993 11.382 10.1388 10.3042C11.2177 9.22638 12.6805 8.62131 14.2055 8.62207C15.7305 8.62283 17.1927 9.22937 18.2705 10.3082C19.3483 11.3871 19.9534 12.85 19.9526 14.3749ZM20.1251 24.3799H8.62514V60.3749H20.1251V24.3799ZM38.2951 24.3799H26.8526V60.3749H38.1801V41.4862C38.1801 30.9637 51.8939 29.9862 51.8939 41.4862V60.3749H63.2501V37.5762C63.2501 19.8374 42.9526 20.4987 38.1801 29.2099L38.2951 24.3799Z"
                      fill="#09101D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_261_108">
                      <rect width="69" height="69" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="text-slate-700 text-xs flex items-center">
              <span> Developed by Melia Dilasari</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
