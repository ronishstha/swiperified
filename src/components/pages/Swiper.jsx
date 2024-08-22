import { useRef } from "react";
import CardList from "../organism/CardList";

const Swiper = () => {
  const items = [1, 2, 3];
  const sliderRef = useRef(null);

  return (
    <div
      ref={sliderRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#f4b374] via-[#de2f7c] to-[#7735af] flex justify-center"
    >
      <div>
        <CardList items={items} />
      </div>
    </div>
  );
};

export default Swiper;
