
const SearchIcon = () => {
    return (
      <svg
        className="cursor-pointer"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="#5BA300"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 21L16.65 16.65"
          stroke="#5BA300"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };
  
  const UploadIcon = () => {
    return (
      <svg
        className="cursor-pointer"
        width="47"
        height="48"
        viewBox="0 0 47 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="23.5" cy="24" r="23.5" fill="#5BA300" />
        <path
          d="M33 26.5V30.5C33 31.0304 32.7893 31.5391 32.4142 31.9142C32.0391 32.2893 31.5304 32.5 31 32.5H17C16.4696 32.5 15.9609 32.2893 15.5858 31.9142C15.2107 31.5391 15 31.0304 15 30.5V26.5"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29 19.5L24 14.5L19 19.5"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24 14.5V26.5"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };
  

const Header = () => {
  return (
    <div className="flex justify-between items-center py-5 px-10 ">
    <div className="flex items-center gap-[55px]">
      <p className="text-2xl font-bold capitalize cursor-pointer tracking-widest ">
        Omise
      </p>
      {["Discover", "Marketplace", "How it works"].map((item: any) => (
        <p className="text-lg font-light tracking-wide cursor-pointer ">
          {item}
        </p>
      ))}
    </div>

    <div className="flex items-center gap-5">
      <SearchIcon />
      <button className="border border-[#5BA300] px-4 py-3 text-base text-[#5BA300] rounded-full">
        Connect Wallet
      </button>
      <UploadIcon />
    </div>
  </div>
  )
}

export default Header