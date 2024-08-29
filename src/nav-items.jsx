import { HomeIcon, FileTextIcon, BookOpenIcon, LightbulbIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import CV from "./pages/CV.jsx";
import Research from "./pages/Research.jsx";
import Policy from "./pages/Policy.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "CV",
    to: "/cv",
    icon: <FileTextIcon className="h-4 w-4" />,
    page: <CV />,
  },
  {
    title: "Research",
    to: "/research",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <Research />,
  },
  {
    title: "Policy",
    to: "/policy",
    icon: <LightbulbIcon className="h-4 w-4" />,
    page: <Policy />,
  },
];
