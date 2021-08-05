import IRoute from '../interfaces/route';
import AboutPage from '../pages/about';
import HomePage from '../pages/home';
import AppsPage from '../pages/apps';
import PortfolioPage from '../pages/portfolio';
import ContactPage from '../pages/contact';
import BlogPage from '../pages/blog';
import ResumePage from '../pages/resume';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
    exact: true
  },
  {
    path: '/about',
    name: 'About Page',
    component: AboutPage,
    exact: true
  },
  {
    path: '/about/:number',
    name: 'About Page',
    component: AboutPage,
    exact: true
  },
  {
    path: '/apps',
    name: 'Apps Page',
    component: AppsPage,
    exact: true
  },
  {
    path: '/portfolio',
    name: 'Portfolio Page',
    component: PortfolioPage,
    exact: true
  },
  {
    path: '/contact',
    name: 'Contact Page',
    component: ContactPage,
    exact: true
  },
  {
    path: '/blog',
    name: 'Blog Page',
    component: BlogPage,
    exact: true
  },
  {
    path: '/resume',
    name: 'Resume Page',
    component: ResumePage,
    exact: true
  }
];

export default routes;
