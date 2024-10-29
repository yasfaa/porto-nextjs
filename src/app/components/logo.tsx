import { FaFigma } from "react-icons/fa6";

export default function Logo() {
  return (
    <div
      className="flex flex-row items-center leading-none text-white"
    >
      <FaFigma className="h-7 w-7 md:h-10 md:w-10" color="black" />
      <p className="text-[25px] md:text-[35px] text-black font-semibold">Portofolio</p>
    </div>
  );
}
