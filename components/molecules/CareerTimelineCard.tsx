import { useEffect, useState } from "react";
// types
import { CareerDataType } from "@/types/types";

interface TimelineCardProps {
  careerData: CareerDataType;
  isLast: boolean;
  isFirst?: boolean;
}

export default function CareerTimelineCard({
  careerData,
  isLast,
  isFirst = false,
}: TimelineCardProps) {
  const [startMonth, setStartMonth] = useState("0");
  const [endMonth, setEndMonth] = useState("0");

  useEffect(() => {
    if (careerData) {
      if (careerData.time.from.month < 10) {
        setStartMonth("0" + careerData.time.from.month.toString());
      } else {
        setStartMonth(careerData.time.from.month.toString());
      }

      if (careerData.time.until.now === true) {
        setEndMonth("Current");
      } else {
        if (careerData.time.until.month < 10) {
          setEndMonth("0" + careerData.time.until.month.toString());
        } else {
          setEndMonth(careerData.time.until.month.toString());
        }
      }
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
        {/* line going up */}
        {!isFirst && (
          <div className="absolute w-[2px] h-20 bg-color-main left-1/2 -translate-x-1/2 -top-16" />
        )}
        {/* line going down */}
        {!isLast && (
          <div className="absolute w-[2px] h-full bg-color-main left-1/2 -translate-x-1/2 top-4" />
        )}
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
        {careerData.career.skills.length > 0 ? (
          <div className="flex flex-row gap-3 text-size-body font-suit text-color-main">
            <div className="w-8">{`Skills:`}</div>
            <div className="flex flex-row gap-2 text-size-body font-suit text-color-main">
              {careerData.career.skills}
            </div>
          </div>
        ) : null}
        <div className="text-size-body font-suit text-color-main">
          {careerData.career.description}
        </div>
      </div>
    </div>
  );
}
