import React, {useState} from 'react';
import '../css/reviews.css';
import xIcon from '../img/x.png';

export default function Reviews() {

    const [reviews, setReviews] = useState ([
        { id: "asd9", author: "Иван Иванов Иванович 9", review: "Asdasdasd"},
        { id: "asd10", author: "Иван Иванов Иванович 10", review: "Asda"},
        { id: "asd11", author: "Иван Иванов Иванович 11", review: "Asdasd"},
        { id: "asd12", author: "Иван Иванов Иванович 12", review: "Asd"},
        { id: "asd13", author: "Иван Иванов Иванович 13", review: "Asdasda"},
        { id: "asd14", author: "Иван Иванов Иванович 14", review: "Asdasdasd"},
        { id: "asd15", author: "Иван Иванов Иванович 15", review: "Asdas"},
        { id: "asd16", author: "Иван Иванов Иванович 16", review: "As"}
    ]);

    let reviewsList = reviews.map((review) => <ReviewsElement key={review.id} review={review}/>);

    function ReviewsElement(props) {
        const review = props.review;
        return (
            <div className="review-row">
                    <span className="review-username">{review.author}</span>
                    <div className="review-container">
                        <div className="review">
                            {review.review}
                        </div>
                        <div className="remove-btn">
                            <span>Удалить</span>
                            <img src={xIcon} className="xIcon" />
                        </div>
                    </div>
            </div>
        );
    }

    return (
        <div>
            {reviewsList}
        </div>
    )
}