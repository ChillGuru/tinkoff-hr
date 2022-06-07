import React from 'react';
import '../css/restaurants.css';
import Cancel from '../img/cancel.png';
import xIcon from '../img/x.png';
import vIcon from '../img/v.png';
import Edit from '../img/edit.png';

export default function RestaurantEditWindow(props) {
    
    let restaurant = props.restaurant;

    const restaurantReviews =  [
        { id: "1", author: "username", average_check: "150", business_lunch_avarage: "150", mark: "6.7", review: "Some review by random person #1", isConfirmed: true},
        { id: "2", author: "username", category: "Столовая", average_check: "200", business_lunch_avarage: "130", mark: "6.2", review: "Some review by random person #2", isConfirmed: true},
        { id: "3", author: "username", average_check: "350", business_lunch_avarage: "180", mark: "7.2", review: "Some review by random person #3", isConfirmed: true},
        { id: "4", author: "username", average_check: "1400", business_lunch_avarage: "350", mark: "9.5", review: "Some review by random person #4", isConfirmed: true},
        { id: "5", author: "username", average_check: "400", business_lunch_avarage: "250", mark: "8.7", review: "Some review by random person #5", isConfirmed: true},
        { id: "6", author: "username", average_check: "450", business_lunch_avarage: "450", mark: "7.5", review: "Some review by random person #6", isConfirmed: true},
        { id: "7", author: "username", average_check: "400", rating: "7.9", business_lunch_avarage: "400", review: "Some review by random person #7", isConfirmed: true},
        { id: "8", author: "username", average_check: "250", business_lunch_avarage: "250", mark: "7.1", review: "Some review by random person #8", isConfirmed: true},
    ];

    let restaurantReviewsList = restaurantReviews.map((review) => <ReviewElement key={review.id} review={review}/>);

    function ReviewElement(props) {
        const review = props.review;
            if (review.category == "") {
                review.category = "Категория неизвестна";
            };
        return (
            <div className='newResRev'>
                <div className="revTableHeader">
                    <div className="heads">
                        <div className="revHeadItem" style={{marginRight: "300px"}}>
                            <div className="revHeadInner">
                                <span>{review.author}</span>
                             </div>
                        </div>
                        <div className="revHeadItem" style={{width: "24h0px"}}>
                            <div className="revHeadInner">
                                <span>{review.average_check}</span>
                            </div>
                        </div>
                        <div className="revHeadItem">
                            <div className="revHeadInner">
                                <span>{review.business_lunch_avarage}</span>
                            </div>
                        </div>
                        <div className="revHeadItem">
                            <div className="revHeadInner">
                                <span>{review.mark}</span>
                            </div>
                        </div>

                        <div className="revBtns">
                            <div className="revEditBtn">
                                <span>Редактировать</span>
                                <img src={Edit} className="edit" />
                            </div>
                            <div className="revRejectBtn">
                                <span>Отклонить</span>
                                <img src={xIcon} className="xIcon" />
                            </div>
                            <div className="revSuggestBtn">
                                <span>Принять</span>
                                <img src={vIcon} className="vIcon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="newResRevBody">
                    <span>{review.review}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="res-edit-window">
            <div className="res-edit__inner">
                <div className="res-edit__info">
                    <div className="res-edit__infoForEditing">

                        <div className="res-edit__closeWindowBtn" onClick={() => props.isOpen(false)}>
                            <img src={Cancel} className="cancel" />
                            <span>Назад</span>
                        </div>

                        <input type="text" className="res-edit__name" value={restaurant.restaurant}/>
                        <span className="res-info">Средний чек: {restaurant.average_check}</span>
                        <span className="res-info">Средний чек бизнес-ланча: {restaurant.business_lunch_avarage}</span>
                        <span className="res-info">Оценка: {restaurant.rating}</span>
                        
                    </div>
                    <div className="res-edit__map">
                            <div className="map">
                                Геолокация
                            </div>
                            <span className="res-edit__adress">
                                Адрес 
                            </span>
                        </div>
                </div>

                <div className="res-edit__reviews">
                    {restaurantReviewsList}
                </div>


            </div>
        </div>
    )
}