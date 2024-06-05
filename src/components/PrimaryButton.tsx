type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: JSX.Element;
};

export function PrimaryButton({
  icon,
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className="relative border-none px-4 h-10 overflow-hidden group rounded"
      {...props}
    >
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-[200%] top-0 left-0 bg-gradient-to-r from-cyan-900 via-purple-900 to-cyan-900 group-hover:-translate-x-1/2 transition duration-300"></div>
      </div>
      <div className="z-10 text-white font-medium w-full flex justify-center items-center gap-3">
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
