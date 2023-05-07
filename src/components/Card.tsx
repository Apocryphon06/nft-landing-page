import React from "react";
let imgUrl = "https://picsum.photos/200";

const Heart = () => {
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
        d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
        stroke="white"
        stroke-opacity="0.5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Ethereum = () => {
  return (
    <svg
      width="24"
      height="40"
      viewBox="0 0 24 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_0_124)">
        <path
          d="M11.9963 0L11.7344 0.890251V26.7233L11.9963 26.9847L23.9877 19.8966L11.9963 0Z"
          fill="#343434"
        />
        <path
          d="M11.9964 0L0.0050354 19.8966L11.9964 26.9848V14.4462V0Z"
          fill="#8C8C8C"
        />
        <path
          d="M11.9963 29.2553L11.8488 29.4352V38.6375L11.9963 39.0687L23.9949 22.1708L11.9963 29.2553Z"
          fill="#3C3C3B"
        />
        <path
          d="M11.9964 39.0684V29.2551L0.0050354 22.1705L11.9964 39.0684Z"
          fill="#8C8C8C"
        />
        <path
          d="M11.9963 26.9847L23.9876 19.8967L11.9963 14.4463V26.9847Z"
          fill="#141414"
        />
        <path
          d="M0.00513077 19.8967L11.9963 26.9847V14.4463L0.00513077 19.8967Z"
          fill="#393939"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_124">
          <rect width="24" height="39.0773" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Card = ({ data }: any) => {
  return (
    <div className="bg-[#1D1D1D] w-[307px] rounded-md p-5 flex flex-col gap-2 flex-shrink-0 snap-start">
      <div className="flex items-center justify-between">
        <img className="w-[39px] h-[39px] rounded-full" src={imgUrl} alt="" />
        <Heart />
      </div>

      <img className="rounded-2xl" src={data.art} alt="" />

      <div>
        <p className="text-lg font-medium capitalize">{data.name}</p>
        <p className="text-[#808080] text-xs">Edition {data.edition}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
        <Ethereum />
        <div>
          <p className="text-xs text-[#808080]">Price</p>
          <p className="text-base font-medium">{data.price}</p>
        </div>
        </div>

        <button className="bg-[#5BA300] py-2 px-5 text-sm">Place a bid</button>
      </div>
    </div>
  );
};

export default Card;
