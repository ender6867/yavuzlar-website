import Image from "next/image";

const cards = [
  {
    imgPath: "/public/headerLogo.png",
    title: "Yenilikçi Projeler",
  },
  {
    imgPath: "/public/Group5.svg",
    title: "Yenilikçi Projeler2",
  },
  {
    imgPath: "/public/Group5.svg",
    title: "Yenilikçi Projeler3",
  },
];

export default function Cards() {
  return (
    <div>
      {cards?.map((card, index) => (
        <div key={index}>
          {console.log(card.imgPath)}
          <Image
            alt="image"
            src={card.imgPath}
            width={349}
            height={485}
            layout="responsive"
          />
          <h1>{card.title}</h1>
        </div>
      ))}
    </div>
  );
}
