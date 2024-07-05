
function AboutPage() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center">
        We'd love to hear from you! Whether you have a question, suggestion, or want to get involved, feel free to reach out to us using the form below.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 mb-5">
        <h2>Our Location</h2>
        <p>123 Animal Planet Ave, Wildlife City, Natureland</p>
        <h2>Phone</h2>
        <p>(123) 456-7890</p>
        <h2>Email</h2>
        <p>contact@animalplanet.com</p>
      </div>
    </div>
  );
};

export default AboutPage;