import Header from "../components/Header";
import Main from "../components/Main";
import Navigation from "../components/Navigation";

const Layout = ({ title, isSubPage, children, isActive }) => {
  return (
    <>
      <Header isSubPage={isSubPage} title={title} />
      <Main>{children}</Main>
      <Navigation isActive={isActive} />
    </>
  );
};

export default Layout;
