import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h1 className={cn("text-4xl font-semibold leading-none", className)}>
      {children}
    </h1>
  );
};

export default Heading;
