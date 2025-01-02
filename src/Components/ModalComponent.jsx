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
      <div className=" text-white p-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-lg shadow-md flex flex-col gap-5 h-fit w-[300px] md:w-[800px] ">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">{title}</h1>
          <button
            aria-label="close"
            className="text-xl text-white hover:text-red-700"
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
