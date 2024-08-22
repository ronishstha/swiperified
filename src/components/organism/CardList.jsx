import { v4 as uuidv4 } from "uuid";
import Card from "../molecules/Card";

const CardList = ({ items }) => {
  return (
    <>
      <div className="flex flex-col gap-10">
        {items?.map((item, index) => (
          <Card key={uuidv4()} />
        ))}
      </div>
    </>
  );
};

export default CardList;
