import React from "react";

const CartContext= React.createContext({
    items:[],
    totalamount: 0,
    addItem:()=>{},
    removeItem: ()=>{},
    isExecuted:'',
    isExecuteHandler:()=>{},
    cartIsShown:'',
    showCartHandler:()=>{}
})

export default CartContext;