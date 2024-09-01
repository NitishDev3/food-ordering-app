import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState:{
        items : []
    },
    reducers : {
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem : (state, index)=>{
            state.items.splice(index, 0);
        }, 
        clearCart: (state)=>{
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;