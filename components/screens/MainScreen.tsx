import Template from "@/components/Template";
import Image from "next/image";
import MyPhoto from "@/assets/myPhoto.png";

export default function MainScreen() {
  return (
    <Template>
      <div className="flex flex-col gap-20 w-full">
        <div className="flex flex-row h-[320px] gap-6">
          <div className="w-1/2 flex flex-col gap-3 h-full justify-end">
            <div className="text-right font-suitBold text-size-title text-color-main">
              Ramhee Yeon
            </div>
            <div className="flex flex-col text-right">
              <div className="font-suitBold text-size-subtitle text-color-main">
                머신러닝 엔지니어,
              </div>
              <div className="font-suitBold text-size-subtitle  text-color-main">
                인공지능 석학 전공
              </div>
            </div>
            <div className="flex flex-col text-right">
              <div className="font-suitBold text-size-body text-color-secondary">
                매 순간 변화하는 IT 세계에서 새 기술을 익히고
              </div>
              <div className="font-suitBold text-size-body text-color-secondary">
                새로운 아이디어를 통해 나의 방식대로 프로그래밍
              </div>
              <div className="font-suitBold text-size-body text-color-secondary">
                하는 것은 제게 언제나 기쁨을 느끼게 해줍니다.
              </div>
            </div>
            {/* 아이콘들 */}
            <div className="flex flex-row gap-3 justify-end">
              <div className="w-10 h-10 bg-[#D3E77C]"></div>
              <div className="w-10 h-10 bg-[#D3E77C]"></div>
              <div className="w-10 h-10 bg-[#D3E77C]"></div>
            </div>
          </div>
          <div className="flex w-1/2 h-full items-end">
            <div className="flex align-bottom p-3 border-color-main border-[1px]">
              <Image
                className="grayscale hover:grayscale-0 cursor-pointer"
                src={MyPhoto}
                alt="myPhoto"
                style={{
                  height: "auto",
                  width: 240,
                  transition: "0.5s",
                }}
              />
            </div>
          </div>
        </div>

        {/* 아래 quatation */}
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col w-2/3">
            <div className="font-suitBold text-color-main text-size-subtitle align-middle">
              " The most dangerous phrase in the language is, 'We've always done
              it this way.' "
            </div>
            <div className="font-suitBold text-color-secondary text-size-subtitle text-right">
              by Grace Hopper
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}