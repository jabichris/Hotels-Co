import Image from "next/image";
import { CardData } from "interfaces";
import { FC } from "react";

interface Props {
  data: CardData;
}

const MediumCard: FC<Props> = ({ data: { img, title, price } }) => (
  <div className="medium-card">
    <div className="relative h-60 w-65">
      <Image alt="Image" src={img} fill className="rounded-xl" />
    </div>
    <h4 className="text-xl mt-3">{title}</h4>
    <p className="text-gray-500 mt-3">{title}</p>
    <p className="text-l mt-3">{price}</p>
  </div>
);

export default MediumCard;