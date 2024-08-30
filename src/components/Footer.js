import BootstrapClient from "./BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  <BootstrapClient />
  return (
    <footer className="bg-dark text-center text-light">


      {/* Grid container */}
      <div className="container p-3 pb-0">
        {/* Section: Social media */}
        <section className="mb-2">
          {/* Facebook */}
          <a target="_blank" data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="https://www.facebook.com/profile.php?id=100069790964989" role="button"><img src={"/footImg/f.webp"} height={30} /></a>
          {/* Youtube */}
          <a target="_blank" data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="https://www.youtube.com/channel/UC8YPCnX2rJ8WEc9uNLffXdA" role="button"><img src={"/footImg/y.webp"} height={30} /></a>
          {/* Instagram */}
          <a target="_blank" data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="https://www.instagram.com/juniory_01/?next=%2F" role="button"><img src={"/footImg/i.webp"} height={30} /></a>
          {/* Github */}
          <a target="_blank" data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ backgroundColor: '#333333' }} href="https://github.com/fuzzfizz" role="button"><img src={"/footImg/g.webp"} height={30} /></a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div className="text-center p-2 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Create By:
        <div className="text-light ">Athit Tinnachotviechapong</div>
      </div>
    </footer>

  );
};

export default Footer;
