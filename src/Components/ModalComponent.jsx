import { IoMdClose } from "react-icons/io";

const ModalComponent = ({
  title,
  subtitle,
  content,
  onClose,
  start,
  challenge,
}) => {
  return (
    <div className=" fixed inset-0 overflow-auto md:overflow-hidden   bg-black bg-opacity-55 backdrop-blur-sm flex items-center justify-center z-50 h-screen w-full ">
      <div className=" p-4 text-white bg-[url('/images/BackgroundModal.png')] bg-cover rounded-lg shadow-md flex flex-col gap-5 h-fit w-[350px] md:w-[600px] lg:h-[600px] lg:w-[600px] ">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">{title}</h1>
          <button
            aria-label="close"
            className="text-xl  hover:text-red-700"
            onClick={onClose}
          >
            <IoMdClose />
          </button>
        </div>

        <p>{content}</p>
        <p className="mt-4 text-xl font-semibold">{subtitle}</p>
        <p className=" text-[16px]">{start}</p>
        <p className=" text-[16px] hidden md:flex">{challenge}</p>
      </div>
    </div>
  );
};

export default ModalComponent;
