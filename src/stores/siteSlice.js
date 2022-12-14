import { createSlice } from '@reduxjs/toolkit'

export const siteSlice = createSlice({
  name: 'site',
  initialState: { dark:true, language:'tr' },
  reducers: {
    setDarkMode:state=>{state.dark=!state.dark},
    setLanguage:(state,action)=>{state.language=action.payload}
  }
})

export const { setDarkMode,setLanguage } = siteSlice.actions

export default siteSlice.reducer