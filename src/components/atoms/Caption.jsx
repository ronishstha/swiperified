import { cn } from "../../utils/utils";

const Caption = ({ className }) => {
  return (
    <div
      className={cn(
        "h-3 w-[40%] rounded-lg bg-gradient-to-br from-10% to-60% from-secondary to-primary p-[5px]",
        className
      )}
    >
      <div className="h-full rounded-lg bg-primary"></div>
    </div>
  );
};

export default Caption;
