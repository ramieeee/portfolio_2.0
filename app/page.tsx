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

export default function Home() {
  const careerData: CareerDataType[] = require("@/assets/jsonFiles/careerKo.json");
  const educationData: EducationDataType[] = require("@/assets/jsonFiles/educationKo.json");
  const projectData: ProjectDataType[] = require("@/assets/jsonFiles/projectKo.json");

  return (
    <div className="w-full flex items-center flex-col">
      <MainScreen />
      <CareerScreen careerData={careerData} />
      <EducationScreen educationData={educationData} />
      <ProjectScreen projectData={projectData} />
    </div>
  );
}
