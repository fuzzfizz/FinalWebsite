"use client";
import Carousel from "@/components/Carousel";
import Card from "@/components/Card";

function HomePage() {


  return (
    <>
      <Carousel />
      <h1 className="text-center mb-4 mt-4">Our Content</h1>
      <div className="d-flex justify-content-around flex-wrap mb-3 mt-3">
        <Card im={"/animalCard/f.webp"} className="col-md-4 col-sm-6" />
        <Card im={"/animalCard/b.webp"} className="col-md-4 col-sm-6" />
        <Card im={"/animalCard/r.webp"} className="col-md-4 col-sm-6" />
      </div>
    </>
  );
}

export default HomePage;
