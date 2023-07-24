import { useContext } from 'react';
import ProductsSection from '../../components/ProductsSection';
import { AppContext } from '../../../store/context';
import { productsData } from '../../../mockData';
import './style.css';

function Bundle() {
  const { pack } = useContext(AppContext)

  return (
    <div className="container">
      <div className="product-sections">
        <div>
          {productsData.map(productsSection => (<div key={productsSection.title} style={{ padding: "30px 0 20px 0" }}><ProductsSection data={productsSection} /></div>))}
        </div>
        <div>
          <div className="pack">
            <div className="price">
              <div>
                <h3>BUILD YOUR PACK</h3>
                <p><span style={{ textDecoration: 'line-through' }}>$41.97</span> $33.09</p>
              </div>
            </div>
            <div className="preview">
              <div>
                {pack.length > 0 && pack.map((item, index) => <div key={`${item.name}-${index}`} className="item">{item.name}</div>)}
                {new Array(3 - pack.length).fill(0).map((_, index) => <div key={index} className="item"></div>)}
              </div>
            </div>
            <div className="add-to-cart">
              <button className={`button ${pack.length === 3 ? 'active' : ''}`}>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bundle;