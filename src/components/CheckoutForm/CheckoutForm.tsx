import { FormEvent, useState } from 'react'
import { clearCart } from '../../store/cartSlice'
import './CheckoutForm.scss'
import { useDispatch } from 'react-redux'

const CheckoutForm = () => {
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [address, setAddress] = useState('')
	const [city, setCity] = useState('')
	const [postal, setPostal] = useState('')
	const [phone, setPhone] = useState('')

	const inputsArr = [name, email, address, city, postal, phone]

	const submitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		inputsArr.some(input => input === '')
			? alert('Please fill all the fields')
			: (() => {
					alert('Thanks for purchasing!')
					window.location.href = '/'
					dispatch(clearCart())
			  })()
	}

	return (
		<div className="form">
			<form onSubmit={submitForm} className="form-box">
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						onChange={e => setName(e.target.value)}
						type="text"
						id="name"
						placeholder="Enter your name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						id="email"
						placeholder="Enter your email"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="address">Address:</label>
					<input
						onChange={e => setAddress(e.target.value)}
						type="text"
						id="address"
						placeholder="Enter your address"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="city">City:</label>
					<input
						onChange={e => setCity(e.target.value)}
						type="text"
						id="city"
						placeholder="Enter your city"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="postal">Postal code:</label>
					<input
						onChange={e => setPostal(e.target.value)}
						type="text"
						id="postal"
						placeholder="Enter your postal code"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone:</label>
					<input
						onChange={e => setPhone(e.target.value)}
						type="text"
						id="phone"
						placeholder="Enter your phone"
					/>
				</div>
				<button type="submit" className="btn form-submitBtn">
					Submit
				</button>
			</form>
		</div>
	)
}

export default CheckoutForm
