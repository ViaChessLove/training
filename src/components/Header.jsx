import React from 'react';

const Header = () => {
        
        return (
                <header className="header">
                        <div className="wrapper">
                                <div class="contentHeader">
                                        <div className="sideLeft">
                                                <img src="/static/images/logo.svg" alt="" className="logo" />
                                                <span className="headerText">EG EZ - ЛУЧШИЙ САЙТ ДЛЯ ПОИСКА РЕПЕТИТОРОВ ЕГЭ</span>
                                        </div>  

                                        <div className="sideRight">
                                                <input type="checkbox" name="" id="burger"/>
                                                <label class="burgerImg" for="burger"></label>
                                                <nav>
                                                        <li><a href="#info" >
                                                        О проекте</a></li>
                                                        <li>
                                                                <a href="#tutors">
                                                                        Наши преподоавтели
                                                                </a>
                                                        </li>
                                                        <li className="last">
                                                                <a href="#standin">
                                                                        Стать частью команды
                                                                </a>
                                                        </li>
                                                </nav>
                                        </div> 

                                </div>
                        </div>
                </header>
        );
};

export default Header;