import "../components/Header.css";

function Header({ title, isSubPage }) {
  return (
    <header className="header">
      <h1
        className={`header__title ${isSubPage ? "header__title--subpage" : ""}`}
      >
        {title}
      </h1>
    </header>
  );
}

export default Header;
