import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../store/context';
import './style.css';

function ProductCard({ data }) {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(false);
  const { pack, setPack } = useContext(AppContext)

  const increase = () => {
    if (pack.length < 3 && !pack.find(item => item.name == data.name)) {
      setValue(value + 1)
      setPack([ ...pack, data])
      setSelected(true)
    }
  }

  const decrease = () => {
    if (value > 0) {
      setValue(value - 1)
      setPack(pack.filter(item => item.name != data.name))
      setSelected(false)
    }
  }

  return (
    <div className="product-card">
      {data.name}
      <div style={{ width: "100%", height: "180px" }}></div>
      <div className={`quantity ${selected ? 'selected' : ''} ${pack.length == 3 ? 'inactive' : ''}`}>
        <span onClick={decrease}>-</span>
        <span>{value}</span>
        <span onClick={increase}>+</span>
      </div>
    </div>
  );
}

export default ProductCard;