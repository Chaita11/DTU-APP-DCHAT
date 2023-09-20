import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
  <>
  <div className="navContainer">
<Image src="/Nomad.png" width={100} height={40}   />
    <Link href="/">
    <div className="navBubble">
        <h1>Connect</h1>
    </div>
    </Link>
  </div>
  </>
      )
  }