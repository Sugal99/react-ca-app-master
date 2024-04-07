import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, cart }) => {
  return (
    <div className="layout">
      <Header cart={cart} />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
