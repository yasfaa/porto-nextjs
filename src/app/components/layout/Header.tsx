import Image from "next/image";

export default function Header() {
    return (
        <div className="mt-4 flex grow flex-col gap-2 md:flex-row max-h-fit">
            <div className="flex flex-col gap-6 rounded-lg px-6 md:w-1/2 md:px-20">
                <h3 className="text-l md:text-xl text-gray-800 font-semibold">Web Developer | Backend Developer</h3>
                <h1 className="text-4xl md:text-5xl text-gray-800 font-black">Yasfa Ainun Abdullah</h1>
                <p className="text-l text-gray-800 md:text-xl md:leading-normal mb-6">
                    I am a web and backend developer experienced in building applications with Laravel, Next.js, and Vue.js, and familiar with PostgreSQL and MySQL. Open to collaboration on exciting projects — feel free to reach out!
                </p>
                <a href="#contact" className="mx-auto mb-6 self-center sm:self-start btn btn-primary btn-outline sm:btn-wide sm:btn-lg">
                    <p className="text-xl font-extrabold tracking-wider">Contact</p>
                </a>
            </div>
            <div className="flex grow justify-center h-96">
                <Image
                    src="/hero_icon.jpg"
                    width={400}
                    height={400}
                    priority={true}
                    alt="hero icon"
                    className="w-30 object-cover rounded-lg"
                />
            </div>
        </div>
    );
}