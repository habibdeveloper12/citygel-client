import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from "./ProductSlider";
const ProductCart = (props) => {
  return (
    <div className="p-3 w-full product-border rounded-xl bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] box-border flex flex-col  py-2.5 px-[10px]   max-w-full text-left text-lg text-white font-poppins border-[1px] border-solid border-gray-100">
      <div>
        <ProductSlider />
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[10px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
          <div className="self-stretch w-full flex flex-row items-center justify-center gap-[10px] mq450:flex-wrap">
            <div className="rounded-3xs w-[31%] [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start py-0.5 px-2 z-[1]">
              <div className="text-whitesmoke-100 text-center relative inline-block min-w-[15%] text-[14px]">
                Premium
              </div>
            </div>
            <div className="rounded-3xs [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start py-0.5 px-2 z-[1]">
              <div className="text-whitesmoke-100 text-center relative inline-block min-w-[15%] text-[14px]">
                Premium
              </div>
            </div>
            <div className="rounded-3xs [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start py-0.5 px-2 z-[1]">
              <div className=" text-whitesmoke-100 text-center relative inline-block min-w-[15%] text-[14px]">
                Premium
              </div>
            </div>
          </div>
          <h3 className="m-0 self-stretch relative text-9xl leading-[40px] font-semibold font-inherit text-black z-[1] mq450:text-3xl mq450:leading-[32px]">
            Dell Touch Screen - Core I7 16GB RAM 512GB
          </h3>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px] text-xl text-gray-1100">
          <div className="relative z-[1] mq450:text-base">
            Electronics . Computers
          </div>
        </div>
        <div className="w-[375px] flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full text-gray-1200">
          <div className="flex-1 relative leading-[25px] inline-block max-w-full z-[1]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            ind...
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full text-9xl text-black">
          <div className="flex-1 relative leading-[40px] font-semibold inline-block whitespace-nowrap max-w-full z-[1] mq450:text-3xl mq450:leading-[32px]">
            AED 980
          </div>
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 ml-[-129px] text-xl text-gray-1100">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <div className="relative inline-block min-w-[105px] z-[1] mq450:text-base">
                City Name
              </div>
              <div className="h-[27px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <img
                  className="w-6 h-6 relative z-[1]"
                  alt=""
                  src="/vuesaxboldlocation-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer self-stretch rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center py-[17px] px-[141px] box-border whitespace-nowrap max-w-full z-[1] text-5xl mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[70px] w-[385px] relative rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
          <div className="text-whitesmoke-100  text-center relative inline-block min-w-[92px] z-[2]">
            View All
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
