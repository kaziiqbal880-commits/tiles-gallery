import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import TopTiles from "@/components/TopTiles";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://tiles-server-4-korg.onrender.com/categories")
  const data = await res.json();
  const tiles = data

  // console.log(tiles)

  return (
    <div>
      <Banner></Banner>
      <TopTiles tiles={tiles}></TopTiles>
      <Footer></Footer>
    </div>
  );
}
