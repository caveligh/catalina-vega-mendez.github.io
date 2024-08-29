import { Link } from "react-router-dom";
import { navItems } from "../nav-items";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">CATALINA VEGA-MÉNDEZ</h1>
        <nav>
          <ul className="flex justify-center space-x-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-gray-700 hover:text-gray-900 uppercase"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-8">{children}</main>
    </div>
  );
};

export default Layout;
