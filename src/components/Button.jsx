import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ to, className, onClick, type, children }) => {
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
