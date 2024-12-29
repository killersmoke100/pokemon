import { cn } from "@/lib/utils";

export function LoadingSpinnerComponent() {
  return (
    <div className="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("animate-spin")}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </div>
  );
}