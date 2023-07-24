import { useContext, useState } from 'react';
import { AppContext } from '../../../store/context';
import './style.css';

function ProductCard({ data }) {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(false);
  const { pack, setPack } = useContext(AppContext)

  const increase = () => {
    if (pack.length < 3) {
      if (value === 0) {
        setSelected(true)
      }
      setPack([ ...pack, data])
      setValue(value + 1)
    }
  }

  const decrease = () => {
    if (value > 0) {
      if (value === 1) {
        setSelected(false)
      }

      let removed = false

      const updatedPack = pack.reduce((result, item) => {
        if (item.name === data.name && !removed) {
          removed = true
        } else {
          result.push(item)
        }

        return result
      }, [])

      setPack(updatedPack)
      setValue(value - 1)
    }
  }

  return (
    <div className="product-card">
      {data.name}
      <div style={{ width: "100%", height: "180px" }}></div>
      <div className={`quantity ${selected ? 'selected' : ''} ${pack.length === 3 ? 'inactive' : ''}`}>
        <span onClick={decrease}>-</span>
        <span>{value}</span>
        <span onClick={increase}>+</span>
      </div>
    </div>
  );
}

export default ProductCard;