import type { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function MainContainer({
  children,
  className = "",
}: MainContainerProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 p-4 ${className}`}
    >
      {children}
    </div>
  );
}