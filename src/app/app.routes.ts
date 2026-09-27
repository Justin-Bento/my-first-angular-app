import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Services } from './services/services';
import { Blog } from './blog/blog';
import { BlogPost } from './blog-post/blog-post';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: "Home"
  },
  {
    path: 'about',
    component: About,
    title: "About"
  },
  {
    path: 'services',
    component: Services,
    title: "Services"
  },
  {
    path: 'blog',
    component: Blog,
    title: "Blog"
  },
  {
    path: 'blog/:slug',
    component: BlogPost,
    title: (route) => decodeURIComponent(route.paramMap.get('title') ?? 'Blog'),
  },
];
