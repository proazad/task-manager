import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="h-[80vh] flex items-center text-neutral-content mx-2 md:mx-0">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to={"/dashboard"}>
            <button className="btn btn-primary">Let’s Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
