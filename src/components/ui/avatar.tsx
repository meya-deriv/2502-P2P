import { cn } from "@/lib/utils";

interface AvatarProps {
  text: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
};

export const Avatar = ({ text, size = "md", className }: AvatarProps) => {
  return (
    <div
      className={cn(
        "bg-gray-100 rounded-full flex items-center justify-center font-medium",
        sizeClasses[size],
        className,
      )}
    >
      {text.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
