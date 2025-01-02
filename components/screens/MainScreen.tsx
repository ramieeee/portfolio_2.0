import Template from "@/components/Template";

export default function MainScreen() {
  return (
    <Template className="flex flex-row">
      <div className="">
        <div className="text-right">Ramhee Yeon</div>
        <div className="flex flex-col text-right">
          <div>머신러닝 엔지니어,</div>
          <div>인공지능 석학 전공</div>
        </div>
        <div className="flex flex-col text-right">
          <div>매 순간 변화하는 IT 세계에서 새 기술을 익히고</div>
          <div>새로운 아이디어를 통해 나의 방식대로 프로그래밍</div>
          <div>하는 것은 제게 언제나 기쁨을 느끼게 해줍니다.</div>
        </div>
      </div>
      <div>{/* 여기에 내 사진 이미지 */}</div>
    </Template>
  );
}
