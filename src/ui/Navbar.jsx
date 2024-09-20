import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      to: "/",
      text: "Home",
      Icon: <i className="bi bi-house-fill"></i>,
    },
    {
      to: "/about",
      text: "About",
      Icon: <i className="bi bi-person-fill"></i>,
    },
    {
      to: "/portfolio",
      text: "Portfolio",
      Icon: <i className="bi bi-briefcase-fill"></i>,
    },
    {
      to: "/contact",
      text: "Contact",
      Icon: <i className="bi bi-envelope-at-fill"></i>,
    },
    {
      to: "/blog",
      text: "Blog",
      Icon: <i className="bi bi-pen-fill"></i>,
    },
  ];

  return (
    <nav>
      <div className="ul">
        {links.map((link, index) => (
          <div key={index} className="myLink">
            <Link to={link.to}>
              <span className="text">{link.text}</span> {link.Icon}
            </Link>
          </div>
        ))}
      </div>
      <div className="cover"></div>
    </nav>
  );
};

export default Navbar;
