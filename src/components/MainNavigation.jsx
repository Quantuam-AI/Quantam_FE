import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/sound">Sound</Link>
      <Link to="/text">Text</Link>
      <Link to="/image">Image</Link>
    </>
  );
};

export default Layout;
