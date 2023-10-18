import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from 'src/router';

const AppRouter: FC = () => {
	return (
		<>
			<Routes>
				<Route path={'/*'} element={<Navigate to={'/'} />} />

				{publicRoutes.map(route => {
					return (
						<Route
							path={route.path}
							element={<route.element />}
							key={route.path}
						/>
					);
				})}
			</Routes>
		</>
	);
};
export default AppRouter;
