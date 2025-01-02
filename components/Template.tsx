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
    <div className={`w-full max-w-2xl h-screen py-28 ${className}`}>
      {subtitle && (
        <div
          className={`flex
            justify-${subTitlePosition === "right" ? "end" : "start"}`}
        >
          {subtitle}
        </div>
      )}
      <div className="max-w-2xl">{children}</div>
    </div>
  );
}
