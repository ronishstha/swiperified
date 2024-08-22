import CardList from "../organism/CardList";
import useDrag from "../../hooks/useDrag";

const Swiper = ({ items = 5 }) => {
  const { currentIndex, dragStart, dragOffset, sliderRef } = useDrag(items);

  return (
    <div
      ref={sliderRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#f4b374] via-[#de2f7c] to-[#7735af] flex justify-center"
    >
      <CardList
        items={items}
        currentIndex={currentIndex}
        dragStart={dragStart}
        dragOffset={dragOffset}
        sliderHeight={sliderRef?.current?.clientHeight}
      />
    </div>
  );
};

export default Swiper;
