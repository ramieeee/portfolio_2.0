import Template from "@/components/Template";

export default function MainScreen() {
  return (
    <Template>
      <div className="flex flex-row">
        <div className="bg-pink-200 w-1/2">
          <div className="text-right font-suitBold text-size-title">
            Ramhee Yeon
          </div>
          <div className="flex flex-col text-right">
            <div className="font-suitBold text-size-subtitle">
              머신러닝 엔지니어,
            </div>
            <div className="font-suitBold text-size-subtitle">
              인공지능 석학 전공
            </div>
          </div>
          <div className="flex flex-col text-right">
            <div className="font-suitBold text-size-body">
              매 순간 변화하는 IT 세계에서 새 기술을 익히고
            </div>
            <div className="font-suitBold text-size-body">
              새로운 아이디어를 통해 나의 방식대로 프로그래밍
            </div>
            <div className="font-suitBold text-size-body">
              하는 것은 제게 언제나 기쁨을 느끼게 해줍니다.
            </div>
          </div>
        </div>
        <div className="bg-pink-300 w-1/2 h-[300px]">
          {/* 여기에 내 사진 이미지 */}
        </div>
      </div>
    </Template>
  );
}
