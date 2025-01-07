import { ProjectDataType } from "@/types/types";

interface ProjectCard {
  project: ProjectDataType;
}

export default function ProjectCard({ project }: ProjectCard) {
  return (
    <div>
      {/* img */}
      <div></div>

      {/* 제목, 기간 */}
      <div></div>

      {/* 설명 */}
    </div>
  );
}
