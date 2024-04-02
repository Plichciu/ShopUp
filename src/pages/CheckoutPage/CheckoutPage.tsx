import { useSelector } from 'react-redux'
import { CartStateType } from '../../types/pagesTypes'
import { formatPrice } from '../../utils/helpers'
import { getAllCarts } from '../../store/cartSlice'
import './CheckoutPage.scss'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const CheckoutPage = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	const { itemsCount, totalAmount } = useSelector((state: CartStateType) => state.cart)
	const carts = useSelector(getAllCarts)
	return (
		<div className="py-5 container bg-whitesmoke">
			<div className="checkout">
				<div className="checkout-box">
					<h2 className="checkout-title">Order summary</h2>
					<span className="checkout-line"></span>
					<div className="products">
						{carts.map(cart => {
							return (
								<div className="product-box" key={cart.id}>
									<img className="product-img" src={cart.images[0]} alt={cart.title} />
									<div className="product-info">
										<div className="product-title">{cart.title}</div>
										<p>
											<span className="product-qnt">Quantity:</span> {cart.quantity}
										</p>
									</div>
									<div className="product-price">
										{formatPrice(cart.price * cart.quantity)}
									</div>
									<span className="checkout-line"></span>
								</div>
							)
						})}
						<div className="product-total">
							<div className="product-total-info">
								<p>Total items: </p>
								<span>{itemsCount}</span>
							</div>
							<div className="product-total-info">
								<p>Total price: </p> <span>{formatPrice(totalAmount)}</span>
							</div>
						</div>
					</div>
				</div>
				<CheckoutForm />
			</div>
		</div>
	)
}

export default CheckoutPage
