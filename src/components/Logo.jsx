import logo from "../assets/logo.jpg";

const Logo = ({ width = "70px", className = "" }) => {
  return (
    <img
      src={logo}
      alt="logo"
      width={width}
      className={`${className}`}
      title="appwrite-blog"
    ></img>
  );
};

export default Logo;