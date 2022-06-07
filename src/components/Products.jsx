import React from 'react';
import '../css/products.css';
import xIcon from '../img/x.png';
import vIcon from '../img/v.png';

export default function Products() {

    let productsToSuggest = [
        {id: "1", author: "Артем Артемов", photo: "Photo url", product_name: "Печенье", availability: "Имеется"},
        {id: "2", author: "Богдан Богданов", photo: "Photo url", product_name: "Вафли", availability: "Имеется"},
        {id: "3", author: "Александр Александров", photo: "Photo url", product_name: "Шоколад", availability: "Нет в наличии"},
        {id: "4", author: "Алексей Алексеев", photo: "Photo url", product_name: "Терамису", availability: "Имеется"},
        {id: "5", author: "Владимир Владимиров", photo: "Photo url", product_name: "Чизкейк", availability: "Нет в наличии"},
        {id: "6", author: "Максим Максимов", photo: "Photo url", product_name: "Торт", availability: "Имеется"},
    ]

    function ProductToSuggest(props) {
        let product = props.product;

        return (
            <div className="product_to_suggest_container">
                <div className="user_name">
                    {product.author}
                </div>
                <form action="#" className="product_to_suggest">
                    <div className="product_to_suggest_info">
                        <div className="product_to_suggest_photo">
                            {product.photo}
                        </div>
                        <div className="product_to_suggest_inputs">
                            <input type="text" className="product_to_suggest_input" value={product.id}/>
                            <input type="text" className="product_to_suggest_input" value={product.product_name}/>
                            <input type="text" className="product_to_suggest_input" value={product.availability}/>
                        </div>
                    </div>
                    <div className="products_to_suggest_buttons">
                        <button type="submit">
                            <span>Принять</span>
                            <img src={vIcon} className="vIcon" />
                        </button>
                        <button type="cancel">
                            <span>Отклонить</span>
                            <img src={xIcon} className="xIcon" />
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    let productsToSuggestList = productsToSuggest.map((product) => <ProductToSuggest key={product.id} product={product}/>);
    
    return (
        <div className="current_session_container">
            <div className="current_products">

            </div>
            <div className="products_to_suugest">
                <div className="to_suggest_header">
                    Запрошенные продукты
                </div>
                <div className="products_to_suggest_list">
                    {productsToSuggestList}
                </div>
            </div>
        </div>
    )
}