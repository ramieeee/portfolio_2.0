import Template from "@/components/organisms/Template";
import { ProjectDataType } from "@/types/types";
import ProjectCard from "@/components/molecules/ProjectCard";

interface ProjectScreenProps {
  projectData: ProjectDataType[];
}

export default function ProjectScreen({ projectData }: ProjectScreenProps) {
  return (
    <Template subtitle="Projects">
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 justify-items-center">
        {projectData?.map((project, idx) => {
          return (
            <ProjectCard project={project} key={`${project.title}-${idx}`} />
          );
        })}
      </div>
    </Template>
  );
}
