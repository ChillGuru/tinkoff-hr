import React, { useState } from 'react';
import RestaurantEditWindow from './RestaurantEditWindow';
import '../css/restaurants.css';
import DoubleArrowIco from '../img/double-arrow.png';
import DeleteIco from '../img/delete.png';

export default function Reviews() {

    const restaurants =  [
        { id: "1", restaurant: "Шавуха у Ашота", category: "Фастфуд", average_check: "150", business_lunch_avarage: "150", rating: "6.7", address: "лень гуглить", isConfirmed: true},
        { id: "2", restaurant: "Шаражная столовка", category: "Столовая", average_check: "200", business_lunch_avarage: "130", rating: "6.2", address: "лень гуглить", isConfirmed: true},
        { id: "3", restaurant: "Pan American", category: "Кафе", average_check: "350", business_lunch_avarage: "180", rating: "7.2", address: "лень гуглить", isConfirmed: true},
        { id: "4", restaurant: "Хмели Сунели", category: "Ресторан", average_check: "1400", business_lunch_avarage: "350", rating: "9.5", address: "лень гуглить", isConfirmed: true},
        { id: "5", restaurant: "Рандомная чайхана", category: "Кафе", average_check: "400", business_lunch_avarage: "250", rating: "8.7", address: "лень гуглить", isConfirmed: true},
        { id: "6", restaurant: "Macdonald's", category: "Фастфуд", average_check: "450", business_lunch_avarage: "450", rating: "7.5", address: "лень гуглить", isConfirmed: true},
        { id: "7", restaurant: "kfc", category: "Фастфуд", average_check: "400", rating: "7.9", business_lunch_avarage: "400", address: "лень гуглить", isConfirmed: true},
        { id: "8", restaurant: "Burger King", category: "Фастфуд", average_check: "250", business_lunch_avarage: "250", rating: "7.1", address: "лень гуглить", isConfirmed: true},
    ];

    const restaurantsReviews =  [
        { id: "1", author: "username", category: "Фастфуд", restaurant: "Шавуха у Ашота", average_check: "150", business_lunch_avarage: "150", mark: "6.7", address: "Some restaurant address #1", review: "Some review by random person #1", isConfirmed: true},
        { id: "2", author: "username", category: "Столовая", restaurant: "Шаражная столовка", category: "Столовая", average_check: "200", business_lunch_avarage: "130", mark: "6.2", review: "Some review by random person #2", address: "Some restaurant address #2", isConfirmed: true},
        { id: "3", author: "username", category: "Кафе", restaurant: "Pan American", average_check: "350", business_lunch_avarage: "180", mark: "7.2", address: "Some restaurant address #3", review: "Some review by random person #3", isConfirmed: true},
        { id: "4", author: "username", category: "Ресторан", restaurant: "Хмели Сунели", average_check: "1400", business_lunch_avarage: "350", mark: "9.5", address: "Some restaurant address #4", review: "Some review by random person #4", isConfirmed: true},
        { id: "5", author: "username", category: "Кафе", restaurant: "Рандомная чайхана", average_check: "400", business_lunch_avarage: "250", mark: "8.7", address: "Some restaurant address #5", review: "Some review by random person #5", isConfirmed: true},
        { id: "6", author: "username", category: "Фастфуд", restaurant: "Macdonald's", average_check: "450", business_lunch_avarage: "450", mark: "7.5", address: "Some restaurant address #6", review: "Some review by random person #6", isConfirmed: true},
        { id: "7", author: "username", category: "Фастфуд", restaurant: "kfc", average_check: "400", rating: "7.9", business_lunch_avarage: "400", address: "Some restaurant address #7", review: "Some review by random person #7", isConfirmed: true},
        { id: "8", author: "username", category: "Фастфуд", restaurant: "Burger King", average_check: "250", business_lunch_avarage: "250", mark: "7.1", address: "Some restaurant address #8", review: "Some review by random person #8", isConfirmed: true},
    ];


    let restaurantsList = restaurants.map((restaurant) => <RestaurantElement key={restaurant.id} restaurant={restaurant}/>);

    function RestaurantElement(props) {
        const restaurant = props.restaurant;
        const [isEditing, openEditing] = useState(false);

        if (restaurant.category == "") {
            restaurant.category = "Категория неизвестна"
        }
        if (isEditing)
            return <RestaurantEditWindow isOpen={openEditing} restaurant={restaurant} reviews={ restaurantsReviews.filter(rev => rev.restaurant === restaurant.restaurant)}/>;
        else
            return (
                <div className="res-row">
                    <div className='res-row__info'>
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
                        <div onClick={() => openEditing(true)} className="res-row__moreBtn">
                            <span>Подробнее</span>
                            <img src={DoubleArrowIco} className="double-arrow-ico" />
                        </div>
                        <div className="res-row__deleteBtn">
                            <span>Удалить</span>
                            <img src={DeleteIco} className="delete-ico" />
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
                <div style={{width: "150px"}}></div>
            </div>
            {restaurantsList}
        </div>
    )
}