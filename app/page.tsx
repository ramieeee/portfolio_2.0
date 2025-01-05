import MainScreen from "@/components/screens/MainScreen";
import CareerScreen from "@/components/screens/CareerScreen";
import EducationScreen from "@/components/screens/EducationScreen";

// types
import { CareerDataType, EducationDataType } from "@/types/types";

export default function Home() {
  const careerData: CareerDataType[] = require("@/assets/jsonFiles/careerKo.json");
  const educationData: EducationDataType[] = require("@/assets/jsonFiles/educationKo.json");

  return (
    <div className="w-full flex items-center flex-col">
      <MainScreen />
      <CareerScreen careerData={careerData} />
      <EducationScreen educationData={educationData} />
    </div>
  );
}
