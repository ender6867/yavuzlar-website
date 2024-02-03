import Image from "next/image";
import aboutLogo from "../../../public/aboutLogo.png";
import "../../app/globals.css";
export default function About() {
  return (
    <div className="aboutContainer">
      <div id="textContainer">
        <h1 className="title">SiberVatan için Beraber Çalışalım</h1>
        <p>
          Yavuzlar Takımı, Siber Vatan projesi kapsamında kurulan ve web
          güvenliği odaklı çalışan bir siber güvenlik takımıdır. Misyonumuz, her
          bir takım üyesinin alanında yetkin hale gelmesini sağlamak ve
          ülkemizin siber güvenlik sektöründeki yerli proje sayısını arttırmak
          amacıyla çeşitli projeler yürütmektir.
        </p>
        <div>
          <button id="buttons">Hakkımızda</button>
        </div>
      </div>
      <div id="aboutLogo">
        <Image src={aboutLogo} width={600} heigth={552.24} />
      </div>
    </div>
  );
}
