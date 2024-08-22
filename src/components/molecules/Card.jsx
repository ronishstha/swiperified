import { cn } from "../../utils/utils";
import Caption from "../atoms/Caption";
import Icon from "../atoms/Icon";
import Image from "../atoms/Image";
import Title from "../atoms/Title";

const Card = ({ active = false }) => {
  return (
    <div
      className={cn(
        "mx-auto flex min-h-screen max-w-screen-sm items-center justify-center opacity-50 scale-90",
        { "opacity-100 scale-100": active }
      )}
    >
      <div
        className={cn(
          "h-[500px] w-full rounded-3xl bg-gradient-to-br from-10% to-60% from-secondary to-tertiary p-[5px]"
        )}
      >
        <div
          className={`h-full flex flex-col shadow-inset p-6 rounded-3xl transition-all duration-300 bg-tertiary`}
        >
          <Image />
          <div className="flex mt-11 w-full">
            <Icon />
            <div className="flex flex-col ml-4 w-[80%] gap-3">
              <Title />
              <Caption />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
