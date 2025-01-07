import Template from "@/components/organisms/Template";
import { ProjectDataType } from "@/types/types";
import ProjectCard from "@/components/molecules/ProjectCard";

interface ProjectScreenProps {
  projectData: ProjectDataType[];
}

export default function ProjectScreen({ projectData }: ProjectScreenProps) {
  return (
    <Template subtitle="Projects">
      {projectData?.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </Template>
  );
}
