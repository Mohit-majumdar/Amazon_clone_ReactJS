import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from './StateProvider';

function Header() {
    const [{basket}] = useStateValue();
    console.log(basket)

    return <nav className="header">
            {/* logo on left */}
            <Link to= "/">
            <img
              className="header__logo"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              />
            </Link>

            {/* search Box */}
            <div className="header__search">
                <input type ="text" className="header__searchInput" />
                <SearchIcon className = "header__searchIcon" />
            </div>

            {/* 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to ="/login" className="header__link">
                    <div className = "header__option">
                        <span className="header__optionOne">Hello Mohit</span>
                        <span className="header__optionTwo">Sing In</span>
                    </div>
                </Link>
                {/* 2st link */}
                <Link to ="/" className="header__link">
                    <div className = "header__option">
                        <span className="header__optionOne">Return</span>
                        <span className="header__optionTwo">& Orders</span>
                    </div>
                </Link>
                {/* 3st link */}
                <Link to ="/" className="header__link">
                    <div className = "header__option">
                        <span className="header__optionOne">Your</span>
                        <span className="header__optionTwo">Prime</span>
                    </div>
                </Link>
                {/* 4 link */}
                <Link to="/checkout" className = "header__link">
                    <div className="header__optionBasket">
                        {/* shopping Basket Item */}
                        <ShoppingBasketIcon />
                        {/* Number of items in the basket */}
                        <span className="header__optionTwo header__BasketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav>;
    
}

export default Header;
