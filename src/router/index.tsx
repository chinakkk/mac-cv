import Desktop from 'src/pages/Desktop/Desktop';
import Test from 'src/pages/Test/Test';

export const routerNames = {
	DESKTOP: '/',
	TEST: '/test',
};

export const publicRoutes = [
	{ path: routerNames.DESKTOP, element: Desktop },
	{ path: routerNames.TEST, element: Test },
];
