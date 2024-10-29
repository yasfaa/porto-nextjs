import Logo from "../logo";

export default function Navigation() {
    return (
        <div className="sticky top-0 flex justify-between w-full px-2 items-center bg-white" style={{ padding: '1rem' }}>
            <Logo />
            <div className="menuItems flex space-x-2 md:space-x-4 text-[12px] md:text-[16px]">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}