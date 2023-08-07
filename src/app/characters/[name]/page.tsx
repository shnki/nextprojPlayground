import Navbar from "@/components/NavBar";
import Image from "next/image";

export default function page({ params }: { params: { name: string } }) {
  return (
    <>
      <Navbar />
      <Image
        className="mt-30"
        src="/gon.svg"
        alt="My SVG"
        width={200}
        height={200}
      />
    </>
  );
}
