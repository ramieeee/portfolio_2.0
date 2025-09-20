"use client";

import { ProjectDataType } from "@/types/types";
import Image from "next/image";
import PhotoSvg from "@/assets/photo.svg";
import styles from "./ProjectCard.module.scss";
import { useState } from "react";
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
    <div
      className={`flex flex-col w-[350px] h-[500px] border-[1px] border-color-main cursor-pointer relative gap-6 overflow-hidden p-4`}
      onClick={handleCardClick}
    >
      <div className={styles.glassLayer}></div>
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
        <div className="font-suitBold text-size-subtitle text-color-highlight z-10">
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
      <div
        className="font-suitBold text-size-body text-color-main"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {project.description}
      </div>
      {isModalOpen && (
        <ProjectModal project={project} handleModalClose={handleModalClose} />
      )}
    </div>
  );
}
