import React from 'react'
import {useStateValue} from './StateProvider'
import './checkout.css'
import CheckOutProduct from './CheckoutProduct'

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">

            
                <img className="checkout__ad" src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1.__CB423492668.jpg'></img>
                
                {
                    basket?.length === 0 ?(
                        <div>
                            <h2>Your Shoping Basket is empty</h2>
                            <p>
                                You have no items in your basket. To buy one or more product click
                                to "Add to basket " next to the item.
                            </p>
                        </div>
                    ): (
                        <div>
                        <h2 className="checkout__title">Your Shopping basket</h2>

                        {/* list of all the checkout product */}
                        {
                            basket.map((item) =>(
                                <CheckOutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                                />

                                
                            )
                                )
                        }
                        </div>
                    )
                    
                }
            </div>
            
        </div>
    )
}

export default Checkout
