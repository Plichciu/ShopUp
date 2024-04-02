import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/apiURL'
import { STATUS } from '../utils/status'
import { StateSearchProductType } from '../types/storeTypes'

const initialState = {
	searchProducts: [],
	searchProductsStatus: STATUS.IDLE,
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		clearSearch: state => {
			state.searchProducts = []
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAsyncSearchProduct.pending, state => {
				state.searchProductsStatus = STATUS.LOADING
			})

			.addCase(fetchAsyncSearchProduct.fulfilled, (state, action) => {
				state.searchProducts = action.payload
				state.searchProductsStatus = STATUS.SUCCEEDED
			})

			.addCase(fetchAsyncSearchProduct.rejected, state => {
				state.searchProductsStatus = STATUS.FAILED
			})
	},
})

export const fetchAsyncSearchProduct = createAsyncThunk(
	'product-search/fetch',
	async (searchTerm: string) => {
		const response = await fetch(`${BASE_URL}products/search?q=${searchTerm}`)
		const data = await response.json()
		return data.products
	}
)

export const { clearSearch } = searchSlice.actions
export const getSearchProducts = (state: StateSearchProductType) =>
	state.search.searchProducts
export const getSearchProductsStatus = (state: StateSearchProductType) =>
	state.search.searchProductsStatus
export default searchSlice.reducer
