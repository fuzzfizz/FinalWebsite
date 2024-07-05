
function AboutPage() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <p className="text-center">
        At Animal Planet, we offer a variety of services to help you learn about, interact with, and support the animal world. Below are some of the key services we provide.
      </p>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Educational Articles</h5>
              <p className="card-text">
                Explore our extensive library of articles covering various species, habitats, and conservation efforts. Our articles are written by experts and provide in-depth knowledge and insights.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Interactive Content</h5>
              <p className="card-text">
                Enjoy our interactive content, including quizzes, videos, and virtual tours. These resources are designed to make learning about animals fun and engaging for people of all ages.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Community Engagement</h5>
              <p className="card-text">
                Join our community of animal lovers, share your experiences, and participate in discussions on our forums and social media channels. Connect with others who share your passion for animals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Conservation Projects</h5>
              <p className="card-text">
                Learn about ongoing conservation projects and how you can contribute to protecting endangered species and their habitats. Your support can make a significant impact.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Volunteer Opportunities</h5>
              <p className="card-text">
                Find volunteer opportunities that allow you to get involved in animal conservation efforts. Whether it's working directly with animals or supporting conservation initiatives, there's a role for everyone.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Educational Workshops</h5>
              <p className="card-text">
                Participate in our educational workshops and webinars. These sessions are designed to provide in-depth knowledge on various topics related to animal welfare and conservation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;