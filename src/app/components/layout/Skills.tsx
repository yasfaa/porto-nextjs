import { skillLists as skills } from "./data/skill-list";

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
                        {skills.map((skill) => (
                            <div key={skill.name} className="flex flex-col items-center gap-2 px-2">
                                {skill.icon}
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}