import { useEffect } from "react";
import styles from "./ProjectModal.module.scss";

interface ProjectModalProps {
  handleModalClose: () => void;
}

export default function ProjectModal({ handleModalClose }: ProjectModalProps) {
  useEffect(() => {
    // 모달이 열릴 때 스크롤 비활성화
    document.body.style.overflow = "hidden";

    // ESC 키 이벤트 리스너 추가
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleModalClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    // 컴포넌트가 언마운트될 때 스크롤 활성화 및 이벤트 리스너 제거
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [handleModalClose]);

  // 내부 콘텐츠 클릭 이벤트 전파 차단
  const handleInnerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    handleModalClose();
  };

  return (
    <div
      className={`${styles.ProjectModal} fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-40`}
      onClick={handleModalClose}
      style={{ pointerEvents: "auto" }}
    >
      <div
        className="w-[500px] h-[500px] bg-white z-50"
        onClick={handleInnerClick}
        style={{ pointerEvents: "auto" }}
      >
        {/* 모달 콘텐츠 */}
      </div>
    </div>
  );
}
