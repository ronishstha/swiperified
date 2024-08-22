import Caption from "../atoms/Caption";
import Icon from "../atoms/Icon";
import Image from "../atoms/Image";
import Title from "../atoms/Title";

const Card = ({ active = false }) => {
  return (
    <div className="h-[500px] w-[600px] rounded-3xl bg-gradient-to-br from-10% to-60% from-secondary to-tertiary p-[5px]">
      <div
        className={`h-full flex flex-col shadow-inset p-6 rounded-3xl transition-all duration-300 bg-tertiary scale- `}
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
  );
};

export default Card;
