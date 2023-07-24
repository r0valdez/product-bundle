import ProductCard from '../ProductCard';
import './style.css';

function ProductsSection({ data }) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{data.title}</h2>
      <div className="product-grid">
        {data.items.map(item => <ProductCard key={item.name} data={item} />)}
      </div>
    </div>
  );
}

export default ProductsSection;