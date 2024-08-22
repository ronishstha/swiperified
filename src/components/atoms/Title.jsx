import { cn } from "../../utils/utils";

const Title = ({ className }) => {
  return (
    <div
      className={cn(
        "h-9 w-[95%] rounded-lg bg-gradient-to-br from-10% to-60% from-secondary to-primary p-[5px]",
        className
      )}
    >
      <div className="h-full rounded-lg bg-primary"></div>
    </div>
  );
};

export default Title;
