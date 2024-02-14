import Image from "next/image";

const countInfo = [
  {
    number: "1",
    name: "Üye",
    image: "/uyeImg.svg",
  },
  {
    number: "2",
    name: "Proje",
    image: "/projeImg.svg",
  },
  {
    number: "3",
    name: "Makale",
    image: "/makaleImg.svg",
  },
  {
    number: "4",
    name: "Sunum",
    image: "/sunumImg.svg",
  },
];

export default function Count() {
  return (
    <div id="countCard">
      {countInfo.map((count, index) => (
        <div id="one-count" key={index}>
          <h1>{count.number}</h1>
          <div>
            <Image src={count.image} alt="image" width={75} height={75} />
            <p>{count.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
