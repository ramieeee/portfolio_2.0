import { ProjectDataType } from "@/types/types";
import Image from "next/image";

interface ProjectCard {
  project: ProjectDataType;
}

export default function ProjectCard({ project }: ProjectCard) {
  return (
    <div className="w-[300px] h-[500px] bg-pink-300 p-10">
      {/* img */}
      <div className="w-full h-[200px] flex justify-center items-center mx-auto">
        {project?.images.length > 0 ? (
          <Image
            src={`/${project?.images[0]}`}
            alt=""
            width={200}
            height={100}
            style={{ width: "auto", height: "100%" }}
          />
        ) : (
          <div>No Image</div>
        )}
      </div>

      {/* 제목, 기간 */}
      <div></div>

      {/* 설명 */}
    </div>
  );
}
