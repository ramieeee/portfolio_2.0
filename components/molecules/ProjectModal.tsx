import { useEffect, useState } from "react";
import { ProjectDataType } from "@/types/types";
import Image from "next/image";
import PhotoSvg from "@/assets/photo.svg";

interface ProjectModalProps {
  project: ProjectDataType;
  handleModalClose: () => void;
}

export default function ProjectModal({
  project,
  handleModalClose,
}: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // 모달이 열릴 때 스크롤 비활성화
    document.body.style.overflow = "hidden";

    // 애니메이션 시작
    const timer1 = setTimeout(() => setIsVisible(true), 10);
    const timer2 = setTimeout(() => setShowContent(true), 400);

    // ESC 키 이벤트 리스너 추가
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    // 컴포넌트가 언마운트될 때 스크롤 활성화 및 이벤트 리스너 제거
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscKey);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleClose = () => {
    setShowContent(false);
    setIsVisible(false);
    setTimeout(() => {
      handleModalClose();
    }, 300);
  };

  // 내부 콘텐츠 클릭 이벤트 전파 차단
  const handleInnerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-40 transition-all duration-300 ${
        isVisible ? "backdrop-blur-md bg-black bg-opacity-30" : "bg-transparent"
      }`}
      onClick={handleClose}
      style={{ pointerEvents: "auto" }}
    >
      <div
        className={`bg-white bg-opacity-30 backdrop-blur-lg border border-white border-opacity-40 rounded-lg shadow-xl p-4 sm:p-8 w-[95vw] sm:w-auto max-w-2xl max-h-[90vh] sm:max-h-[80vh] overflow-y-auto transition-all duration-300 transform relative ${
          isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
        onClick={handleInnerClick}
        style={{ pointerEvents: "auto" }}
      >
        {/* X 닫기 버튼 */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full transition-all duration-200 text-white shadow-lg backdrop-blur-sm"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div
          className={`transition-opacity duration-300 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* 이미지 섹션 */}
          <div className="w-full h-[200px] sm:h-[300px] flex justify-center items-center mx-auto mb-4 sm:mb-6">
            {project?.images.length > 0 ? (
              <img
                src={`/${project?.images[0]}`}
                alt="project image"
                className="w-full h-full object-cover object-top rounded-lg"
              />
            ) : (
              <div className="flex flex-col justify-center items-center w-full h-full bg-gray-100 rounded-lg">
                <Image src={PhotoSvg} alt="No Image" width={80} height={80} />
                <div className="text-color-main font-suitBold mt-4">
                  No image available
                </div>
              </div>
            )}
          </div>

          {/* 제목 및 기본 정보 */}
          <div className="mb-4 sm:mb-6">
            <h2 className="font-suitBold text-lg sm:text-2xl text-color-highlight mb-2">
              {project.title}
            </h2>
            {project.subtitle && (
              <h3 className="font-suitBold text-base sm:text-lg text-color-secondary mb-3">
                {project.subtitle}
              </h3>
            )}
            <div className="flex flex-col gap-2">
              <div className="font-suitBold text-sm sm:text-base text-color-secondary">
                {project.organization} | {project.category}
              </div>
              <div className="font-suitBold text-sm sm:text-base text-color-secondary">
                {`${project.time.from.year}.${String(
                  project.time.from.month
                ).padStart(2, "0")}.${String(project.time.from.day).padStart(
                  2,
                  "0"
                )} - ${
                  project.time.until.now
                    ? "현재"
                    : `${project.time.until.year}.${String(
                        project.time.until.month
                      ).padStart(2, "0")}.${String(
                        project.time.until.day
                      ).padStart(2, "0")}`
                }`}
              </div>
            </div>
          </div>

          {/* 설명 */}
          <div className="mb-6">
            <h4 className="font-suitBold text-lg text-color-highlight mb-3">
              프로젝트 설명
            </h4>
            <p className="font-suitBold text-color-main leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* 기여도 */}
          {project.contribution && (
            <div className="mb-6">
              <h4 className="font-suitBold text-lg text-color-highlight mb-3">
                기여도
              </h4>
              <p className="font-suitBold text-color-main leading-relaxed">
                {project.contribution}
              </p>
            </div>
          )}

          {/* 기술 스택 */}
          {project.skills && project.skills.length > 0 && (
            <div className="mb-6">
              <h4 className="font-suitBold text-lg text-color-highlight mb-3">
                기술 스택
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 border-2 border-color-highlight text-color-highlight font-suitBold text-sm rounded-full bg-transparent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* URL */}
          {project.url && (
            <div className="mb-6">
              <h4 className="font-suitBold text-lg text-color-highlight mb-3">
                링크
              </h4>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-color-highlight hover:underline font-suitBold"
              >
                {project.url}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
