import { Link, useLocation } from "react-router-dom";
import "../components/Navigation.css";
import HomeIcon from "../assets/icons/icon_home.svg";
import BookmarkIcon from "../assets/icons/icon_bookmark-nav.svg";
import AddIcon from "../assets/icons/icon_plus.svg";
import SettingsIcon from "../assets/icons/icon_settings.svg";

const navItems = [
  { to: "/", label: "Home", icon: HomeIcon, alt: "Home" },
  {
    to: "/bookmarks",
    label: "Bookmarks",
    icon: BookmarkIcon,
    alt: "Bookmarks",
  },
  { to: "/form", label: "Add Quiz Card", icon: AddIcon, alt: "Add quiz card" },
  { to: "/settings", label: "Settings", icon: SettingsIcon, alt: "Settings" },
];

const Navigation = () => {
  // Get location object
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="nav__menu">
        {navItems.map(({ to, label, icon, alt }, index) => (
          <li key={index} className="nav__menu-item">
            <Link
              to={to}
              className={`nav__link ${
                // If path of current URL equals link path add 'active' class
                location.pathname === to ? "active" : ""
              }`}
            >
              <img src={icon} alt={alt} className="nav__icon" />
              <span className="nav__label">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
