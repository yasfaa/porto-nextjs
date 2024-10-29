import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDocker, FaLaravel } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { LiaVuejs } from "react-icons/lia";

export default function Skills() {
    return (
        <div className="w-full py-8 md:py-12 2xl:py-16">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                        <p className="items-center justify-center">Skills</p>
                    </div>
                    <div>
                        <p>The skills & tecnologies i am familiar with:</p>
                    </div>
                    <div className="grid grid-cols-2 gap-y-4 md:grid-cols-4 md:gap-y-8 lg:grid-cols-5 lg:gap-y-12">
                        <div className="flex flex-col items-center gap-2 px-2">
                            <RiJavascriptFill className="h-20 w-20 text-yellow-500" />
                            <p>JavaScript</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 px-2">
                            <BiLogoTypescript className="h-20 w-20 text-blue-500" />
                            <p>Typescript</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 px-2">
                            <FaLaravel className="h-20 w-20 text-red-500" />
                            <p>Laravel</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 px-2">
                            <SiTailwindcss className="h-20 w-20 text-teal-500" />
                            <p>Tailwind CSS</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 px-2">
                            <FaBootstrap className="h-20 w-20 text-purple-500" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 px-2">
                            <FaReact className="h-20 w-20 text-blue-400" />
                            <p>React</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 px-2">
                            <LiaVuejs className="h-20 w-20 text-green-500" />
                            <p>Vue.js</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 px-2">
                            <SiMysql className="h-20 w-20 text-blue-600" />
                            <p>MySQL</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 px-2">
                            <SiPostgresql className="h-20 w-20 text-blue-700" />
                            <p>PostgreSQL</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 px-2">
                            <FaDocker className="h-20 w-20 text-blue-500" />
                            <p>Docker</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}