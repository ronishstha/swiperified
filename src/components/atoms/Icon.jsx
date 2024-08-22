import { cn } from "../../utils/utils";

const Icon = ({ className }) => {
  return (
    <div
      className={cn(
        "h-20 w-20 rounded-full bg-gradient-to-br from-10% to-60% from-secondary to-primary p-[5px]",
        className
      )}
    >
      <div className="h-full w-full rounded-full bg-primary"></div>
    </div>
  );
};

export default Icon;
