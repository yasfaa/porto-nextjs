import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDocker, FaLaravel } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { LiaVuejs } from "react-icons/lia";

export const skillLists = [
    { name: "JavaScript", icon: <RiJavascriptFill className="h-20 w-20 text-yellow-500" /> },
    { name: "TypeScript", icon: <BiLogoTypescript className="h-20 w-20 text-blue-500" /> },
    { name: "Laravel", icon: <FaLaravel className="h-20 w-20 text-red-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="h-20 w-20 text-teal-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="h-20 w-20 text-purple-500" /> },
    { name: "React", icon: <FaReact className="h-20 w-20 text-blue-400" /> },
    { name: "Vue.js", icon: <LiaVuejs className="h-20 w-20 text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="h-20 w-20 text-blue-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="h-20 w-20 text-blue-700" /> },
    { name: "Docker", icon: <FaDocker className="h-20 w-20 text-blue-500" /> },
  ];