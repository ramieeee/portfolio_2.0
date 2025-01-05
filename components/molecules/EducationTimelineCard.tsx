import { useEffect, useState } from "react";
// types
import { CareerDataType, EducationDataType } from "@/types/types";

interface TimelineCardProps {
  educationData: EducationDataType;
  isLast: boolean;
}

export default function EducationTimelineCard({
  educationData,
  isLast,
}: TimelineCardProps) {
  const [startMonth, setStartMonth] = useState("0");
  const [endMonth, setEndMonth] = useState("0");

  useEffect(() => {
    educationData && educationData.time.from.month < 10
      ? setStartMonth("0" + educationData.time.from.month.toString())
      : setStartMonth(educationData.time.from.month.toString());

    if (educationData.time.until.now === true) {
      setEndMonth("재직중");
    } else {
      educationData && educationData.time.until.month < 10
        ? setEndMonth("0" + educationData.time.until.month.toString())
        : setEndMonth(educationData.time.until.month.toString());
    }
  }, [educationData]);

  return (
    <div className="flex flex-row w-full pr-6">
      {/* text part */}
      <div className="flex flex-col w-3/5 gap-4 text-right">
        <div className="text-size-subtitle font-suitBold text-color-highlight">
          {educationData.university.name}
        </div>
        <div>
          <div className="text-size-body font-suit text-color-secondary">
            {educationData.university.location}
          </div>
        </div>
        {educationData.education.skills.length > 0 ? (
          <div className="flex flex-row gap-3 text-size-body font-suit text-color-main justify-end">
            <div className="w-8">기술:</div>
            <div className="flex flex-row gap-2 text-size-body font-suit text-color-main">
              {educationData.education.skills.map((skill, idx) => {
                return <div key={`${skill}-${idx}`}>{skill}</div>;
              })}
            </div>
          </div>
        ) : null}
        <div className="text-size-body font-suit text-color-main">
          {educationData.education.description}
        </div>
      </div>

      {/* line part */}
      <div className="flex w-1/5 justify-center pt-2 relative">
        {/* circle */}
        <div className="flex rounded-full w-4 h-4 bg-color-main z-10" />
        {/* line */}
        <div
          className={`absolute w-[2px] ${
            isLast ? "h-0" : "h-[180%]"
          } bg-color-main left-1/2 -translate-x-1/2`}
        />
      </div>

      {/* number part */}
      <div className="flex w-2/12 text-right flex-col">
        <div className="text-size-subtitle font-suitBold text-color-main">
          {`${educationData.time.from.year}.${startMonth} -`}
        </div>
        <div className="text-size-subtitle folt-suitBold text-color-main">
          {educationData.time.until.now === false
            ? educationData.time.until.year + "."
            : ""}
          {endMonth}
        </div>
      </div>
    </div>
  );
}
