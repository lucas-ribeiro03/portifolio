/* eslint-disable @next/next/no-img-element */
import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";

type ProjectCard = {
  projectPrint: string;
  projectName: string;
  projectDesc: string;
  githubLink: string;
  alternativeImg?: string;
};

const ProjectCard = ({
  githubLink,
  projectDesc,
  projectName,
  projectPrint,
}: ProjectCard) => {
  return (
    <div className="project-card cursor-pointer border-2 border-purple-700 w-full max-w-sm sm:max-w-md lg:max-w-none flex flex-col items-center rounded-xl gap-3 sm:gap-4 hover:transform hover:scale-105 transition pb-4">
      <img
        src={projectPrint}
        alt="Capa do projeto"
        className="w-full h-40 sm:h-48 lg:h-60 object-cover rounded-t-[9px]"
      />
      <h1 className="font-bold text-2xl sm:text-3xl px-4 text-center">
        {projectName}
      </h1>
      <p className="px-4 text-base sm:text-lg text-center line-clamp-3">
        {projectDesc}
      </p>
      <Link
        href={githubLink}
        className="flex gap-2 px-8 sm:px-12 py-2 sm:py-4 bg-purple-700 rounded-lg hover:bg-purple-900 transition text-sm sm:text-base"
      >
        Repositório <ArrowUpRightFromSquare size={18} />
      </Link>
    </div>
  );
};

export default ProjectCard;
