import React, { useState } from 'react';
import '../css/faq.css';
import Menu_img from '../img/faq-menu.png';

export default function Faq() {

    const [selectedFaq, selectFaq] = useState([]);
    const [isDeleteMode, selectDeleteMode] = useState(false);
    const [textAreaValue, changeAreaText] = useState();

    let faq = [
        {id: '1', question: 'Клиники по ДМС', answer: 'Клиники по ДМС'},
        {id: '2', question: 'Парковка', answer: 'Парковка'},
        {id: '3', question: 'Как пользоваться кофемашиной', answer: 'Как пользоваться кофемашиной'},
        {id: '4', question: 'Командировка', answer: 'Командировка'},
        {id: '5', question: 'Чатики ТЦР', answer: 'Чатики ТЦР'},
        {id: '6', question: 'Скидки от партнеров', answer: 'Скидки от партнеров'},
        {id: '7', question: 'Образовательные программы от Tinkoff.ru', answer: 'Образовательные программы от Tinkoff.ru'},
        {id: '8', question: "Meetup's и конференеции", answer: "Meetup's и конференеции"},
    ];

    let faqList = faq.map((question) => <FaqElement key={question.id} question={question}/>);

    function FaqElement(props) {
        const que = props.question;

        if (selectedFaq.includes(que.id))
            return (
                <div className="selected_faq" onClick={() => faqElementClick(que.id)}>
                    <span>{que.question}</span>
                </div>
            );
        else
            return (
                <div className="faq_name_container" onClick={() => faqElementClick(que)}>
                    <span>{que.question}</span>
                </div>
            );

    };

    function faqElementClick(que) {
        let selected = [...selectedFaq];

        if (isDeleteMode) {
            if (selected.includes(que.id)) {
                selected.splice(selected.indexOf(que.id), 1);
                selectFaq(selected);
            }
            else {
                selected.push(que.id);
                selectFaq(selected);
            }
        }
        else {
            if (!(selected.includes(que.id))){
                selectFaq([que.id]);
                changeAreaText(que.answer);
            }
        }
    }

    function activateDeleteMode(bool) {
        selectFaq([]);
        selectDeleteMode(!bool);
    }

    function addTagToText(tag) {
        let value = textAreaValue + tag;
        changeAreaText(value);
    }


        return (
            <div className="faq_container">
                <div className="faq_menu_container">
                    <div className="faq_menu">
                        <div className="faq_menu__menu_buttom" onClick={() => activateDeleteMode(isDeleteMode)}>
                            <img src={Menu_img} alt="menu_ing" />
                        </div>
                        <div className="faq_list">
                            {faqList}
                        </div>
                    </div>
                </div>
                
                <div className="edit_faq">
                    <div className="tag_buttons">
                        <div className="tag_button" onClick={() => addTagToText("<a>")}>это</div>
                        <div className="tag_button" onClick={() => addTagToText("<b>")}>типа</div>
                        <div className="tag_button" onClick={() => addTagToText("<c>")}>кнопки</div>
                        <div className="tag_button" onClick={() => addTagToText("<d>")}>которые</div>
                        <div className="tag_button" onClick={() => addTagToText("<e>")}>вставляют</div>
                        <div className="tag_button" onClick={() => addTagToText("<f>")}>теги в</div>
                        <div className="tag_button" onClick={() => addTagToText("<g>")}>текст</div>
                    </div>
                    <form className="edit_space">
                        <textarea value={textAreaValue} rows="25" cols="150" id="asd"/>
                        <input type="submit" value="Сохранить" className='save_button'/>
                    </form>
                </div>
            </div>
  
    
   
        );
}