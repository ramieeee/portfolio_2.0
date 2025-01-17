interface TemplateProps {
  children: React.ReactNode;
  subtitle?: string;
  subTitlePosition?: "left" | "right";
  className?: string;
}

export default function Template({
  children,
  subtitle,
  subTitlePosition = "left",
  className,
}: TemplateProps) {
  return (
    <div
      className={`w-full max-w-4xl py-28 ${className} px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24`}
    >
      {subtitle && (
        <div
          className={`flex
            justify-${subTitlePosition === "right" ? "end" : "start"}
            text-size-screenTitle
            font-suitBold
            text-color-main
            w-full
            mb-14
            `}
        >
          {subtitle}
        </div>
      )}
      <div className="w-full">{children}</div>
    </div>
  );
}
