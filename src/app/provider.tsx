"use client"
import React from 'react'
import { Store } from './(AddToCartFunctunality)/redux/store';
import { Provider } from 'react-redux';
function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>

        <Provider store={Store}>
        {children}
        </Provider>
       
      
    </div>
  )
}

export default Providers;


