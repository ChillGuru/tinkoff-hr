import React from 'react';
import '../css/restaurants.css';
import xIcon from '../img/x.png';
import vIcon from '../img/v.png';
import Edit from '../img/edit.png';

export default function Reviews() {

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

    let restaurantsReviewsList = restaurantsReviews.map((review) => <ReviewElement key={review.id} review={review}/>);

    function ReviewElement(props) {
        const review = props.review;
            if (review.category == "") {
                review.category = "Категория неизвестна";
            };
        return (
            <div className='newResRev'>
                <div className="revTableHeader">
                    <div className="heads">
                        <div className="revHeadItem">
                            <div className="revHeadInner">
                                <span>{review.author}</span>
                             </div>
                        </div>
                        <div className="revHeadItem">
                            <div className="revHeadInner">
                                <span>{review.restaurant}</span>
                            </div>
                        </div>
                        <div className="revHeadItem">
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
                        <div className="revHeadItem">
                            <div className="revHeadInner">
                                <span>{review.address}</span>
                            </div>
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

                <div className="newResRevBody">
                    <span>{review.review}</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            {restaurantsReviewsList}
        </div>
    )
}