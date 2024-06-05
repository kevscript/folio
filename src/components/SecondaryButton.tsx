type SecondaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: JSX.Element;
};

export function SecondaryButton({
  children,
  icon,
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      className="relative border-none overflow-hidden group/secondary rounded bg-zinc-900"
      {...props}
    >
      <div className="absolute inset-0 z-10 opacity-0 group-hover/secondary:opacity-100">
        <div className="h-full w-full top-0 left-0 bg-gradient-to-r from-cyan-900 to-purple-900"></div>
      </div>
      <div className="z-20 absolute inset-[1px] bg-zinc-950 rounded"></div>
      <div className="relative z-30 text-white font-medium w-full flex justify-center items-center gap-3 px-4 h-10">
        {children}
        {icon && (
          <div className="w-4 h-4 overflow-hidden flex justify-center items-center relative">
            {icon}
          </div>
        )}
      </div>
    </button>
  );
}
