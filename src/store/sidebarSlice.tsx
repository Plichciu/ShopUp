import { createSlice } from '@reduxjs/toolkit'
import { SidebarStateType } from '../types/storeTypes'

const initialState = {
	isSidebarOn: false,
}

const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		setSidebarOn: state => {
			state.isSidebarOn = true
		},

		setSidebarOff: state => {
			state.isSidebarOn = false
		},
	},
})

export const { setSidebarOn, setSidebarOff } = sidebarSlice.actions
export const getSidebarStatus = (state: SidebarStateType) => state.sidebar.isSidebarOn
export default sidebarSlice.reducer
