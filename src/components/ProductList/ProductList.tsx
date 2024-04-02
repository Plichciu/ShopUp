import './ProductList.scss'
import Product from '../Product/Product'
import { ProductListProps, ProductProps } from '../../types/componentsTypes'

const ProductList = ({ products }: ProductListProps) => {
	return (
		<div className="product-lists grid bg-whitesmoke my-3">
			{products.map((product: ProductProps) => {
				let discountedPrice =
					product.price - product.price * (product.discountPercentage / 100)

				let discountedPercentage = Math.round(
					((product.price - discountedPrice) / product.price) * 100
				)
				return (
					<Product
						key={product.id}
						product={{ ...product, discountedPrice, discountedPercentage }}
					/>
				)
			})}
		</div>
	)
}

export default ProductList
