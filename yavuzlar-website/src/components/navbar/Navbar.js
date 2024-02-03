import Link from "next/link";
import headerLogo from "../../../public/headerLogo.png";
import Links from "./links/Links";
import "@/app/globals.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <Link id="headerLogo" href="/">
        <Image src={headerLogo} width={250} height={62} />
      </Link>
      <ul>
        <menu>
          <div>
            <Links />
          </div>
        </menu>
      </ul>
    </header>
  );
}
