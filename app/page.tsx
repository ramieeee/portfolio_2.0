import MainScreen from "@/components/screens/MainScreen";
import CareerScreen from "@/components/screens/CareerScreen";
import EducationScreen from "@/components/screens/EducationScreen";
import ProjectScreen from "@/components/screens/ProjectScreen";

// types
import {
  CareerDataType,
  EducationDataType,
  ProjectDataType,
} from "@/types/types";

import careerData from "@/assets/jsonFiles/careerKo.json";
import educationData from "@/assets/jsonFiles/educationKo.json";
import projectData from "@/assets/jsonFiles/projectKo.json";

export default function Home() {
  return (
    <div className="w-full flex items-center flex-col">
      <MainScreen />
      <CareerScreen careerData={careerData as CareerDataType[]} />
      <EducationScreen educationData={educationData as EducationDataType[]} />
      <ProjectScreen projectData={projectData as ProjectDataType[]} />
    </div>
  );
}
