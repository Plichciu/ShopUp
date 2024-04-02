export type CartStateType = {
	cart: {
		itemsCount: number
		totalAmount: number
	}
}

export type productType = {
	id: number
	name: string
	price: number
	description: string
	category: string
	image: string
}

export type ProductSingleType = {
	id: number
	category: string
	images: string[]
	brand: string
	title: string
	price: number
	discountedPrice: number
	discountPercentage?: number
	stock: number
	rating: number
	description: string
}
