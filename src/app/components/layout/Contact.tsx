'use client'

import { MdContentCopy } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


export default function Contact() {
    return (
        <div className="mt-4 flex grow flex-col gap-2 md:flex-row max-h-fit ">
            <div className="flex flex-col gap-2 px-6 md:w-1/2 md:px-20">
                <h3 className="text-xl md:text-2xl text-gray-800 font-semibold">Let's Work Together</h3>
                <div className="flex gap-3">
                    <a href="https://github.com/yasfaa" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-8 h-8" />
                    </a>
                    <a href="https://linkedin.com/in/yasfainun" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-8 h-8" />
                    </a>
                </div>
            </div>
            <div className="flex grow flex-col text-xl md:text-2xl font-semibold px-6 md:w-1/2 md:px-20">
                <div className=" flex mb-3 gap-2">
                    <p>Email: yasfainun@gmail.com</p>
                    <MdContentCopy className="inline-block mr-2 cursor-pointer" onClick={() => navigator.clipboard.writeText('yasfainun@gmail.com')} />
                </div>
                <div className="flex gap-2">
                    <p >Phone: 085155245904</p>
                    <MdContentCopy className="inline-block mr-2 cursor-pointer" onClick={() => navigator.clipboard.writeText('085155245904')} />
                </div>
            </div>
        </div>
    );
}