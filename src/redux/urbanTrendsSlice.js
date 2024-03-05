import { createSlice } from "@reduxjs/toolkit";

const initialState={
    wishlistData:[],
    productData:[],
    userInfo:null ,
};
export const urbanSlice =createSlice({
    name:"urban",
    initialState,
    reducers :{
        addToCart:(state,action)=>{
            const item=state.productData.find((item)=>item.id ===action.payload.id)

            if(item){
                item.quantity +=action.payload.quantity
            }
            else{
                state.productData.push(action.payload)
            }
        },
        wishList:(state,action)=>{
            const item=state.wishlistData.find((item)=>item.id ===action.payload.id)

            if(item){
                item.quantity +=action.payload.quantity
            }
            else{
                state.wishlistData.push(action.payload)
            }
        },
        deleteItem:(state,action)=>{
            state.productData =state.productData.filter((item)=>item.id !==action.payload)
        },
        deleteWishlistItem:(state,action)=>{
            state.wishlistData=state.wishlistData.filter((item)=>item.id !==action.payload)
        },
        resetCart:(state)=>{
            state.productData=[];
        },
        resetWishlist:(state)=>{
            state.wishlistData=[];
        },
        increamentQty:(state,action)=>{
            const item=state.productData.find((item)=>item.id ===action.payload.id)
            if(item){
                item.quantity++;
            }
        },
        decrementQty:(state,action)=>{
            const item=state.productData.find((item)=>item.id ===action.payload.id)
            if(item.quantity===1){
                item.quantity=1;
            }
            else{
                item.quantity--;
            }
        }
},
})

export const {addToCart,wishList,deleteItem,deleteWishlistItem,resetCart,resetWishlist,increamentQty,decrementQty}=urbanSlice.actions;
export default urbanSlice.reducer;