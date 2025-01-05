import { useEffect, useState } from "react";
// types
import { CareerDataType } from "@/types/types";

interface TimelineCardProps {
  careerData: CareerDataType;
  isLast: boolean;
}

export default function CareerTimelineCard({
  careerData,
  isLast,
}: TimelineCardProps) {
  const [startMonth, setStartMonth] = useState("0");
  const [endMonth, setEndMonth] = useState("0");

  useEffect(() => {
    careerData && careerData.time.from.month < 10
      ? setStartMonth("0" + careerData.time.from.month.toString())
      : setStartMonth(careerData.time.from.month.toString());

    if (careerData.time.until.now === true) {
      setEndMonth("재직중");
    } else {
      careerData && careerData.time.until.month < 10
        ? setEndMonth("0" + careerData.time.until.month.toString())
        : setEndMonth(careerData.time.until.month.toString());
    }
  }, [careerData]);
  return (
    <div className="flex flex-row w-full">
      {/* number part */}
      <div className="flex w-1/5 text-right flex-col">
        <div className="text-size-subtitle font-suitBold text-color-main">
          {`${careerData.time.from.year}.${startMonth} -`}
        </div>
        <div className="text-size-subtitle folt-suitBold text-color-main">
          {careerData.time.until.now === false
            ? careerData.time.until.year + "."
            : ""}
          {endMonth}
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

      {/* text part */}
      <div className="flex flex-col w-3/5 gap-4">
        <div className="text-size-subtitle font-suitBold text-color-highlight">
          {careerData.company.name}
        </div>
        <div>
          <div className="text-size-body font-suit text-color-secondary">
            {careerData.company.position}
          </div>
          <div className="text-size-body font-suit text-color-secondary">
            {careerData.career.role}
          </div>
        </div>
        <div className="flex flex-row gap-3 text-size-body font-suit text-color-main">
          {careerData.career.skills.length > 0 ? (
            <div className="w-8">기술:</div>
          ) : null}
          <div className="flex flex-row gap-2 text-size-body font-suit text-color-main">
            {careerData.career.skills.map((skill, idx) => {
              return <div key={`${skill}-${idx}`}>{skill}</div>;
            })}
          </div>
        </div>
        <div className="text-size-body font-suit text-color-main">
          {careerData.career.description}
        </div>
      </div>
    </div>
  );
}
