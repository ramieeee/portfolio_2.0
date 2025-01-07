import Template from "@/components/organisms/Template";
import { ProjectDataType } from "@/types/types";

interface ProjectScreenProps {
  projectData: ProjectDataType[];
}

export default function ProjectScreen({ projectData }: ProjectScreenProps) {
  return (
    <Template subtitle="Projects">
      <div></div>
    </Template>
  );
}
