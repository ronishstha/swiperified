import Card from "../molecules/Card";
import { cn, getSlideStyle, isItemActive } from "../../utils/utils";

const CardList = ({
  items,
  currentIndex,
  dragStart,
  dragOffset,
  sliderHeight,
}) => {
  return [...Array(items)]?.map((item, index) => (
    <div
      key={index}
      className={cn("absolute top-0 w-[350px] h-[350px] sm:w-[450px]", {
        "w-[400px] h-[450px] sm:w-[500px]": isItemActive(index, currentIndex),
      })}
      style={getSlideStyle(
        index,
        currentIndex,
        dragStart,
        dragOffset,
        sliderHeight
      )}
    >
      <Card active={index === currentIndex} />
    </div>
  ));
};

export default CardList;
