"use client";
import Template from "@/components/organisms/Template";
import { CareerDataType } from "@/types/types";

interface ICareerScreen {
  careerData: CareerDataType[];
}

export default function CareerScreen({ careerData }: ICareerScreen) {
  return (
    <Template subtitle="Career" className="">
      {careerData.map((career, _) => {
        return (
          <div key={career.id}>
            <></>
          </div>
        );
      })}
    </Template>
  );
}
