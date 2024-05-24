import { BarChart, Book, Home, User2, UserCog } from 'lucide-react';

export const NAVIGATION_ROUTE = [
  {
    name: 'Home',
    path: '/',
    icon: Home,
  },
  {
    name: 'Posts',
    path: '/posts',
    icon: Book,
  },
  {
    name: 'Users',
    path: '/users',
    icon: User2,
  },
  {
    name: 'Table',
    path: '/users-table',
    icon: UserCog,
  },
  {
    name: 'Chart',
    path: '/chart',
    icon: BarChart,
  },
];
