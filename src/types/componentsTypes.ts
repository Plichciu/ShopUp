export type ProductType = {
	product: {
		id: number
		category: string
		images: string[]
		brand: string
		title: string
		price: number
		discountedPrice: number
		discountedPercentage?: number
	}
}

export type ProductProps = {
	id: number
	category: string
	images: string[]
	brand: string
	title: string
	price: number
	discountPercentage: number
	discountedPrice?: number
	discountedPercentage?: number
}

export type ProductListProps = {
	products: ProductProps[]
}
