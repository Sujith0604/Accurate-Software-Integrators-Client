const ResponsiveDesign = () => {
  return (
    <div className=" flex flex-col gap-10 items-center justify-center">
      <div>
        <h1 className="block w-full bg-gradient-to-b text-center from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
          Responsive Design
        </h1>
        <p className="mx-auto my-4 w-full max-w-xl  bg-transparent text-center font-medium   text-gray-400">
          We design our website as a mobile first view where the website is
          developed in the mobile view first and tablet and then to the large
          screen. So you no need to worry about the responsiveness we will take
          care of it.
        </p>
      </div>
      <div className=" flex items-center justify-between gap-5 flex-wrap w-full">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
          <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
              className="dark:hidden w-[272px] h-[572px]"
              alt=""
            />
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
              className="hidden dark:block w-[272px] h-[572px]"
              alt=""
            />
          </div>
        </div>
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
          <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
            <img
              src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
              className="dark:hidden h-[426px] md:h-[654px]"
              alt=""
            />
            <img
              src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
              className="hidden dark:block h-[426px] md:h-[654px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveDesign;
