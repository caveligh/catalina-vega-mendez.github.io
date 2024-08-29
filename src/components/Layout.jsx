import { Link } from "react-router-dom";
import { navItems } from "../nav-items";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-gray-700 hover:text-gray-900 flex items-center"
                >
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-8">{children}</main>
      <footer className="bg-white shadow-md mt-12">
        <div className="container mx-auto px-6 py-4 text-center text-gray-600">
          © {new Date().getFullYear()} Dr. John Doe. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;