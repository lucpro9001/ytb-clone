import routes from '../configs/routes.js';
import HeaderOnlyLayout from '../layouts/header_only/HeaderOnly.js';
import Home from '../pages/Home.js';
import Watch from '../pages/Watch.js';

// Public routes
const publicRoutes = [
    { path: routes.home, component: Home, layout: null },
    { path: routes.watch, component: Watch, layout: HeaderOnlyLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };