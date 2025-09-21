"use client";

import { ProjectDataType } from "@/types/types";
import Image from "next/image";
import PhotoSvg from "@/assets/photo.svg";
import { useState, Fragment } from "react";
import ProjectModal from "./ProjectModal";

interface ProjectCard {
  project: ProjectDataType;
}

export default function ProjectCard({ project }: ProjectCard) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <div
        className={`flex flex-col w-full max-w-[350px] h-[400px] sm:h-[500px] bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 rounded-lg shadow-xl cursor-pointer relative gap-4 sm:gap-6 overflow-hidden p-3 sm:p-4 group transition-all duration-300`}
        onClick={handleCardClick}
      >
        {/* 프리즘 빛 효과 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-purple-300/8 to-pink-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
        {/* img */}
        <div className="w-full h-[150px] sm:h-[200px] flex justify-center items-center mx-auto rounded-lg overflow-hidden bg-white bg-opacity-10">
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
              <div className="text-white font-suitBold opacity-80">
                No image available
              </div>
            </div>
          )}
        </div>

        {/* 제목, 기간 */}
        <div className="flex flex-col">
          <div className="font-suitBold text-sm sm:text-size-subtitle text-white z-10 leading-tight">
            {project.title}
          </div>
          <div className="mt-2">
            <div className="font-suitBold text-xs sm:text-size-body text-white text-opacity-80">
              {project.organization}
            </div>
            <div className="font-suitBold text-xs sm:text-size-body text-white text-opacity-80">{`${project.time.from.year}.${project.time.from.year} - ${project.time.until.year}.${project.time.until.year}`}</div>
          </div>
        </div>

        {/* 설명 */}
        <div
          className="font-suitBold text-xs sm:text-size-body text-white text-opacity-70 flex-1"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {project.description}
        </div>
      </div>
      {isModalOpen && (
        <ProjectModal project={project} handleModalClose={handleModalClose} />
      )}
    </Fragment>
  );
}
