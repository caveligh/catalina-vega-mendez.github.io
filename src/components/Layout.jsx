import { Link } from "react-router-dom";
import { navItems } from "../nav-items";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center mb-2">CATALINA VEGA-MÉNDEZ</h1>
        <h2 className="text-xl text-center mb-6">PhD Candidate in Political Science</h2>
        <nav className="border-t border-b py-4">
          <ul className="flex justify-center space-x-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-gray-700 hover:text-gray-900 text-sm"
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
