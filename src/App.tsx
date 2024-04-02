import './App.scss'
// react router v6
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// pages
import {
	Home,
	CategoryProduct,
	ProductSingle,
	Cart,
	Search,
	Checkout,
} from './pages/index'
// components
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import store from './store/store'
import { Provider } from 'react-redux'
import TermOfServicePage from './pages/TermOfServicePage/TermOfServicePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage'
import AboutPage from './pages/AboutPage/AboutPage'

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Sidebar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/product/:id" element={<ProductSingle />} />
						<Route path="/category/:category" element={<CategoryProduct />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/search/:searchTerm" element={<Search />} />
						<Route path="/term-of-service" element={<TermOfServicePage />} />
						<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/checkout" element={<Checkout />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</Provider>
		</div>
	)
}

export default App
