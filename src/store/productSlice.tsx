import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/apiURL'
import { STATUS } from '../utils/status'
import { ProductStateType } from '../types/storeTypes'

const initialState = {
	products: [],
	productsStatus: STATUS.IDLE,
	productSingle: [],
	productSingleStatus: STATUS.IDLE,
}

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchAsyncProducts.pending, state => {
				state.productsStatus = STATUS.LOADING
			})

			.addCase(fetchAsyncProducts.fulfilled, (state, action) => {
				state.products = action.payload
				state.productsStatus = STATUS.SUCCEEDED
			})

			.addCase(fetchAsyncProducts.rejected, state => {
				state.productsStatus = STATUS.FAILED
			})

			.addCase(fetchAsyncProductSingle.pending, state => {
				state.productSingleStatus = STATUS.LOADING
			})

			.addCase(fetchAsyncProductSingle.fulfilled, (state, action) => {
				state.productSingle = action.payload
				state.productSingleStatus = STATUS.SUCCEEDED
			})

			.addCase(fetchAsyncProductSingle.rejected, state => {
				state.productSingleStatus = STATUS.FAILED
			})
	},
})

export const fetchAsyncProducts = createAsyncThunk(
	'products/fetch',
	async (limit: number) => {
		const response = await fetch(`${BASE_URL}products?limit=${limit}`)
		const data = await response.json()
		return data.products
	}
)

export const fetchAsyncProductSingle = createAsyncThunk(
	'product-single/fetch',
	async (id: number) => {
		const response = await fetch(`${BASE_URL}products/${id}`)
		const data = await response.json()
		return data
	}
)

export const getAllProducts = (state: ProductStateType) => state.product.products
export const getAllProductsStatus = (state: ProductStateType) =>
	state.product.productsStatus
export const getProductSingle = (state: ProductStateType) => state.product.productSingle
export const getSingleProductStatus = (state: ProductStateType) =>
	state.product.productSingleStatus
export default productSlice.reducer
