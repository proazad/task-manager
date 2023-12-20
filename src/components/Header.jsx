import banner from "../assets/banner.jpg";
import Banner from "./Banner";
import Navbar from "./Navbar";
const Header = () => {
  const myImageStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "left-top",
  };
  return (
    <header
      className="min-h-screen bg-gray-600 bg-blend-lighten "
      style={myImageStyle}
    >
      <Navbar />
      <Banner />
    </header>
  );
};

export default Header;
