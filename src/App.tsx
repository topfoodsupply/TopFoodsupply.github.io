/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Layout } from './components/Layout';
import { HomePage } from './HomePage';
import { DocsPage } from './DocsPage';

export default function App() {
  return (
    <HashRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs" element={<DocsPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </HashRouter>
  );
}
