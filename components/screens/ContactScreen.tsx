import Template from "@/components/organisms/Template";
import Link from "next/link";

export default function ContactScreen() {
  return (
    <Template subtitle="Contact">
      <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
        {/* 메인 메시지 */}
        <div className="text-center mb-8">
          <h2 className="font-suitBold text-2xl sm:text-3xl text-color-highlight mb-4">
            Get In Touch
          </h2>
          <p className="font-suitBold text-lg text-color-main leading-relaxed">
            Whenever you feel like getting in touch with me, reach out to me.
            <br />
            I'd love to hear from you and discuss new opportunities.
          </p>
        </div>

        {/* 연락처 카드들 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {/* 이메일 카드 */}
          <div className="p-6 hover:opacity-80 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center gap-4">
              <div>
                <h3 className="font-suitBold text-lg text-color-highlight mb-2">
                  Email
                </h3>
                <Link
                  href="mailto:rambotty@gmail.com"
                  className="font-suitBold text-color-main hover:text-color-highlight transition-colors duration-200"
                >
                  rambotty@gmail.com
                </Link>
              </div>
            </div>
          </div>

          {/* 링크드인 카드 */}
          <div className="p-6 hover:opacity-80 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center gap-4">
              <div>
                <h3 className="font-suitBold text-lg text-color-highlight mb-2">
                  LinkedIn
                </h3>
                <Link
                  href="https://linkedin.com/in/ramieeee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-suitBold text-color-main hover:text-color-highlight transition-colors duration-200"
                >
                  linkedin.com/in/ramieeee
                </Link>
              </div>
            </div>
          </div>

          {/* 깃허브 카드 */}
          <div className="p-6 hover:opacity-80 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center gap-4">
              <div>
                <h3 className="font-suitBold text-lg text-color-highlight mb-2">
                  GitHub
                </h3>
                <Link
                  href="https://github.com/ramieeee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-suitBold text-color-main hover:text-color-highlight transition-colors duration-200"
                >
                  github.com/ramieeee
                </Link>
              </div>
            </div>
          </div>

          {/* 전화번호 카드 */}
          <div className="p-6 hover:opacity-80 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center gap-4">
              <div>
                <h3 className="font-suitBold text-lg text-color-highlight mb-2">
                  Blog
                </h3>
                <Link
                  href="https://ramieeee.hashnode.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-suitBold text-color-main hover:text-color-highlight transition-colors duration-200"
                >
                  ramieeee.hashnode.dev
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 추가 메시지 */}
        <div className="text-center mt-8">
          <p className="font-suitBold text-color-secondary">
            Looking forward to connecting with you!
          </p>
        </div>
      </div>
    </Template>
  );
}
