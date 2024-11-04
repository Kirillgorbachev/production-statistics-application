import './ProductItem.css'

const ProductItem = ({item }) => {
    return (
        <div className="item-container">
            <h3>Продукт - {item.product.name}</h3>
            <p>Количество: {item.quantity}</p> 
        </div>
    )
}

export default ProductItem;