import { FaFigma } from "react-icons/fa6";

export default function Logo() {
  return (
    <div
      className="flex flex-row items-center leading-none text-white"
    >
      <FaFigma className="h-10 w-10" color="black"/>
      <p className="text-[35px] text-black">Portofolio</p>
    </div>
  );
}
