export type ItemTypes = {
	id: number
	category: string
	images: string[]
	brand: string
	title: string
	price: number
	discountedPrice: number
	discountedPercentage?: number
	quantity: number
	totalPrice: number
	stock: number
}

export interface RootState {
	cart: CartState
}

export interface CartState {
	carts: CartItem[]
	itemsCount: number
	totalAmount: number
	isCartMessageOn: boolean
}

export interface CartItem {
	id: number
	category: string
	images: string[]
	brand: string
	title: string
	price: number
	discountedPrice: number
	discountedPercentage?: number
	quantity: number
	totalPrice: number
	stock: number
}

export type ItemCartTypes = {
	id: number
	category: string
	images: string[]
	brand: string
	title: string
	price: number
	discountedPrice: number
	discountedPercentage?: number
	quantity: number
	totalPrice: number
	stock: number
}

export interface RootStateTypes {
	cart: CartState
}

export interface CartState {
	carts: CartItem[]
	itemsCount: number
	totalAmount: number
	isCartMessageOn: boolean
}

export interface CartItem {
	id: number
	category: string
	images: string[]
	brand: string
	title: string
	price: number
	discountedPrice: number
	discountedPercentage?: number
	quantity: number
	totalPrice: number
	stock: number
}

export type ProductSateType = {
	product: {
		products: []
		productsStatus: string
		productSingle: []
		productSingleStatus: string
	}
}

export type CategoryStateType = {
	category: {
		categories: []
		categoriesStatus: string
		categoryProducts: []
		categoryProductsStatus: string
	}
}

export type CategoryStatusTypes = {
	category: any
	categories: any[]
	categoriesStatus: Status
	categoryProducts: any[]
	categoryProductsStatus: Status
}

export type ProductStateType = {
	products: []
	productsStatus: string
	productSingle: []
	productSingleStatus: string
	product?: any
}

export type SidebarStateType = {
	sidebar: {
		isSidebarOn: boolean
	}
}

export type StateSearchProductType = {
	search: {
		searchProducts: []
		searchProductsStatus: string
	}
}

export type Status = 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'FAILED'
