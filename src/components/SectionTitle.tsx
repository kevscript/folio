type SectionTitleProps = {
  label: string;
};

export function SectionTitle({ label }: SectionTitleProps) {
  return (
    <div className="relative z-0 max-w-fit">
      <h3 className="uppercase font-black text-3xl italic">{label}</h3>
      <h3 className="absolute top-[1px] -left-[1px] uppercase font-black text-3xl italic text-cyan-400 -z-10">
        {label}
      </h3>
      <h3 className="absolute bottom-[1px] -right-[1px] uppercase font-black text-3xl italic text-purple-500 -z-20">
        {label}
      </h3>
    </div>
  );
}
