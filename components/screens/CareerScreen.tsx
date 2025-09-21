"use client";
import Template from "@/components/organisms/Template";
import { CareerDataType } from "@/types/types";
import CareerTimelineCard from "@/components/molecules/CareerTimelineCard";

interface CareerScreenProps {
  careerData: CareerDataType[];
}

export default function CareerScreen({ careerData }: CareerScreenProps) {
  return (
    <Template subtitle="Career" className="flex flex-col">
      <div className="flex flex-col gap-20">
        {careerData.map((data, idx) => {
          return (
            <CareerTimelineCard
              careerData={data}
              key={data.id}
              isLast={idx + 1 === careerData.length}
              isFirst={idx === 0}
            />
          );
        })}
      </div>
    </Template>
  );
}
