import Template from "@/components/organisms/Template";
import Image from "next/image";
import Link from "next/link";

// photos and logos
import MyPhoto from "@/assets/myPhoto.png";
import GithubLogo from "@/assets/githubLogo.svg";
import LinkedinLogo from "@/assets/linkedinLogo.svg";

export default function MainScreen() {
  return (
    <Template className="h-screen flex items-center">
      <div className="flex flex-col gap-10 sm:gap-20 w-full">
        <div className="flex flex-col sm:flex-row h-auto sm:h-[320px] gap-6">
          <div className="w-full sm:w-1/2 flex flex-col gap-3 h-full justify-center sm:justify-end order-2 sm:order-1">
            <div className="flex flex-row justify-center gap-2 sm:flex-col sm:justify-between sm:h-20">
              <div className="text-center sm:text-right font-suitBold text-xl sm:text-size-title text-color-main">
                {"Ramhee"}
              </div>
              <div className="text-center sm:text-right font-suitBold text-xl sm:text-size-title text-color-main">
                {"Yeon"}
              </div>
            </div>
            <div className="flex flex-col text-center sm:text-right">
              <div className="font-suitBold text-base sm:text-size-subtitle text-color-main">
                {"AI Researcher and Engineer,"}
              </div>
              <div className="font-suitBold text-base sm:text-size-subtitle text-color-main">
                {"Major in AI, MSE"}
              </div>
            </div>
            <div className="flex flex-col text-center sm:text-right">
              <div className="font-suitBold text-sm sm:text-size-body text-color-secondary">
                {"It always excites me to learn new technologies"}
              </div>
              <div className="font-suitBold text-sm sm:text-size-body text-color-secondary">
                {"I enjoy reading researches and implementing them"}
              </div>
              <div className="font-suitBold text-sm sm:text-size-body text-color-secondary">
                {"Currently I am fascinated by LLM and STT"}
              </div>
            </div>
            {/* 아이콘들 */}
            <div className="flex flex-row gap-3 justify-center sm:justify-end">
              <Link
                href="https://www.linkedin.com/in/ramieeee"
                target="__blank"
              >
                <Image src={LinkedinLogo} alt="" width={28} />
              </Link>
              <Link href="https://github.com/ramieeee" target="__blank">
                <Image src={GithubLogo} alt="" width={20} />
              </Link>
            </div>
          </div>
          <div className="flex w-full sm:w-1/2 h-auto sm:h-full items-center sm:items-end justify-center order-1 sm:order-2">
            <div className="flex align-bottom p-3 border-color-main border-[1px]">
              <Image
                className="grayscale hover:grayscale-0 cursor-pointer"
                src={MyPhoto}
                alt="myPhoto"
                style={{
                  height: "auto",
                  width: 180,
                  transition: "0.5s",
                }}
              />
            </div>
          </div>
        </div>

        {/* 아래 quatation */}
        <div className="flex flex-col w-full items-center px-4">
          <div className="flex flex-col w-full sm:w-7/12">
            <div className="font-suitBold text-color-main text-base sm:text-size-subtitle text-center sm:text-left">
              {
                " The most dangerous phrase in the language is, 'We've always done it this way.' "
              }
            </div>
            <div className="font-suitBold text-color-secondary text-sm sm:text-size-subtitle text-center sm:text-right mt-2">
              by Grace Hopper
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}
