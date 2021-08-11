import IRoute from "../Interfaces/route";
import AboutPage from "../Pages/About/about";
import HomePage from "../Pages/Home/home";
import AppsPage from "../Pages/Apps/apps";
import PortfolioPage from "../Pages/Portfolio/portfolio";
import ContactPage from "../Pages/Contact/contact";
import BlogPage from "../Pages/Blog/blog";
import ResumePage from "../Pages/Resume/resume";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
    exact: true,
  },
  {
    path: "/about",
    name: "About Page",
    component: AboutPage,
    exact: true,
  },
  {
    path: "/about/:number",
    name: "About Page",
    component: AboutPage,
    exact: true,
  },
  {
    path: "/apps",
    name: "Apps Page",
    component: AppsPage,
    exact: true,
  },
  {
    path: "/portfolio",
    name: "Portfolio Page",
    component: PortfolioPage,
    exact: true,
  },
  {
    path: "/contact",
    name: "Contact Page",
    component: ContactPage,
    exact: true,
  },
  {
    path: "/blog",
    name: "Blog Page",
    component: BlogPage,
    exact: true,
  },
  {
    path: "/resume",
    name: "Resume Page",
    component: ResumePage,
    exact: true,
  },
];

export default routes;
