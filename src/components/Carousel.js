import BootstrapClient from "./BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousel = () => {
  <BootstrapClient />
  return (
    <div className="carousel slide" id="carouselExampleControls" data-bs-ride="carousel">

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/carousel/bear.webp" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/carousel/dog.webp" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/carousel/bird.webp" className="d-block w-100" alt="..." />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
