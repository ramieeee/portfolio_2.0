import { ProjectDataType } from "@/types/types";
import Image from "next/image";
import PhotoSvg from "@/assets/photo.svg";

interface ProjectCard {
  project: ProjectDataType;
}

export default function ProjectCard({ project }: ProjectCard) {
  return (
    <div className="w-[350px] h-[500px] p-2 border-[1px] border-color-main">
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
              width={100}
              height={100}
              style={{ width: "40%", height: "40%" }}
            />
            <div className="text-color-main font-suitBold">
              No image available
            </div>
          </div>
        )}
        {/* {project?.images.length > 0 ? (
          <Image
            src={`/${project?.images[0]}`}
            alt="Project Image"
            width={100}
            height={100}
            style={{ width: "auto", height: "100%" }}
          />
        ) : (
          <div className="flex flex-col justify-center items-center">
            <Image
              src={PhotoSvg}
              alt="No Image"
              width={100}
              height={100}
              style={{ width: "40%", height: "40%" }}
            />
            <div>No image</div>
          </div>
        )} */}
      </div>

      {/* 제목, 기간 */}
      <div></div>

      {/* 설명 */}
    </div>
  );
}
