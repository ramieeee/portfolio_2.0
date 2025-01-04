import MainScreen from "@/components/screens/MainScreen";
import CareerScreen from "@/components/screens/CareerScreen";

export default function Home() {
  return (
    <div className="w-full flex items-center flex-col">
      <MainScreen />
      <CareerScreen />
    </div>
  );
}
