import React from 'react';
import {Link} from "react-router-dom";
import { 
    Nav,
    Navbar,
    NavDropdown, 
  } from 'react-bootstrap';
import '../css/navibar.css';
import userLogo from '../img/user-logo.png';

export default function Navibar() {
    return (
    <Navbar collapseOnSelect expand="lg" bsClass="navibar" className="navibar">
            <div className="brand">
                <img src={userLogo} />
                <div className="username">
                    <span>Имя</span><br/>
                    <span>Пользователя</span>
                </div>
            </div>
            <div className="navi">
                    <NavDropdown title={<Link to="/products" className="nav-item">Продукты</Link>} id="basic-nav-dropdown">
                        <NavDropdown.Item>Добавить категорию</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Выгрузить список в Excel</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item><Link to="/sessions" className="dropdown-item">Предыдущие сессии</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Закрыть сессию</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link><Link to="/reviews" className="nav-item">Отзывы</Link></Nav.Link>
                    <Nav.Link><Link to="/restaurants" className="nav-item">Рестораны</Link></Nav.Link>
                    <NavDropdown title="Список пользователей" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/active_users_list" className="dropdown-item">Активные пользователи</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item><Link to="/inactive_users_list" className="dropdown-item">Удаленные пользователи</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link><Link to="/faq" className="nav-item">FAQ</Link></Nav.Link>
            </div>  
    </Navbar>
    )
}
