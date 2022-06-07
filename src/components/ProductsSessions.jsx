import React from 'react';
import '../css/products.css';
import SearchBtn from '../img/search-btn.png';

export default function ProductsSessions() {

    let sessions = [
        {id:'1', date:"16.09.2021", products:[
            {id:'p1', photo:"url", amount:"31"},
            {id:'p2', photo:"url", amount:"323"},
            {id:'p3', photo:"url", amount:"12"},
            {id:'p4', photo:"url", amount:"21"},
            {id:'p5', photo:"url", amount:"34"},
            {id:'p6', photo:"url", amount:"57"},
            {id:'p7', photo:"url", amount:"23"},
            {id:'p8', photo:"url", amount:"53"},
            {id:'p9', photo:"url", amount:"35"},
            {id:'p10', photo:"url", amount:"10"}
        ]},
        {id:'2', date:"23.09.2021", products:[
            {id:'p11', photo:"url", amount:"1"},
            {id:'p12', photo:"url", amount:"23"},
            {id:'p13', photo:"url", amount:"85"},
            {id:'p14', photo:"url", amount:"12"},
            {id:'p15', photo:"url", amount:"35"},
            {id:'p16', photo:"url", amount:"33"},
            {id:'p17', photo:"url", amount:"21"},
            {id:'p18', photo:"url", amount:"24"},
            {id:'p19', photo:"url", amount:"5"},
            {id:'p20', photo:"url", amount:"16"}
        ]},
        {id:'3', date:"30.09.2021", products:[
            {id:'p21', photo:"url", amount:"9"},
            {id:'p22', photo:"url", amount:"14"},
            {id:'p23', photo:"url", amount:"62"},
            {id:'p24', photo:"url", amount:"2"},
            {id:'p25', photo:"url", amount:"5"},
            {id:'p26', photo:"url", amount:"12"},
            {id:'p27', photo:"url", amount:"73"},
            {id:'p28', photo:"url", amount:"23"},
            {id:'p29', photo:"url", amount:"52"},
            {id:'p30', photo:"url", amount:"34"}
        ]}
    ];

    function ProductsSession(props) {
        let session = props.session;
        
        function Product(props) {
            let product = props.product;

            return (
                <div className="product_container">
                    <div className="article">
                        {product.id}
                    </div>
                    <div className="photo">
                        Фото
                    </div>
                    <div className="product_amount">
                        {product.amount}
                    </div>
                </div>
            );
        };

        let productsList = session.products.map((product) => <Product key={product.id} product={product}/>);

        return (
            <div className='session_container'>
                <span className="session_date">
                    {session.date}
                </span>
                <div className="products_container">
                    {productsList}
                </div>
            </div>
        );
    }

    let SessionsList = sessions.map((session) => <ProductsSession key={session.id} session={session}/>);

    return (
        <div className="sessions_container">
            <form className="search_products">
                    <input type="text" size="29" placeholder="Поиск..."/>
                    <button type="submit" className="search-btn">
                        <img src={SearchBtn} alt="search-btn" />
                    </button>
            </form>
            {SessionsList}
        </div>
    )
}