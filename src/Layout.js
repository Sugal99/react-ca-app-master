import Header from "./Header"; // Import your Header component
import Footer from "./Footer"; // Import your Footer component

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
