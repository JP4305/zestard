import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen mt-8 lg:mt-0 text-center py-2 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Shop Our Skin-Loving Lineup</h1>
        <span className="text-base sm:text-lg lg:text-xl mb-8 text-center">
          Skincare formulated for hydrated, nourished, hey-good-looking skin.
        </span>
        <div className="w-full max-w-screen-lg">
          <Carousel />
        </div>
      </div>
      <Footer />
    </main>
  );
}