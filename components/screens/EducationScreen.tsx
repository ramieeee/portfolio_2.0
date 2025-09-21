"use client";
import Template from "@/components/organisms/Template";
import { EducationDataType } from "@/types/types";
import EducationTimelineCard from "@/components/molecules/EducationTimelineCard";

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
          console.log(idx + 1 === educationData.length);
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
