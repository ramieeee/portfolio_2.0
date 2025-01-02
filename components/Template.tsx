interface TemplateProps {
  children: React.ReactNode;
  subtitle: string;
  subTitlePosition: "left" | "right";
}

export default function Template({
  children,
  subtitle,
  subTitlePosition = "left",
}: TemplateProps) {
  return (
    <div className={`w-full h-full`}>
      {subtitle && (
        <div
          className={`justify-${
            subTitlePosition === "right" ? "end" : "start"
          }`}
        >
          {subtitle}
        </div>
      )}
      <div className="max-w-2xl">{children}</div>
    </div>
  );
}
