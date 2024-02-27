import { Route, Routes } from 'react-router-dom';
import { Products } from '@react-monorepo/products';

function Home() {
  return <h1>Home</h1>;
}

function ProductList() {
  return <div>ProductList</div>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
    </Routes>
  );
}

export default App;
