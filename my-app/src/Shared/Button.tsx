import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function Button({
  text,
  children,
  className,
  onClick,
}: {
  onClick?: any;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`flex items-center gap-x-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
        // focus-visible:outline-indigo-600
      >
        {children}
        {text && text}
      </button>
    </>
  );
}
