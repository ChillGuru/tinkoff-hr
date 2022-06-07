import React from 'react';
import '../css/restaurants.css';
import xIcon from '../img/x.png';
import vIcon from '../img/v.png';

export default function Reviews() {

    const restaurants =  [
        { id: "9", restaurant: "Шавуха у Армена", category: "Фастфуд", average_check: "150", business_lunch_avarage: "150", rating: "-", address: "лень гуглить", isConfirmed: false},
        { id: "10", restaurant: "Столовка другой шаражки", category: "Столовая", average_check: "200", business_lunch_avarage: "150", rating: "-", address: "лень гуглить", isConfirmed: false},
        { id: "11", restaurant: "KillFish", category: "", average_check: "350", business_lunch_avarage: "350", rating: "-", address: "лень гуглить", isConfirmed: false},
        { id: "12", restaurant: "Армянское хрючево", category: "Помойка", average_check: "1400", business_lunch_avarage: "250", rating: "-", address: "лень гуглить", isConfirmed: false},
        { id: "13", restaurant: "Еще рандомная чайхана", category: "Кафе", average_check: "400", business_lunch_avarage: "250", rating: "-", address: "лень гуглить", isConfirmed: false}
    ];

    let restaurantsList = restaurants.map((restaurant) => <RestaurantElement key={restaurant.id} restaurant={restaurant}/>);

    function RestaurantElement(props) {
        const restaurant = props.restaurant;
            if (restaurant.category == "") {
                restaurant.category = "Категория неизвестна"
            }
        return (
            <div className="res-row">
                <div className="res-row__info">
                        <div className="res-row__item resName">
                            <span>{restaurant.restaurant}</span>
                            <span>{restaurant.category}</span>
                        </div>
                        <div className="res-row__item"><span>{restaurant.average_check}</span></div>
                        <div className="res-row__item"><span>{restaurant.business_lunch_avarage}</span></div>
                        <div className="res-row__item"><span>{restaurant.rating}</span></div>
                        <div className="res-row__item"><span>{restaurant.address}</span></div>
                </div>
                <div className="res-row__btns">
                    <div className="res-row__suggestBtn">
                        <span>Принять</span>
                        <img src={vIcon} className="vIcon" />
                    </div>
                    <div className="res-row__rejectBtn">
                        <span>Отклонить</span>
                        <img src={xIcon} className="xIcon" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="res-header">
                <div className="res-header__row">
                    <div className="res-header__item"><span>Ресторан</span></div>
                    <div className="res-header__item"><span>Средний чек</span></div>
                    <div className="res-header__item"><span>Бизнес ланч</span></div>
                    <div className="res-header__item"><span>Рейтинг</span></div>
                    <div className="res-header__item"><span>Адрес</span></div>
                </div>
                <div style={{width: "110px"}}></div>
            </div>
            {restaurantsList}
        </div>
    )
}