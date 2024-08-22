import { cn } from "../../utils/utils";

const Image = ({ className }) => {
  return (
    <div
      className={cn(
        "h-48 w-full rounded-3xl bg-gradient-to-br from-10% to-60% from-secondary to-primary p-[5px]",
        className
      )}
    >
      <div className="h-full w-full bg-primary rounded-3xl"></div>
    </div>
  );
};

export default Image;
