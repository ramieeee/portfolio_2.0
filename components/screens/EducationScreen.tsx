"use client";
import Template from "@/components/organisms/Template";
import { CareerDataType, EducationDataType } from "@/types/types";
import EducationTimelineCard from "@/components/molecules/EducationTimelineCard";

interface CareerScreenProps {
  careerData: CareerDataType[];
}
interface EducationScreenProps {
  educationData: EducationDataType[];
}

export default function EducationScreen({
  educationData,
}: EducationScreenProps) {
  return (
    <Template
      subtitle="Education"
      className="flex flex-col"
      subTitlePosition="right"
    >
      <div className="flex flex-col gap-20">
        {educationData.map((data, idx) => {
          return (
            <EducationTimelineCard
              educationData={data}
              key={data.id}
              isLast={idx + 1 === educationData.length}
            />
          );
        })}
      </div>
    </Template>
  );
}
