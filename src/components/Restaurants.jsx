import React, {useState} from 'react';
import '../css/restaurants.css';
import SearchBtn from '../img/search-btn.png';
import {
    Outlet,
    Link
  } from "react-router-dom";

export default function Restaurants() {

    const [currentTab, setTab] = useState(1);

    function tabClass(tabNum) {
        if (tabNum == currentTab) {
            return "tab selectedRTab";
        };
        
        return "tab";
    }

    return (
        <div className="restaurants">
            <div className="restaurants-header">
                <div className="tabs">
                    <Link to="/restaurants" className={tabClass(1)} onClick={() => setTab(1)}>
                        <span>Список ресторанов</span>
                    </Link>
                    <Link to="restaurants_to_suggest" className={tabClass(2)} onClick={() => setTab(2)}>
                        <div className="divForBorder">
                            <span>Предложенные рестораны</span>
                        </div>
                    </Link>
                    <Link to="new_reviews" className={tabClass(3)} onClick={() => setTab(3)}>
                        <span>Новые отзывы</span>
                    </Link>
                </div>
                <form className="search">
                    <input type="text" size="29" placeholder="Поиск..."/>
                    <button type="submit" className="search-btn">
                        <img src={SearchBtn} alt="search-btn" />
                    </button>
                </form>
            </div>
            <Outlet/>
        </div>
    )
}