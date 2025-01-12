import { ProjectDataType } from "@/types/types";
import Image from "next/image";
import PhotoSvg from "@/assets/photo.svg";

interface ProjectCard {
  project: ProjectDataType;
}

export default function ProjectCard({ project }: ProjectCard) {
  return (
    <div
      className="flex flex-col w-[350px] h-[500px] p-2 border-[1px]
      border-color-main cursor-pointer hover:bg-color-secondary
      transition-all duration-200 overflow-hidden gap-6"
    >
      {/* img */}
      <div className="w-full h-[200px] flex justify-center items-center mx-auto">
        {project?.images.length > 0 ? (
          <img
            src={`/${project?.images[0]}`}
            alt="image"
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="flex flex-col justify-center items-center">
            <Image
              src={PhotoSvg}
              alt="No Image"
              width={50}
              height={50}
              style={{ width: "20%", height: "20%" }}
            />
            <div className="text-color-main font-suitBold">
              No image available
            </div>
          </div>
        )}
      </div>

      {/* 제목, 기간 */}
      <div className="flex flex-col">
        <div className="font-suitBold text-size-subtitle text-color-highlight">
          {project.title}
        </div>
        <div>
          <div className="font-suitBold text-size-body text-color-secondary">
            {project.organization}
          </div>
          <div className="font-suitBold text-size-body text-color-secondary">{`${project.time.from.year}.${project.time.from.year} - ${project.time.until.year}.${project.time.until.year}`}</div>
        </div>
      </div>

      {/* 설명 */}
      <div className="flex font-suitBold text-size-body text-color-main">
        {project.description}
      </div>
    </div>
  );
}
