import MainScreen from "@/components/screens/MainScreen";
import CareerScreen from "@/components/screens/CareerScreen";

// types
import { CareerDataType } from "@/types/types";

export default function Home() {
  const careerData: CareerDataType[] = require("@/assets/jsonFiles/careerKo.json");

  return (
    <div className="w-full flex items-center flex-col">
      <MainScreen />
      <CareerScreen careerData={careerData} />
    </div>
  );
}
