import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './stores/counterSlice' 
import siteReducer from './stores/siteSlice'

export default configureStore({
    reducer:{
        counter:counterReducer,
        site:siteReducer,
    }
})