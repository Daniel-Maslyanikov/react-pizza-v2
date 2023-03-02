import React, {Suspense} from 'react';
import './scss/app.scss';

import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const Cart = React.lazy(() => import('./pages/Cart'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const FullPizza = React.lazy(() => import('./pages/FullPizza'));


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={
				<Suspense fallback={<div>Идет загрузка корзины...</div>}>
					<Cart />
					</Suspense>
				} />
        <Route path="pizza/:id" element={<Suspense fallback={<div>Идет загрузка пиццы...</div>}>
					<FullPizza />
					</Suspense>} />
        <Route path="*" element={<Suspense fallback={<div>Идет загрузка...</div>}>
					<NotFound />
					</Suspense>} />
      </Route>
    </Routes>
  );
}

export default App;
