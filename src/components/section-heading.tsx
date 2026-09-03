type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase text-ember">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl font-black text-walnut md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-bark/78 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
