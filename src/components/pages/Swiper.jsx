import CardList from "../organism/CardList";
import useDrag from "../../hooks/useDrag";

const Swiper = () => {
  const items = [1, 2, 3];
  const { currentIndex, dragStart, dragOffset, sliderRef } = useDrag(
    items.length
  );

  return (
    <div
      ref={sliderRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#f4b374] via-[#de2f7c] to-[#7735af] flex justify-center"
    >
      <div>
        <CardList
          items={items}
          currentIndex={currentIndex}
          dragStart={dragStart}
          dragOffset={dragOffset}
        />
      </div>
    </div>
  );
};

export default Swiper;
