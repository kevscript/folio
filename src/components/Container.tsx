type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {};

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={`w-[50rem] max-w-[90%] mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
}
