import React from 'react';

const Tutors = () => {
        return (
                <div id="tutors">
                        <div className="tutor">
                                <div className="tutorsWrapper">
                                        <img src="/static/images/IvanIvanov.svg" alt=""/>
                                        <div className="tutorInfo">
                                                <h1>Иванов Иван</h1>
                                                <div className="textTutor">
                                                        Опыт: 1 год.
                                                </div>
                                                <div className="textTutor">
                                                Профильные предметы :
                                                        Химия.
                                                </div>
                                                <div className="textTutor">
                                                Информация о преподавателе: Окончил медицинскую академию в 
                                                Москве с красным дипломом, в прошлом году один из его студентов сдал химию на 100 баллов.
                                                </div>
                                        </div>
                                </div>
                                
                                <div className="fees">Преподаватель просит 1250 рублей за академический час</div>
                                <div className="pleaseFillForm">
                                Если вас заинтересовал преподаватель, заполните анкету ниже:
                                </div>
                                <form className="formTutors">
                                        <p><input type="text" className="formInput" placeholder="Введите имя" autocomplete="off"></input></p>
                                        <p><input type="text" className="formInput" placeholder="Введите ваш e-mail адрес" autocomplete="off"></input></p>
                                        <p><input type="text" className="formInput" placeholder="Введите номер телефона" autocomplete="off"></input></p>
                                        <p><input type="submit" className="formButton" value="Отправить заявку"/></p>
                                </form>  
                        </div>

                        <div className="tutor second">
                                <div className="tutorsWrapper">
                                        <img src="/static/images/LukaGorschenev.svg" alt=""/>
                                        <div className="tutorInfo">
                                                <h1>Горшенев Лука</h1>
                                                <div className="textTutor">
                                                       Опыт: 20 лет.
                                                </div>
                                                <div className="textTutor">
                                                Профильные предметы :
                                                Физика, Химия.
                                                </div>
                                                <div className="textTutor">
                                                Информация о преподавателе: Доктор химических наук, 
                                                написал диссертацию “о вреде примесей в смесях”. 
                                                Подготовил пол тысячи студентов к ЕГЭ и вступительным экзаменам на максимальный балл.
                                                </div>
                                        </div>
                                </div>
                                
                                <div className="fees">Преподаватель просит 3000 рублей за академический час</div>
                                <div className="pleaseFillForm">
                                Если вас заинтересовал преподаватель, заполните анкету ниже:
                                </div>
                                <form className="formTutors">
                                        <p><input type="text" className="formInput" placeholder="Введите имя" autocomplete="off"></input></p>
                                        <p><input type="text" className="formInput" placeholder="Введите ваш e-mail адрес" autocomplete="off"></input></p>
                                        <p><input type="text" className="formInput" placeholder="Введите номер телефона" autocomplete="off"></input></p>
                                        <p><input type="submit" className="formButton" value="Отправить заявку"/></p>
                                </form>  
                        </div>

                        <div className="tutor">
                                <div className="tutorsWrapper">
                                        <img src="/static/images/SilvesterSergeev.svg" alt=""/>
                                        <div className="tutorInfo">
                                                <h1>Сильвестр Сергеев</h1>
                                                <div className="textTutor">
                                                       Опыт: 20 лет.
                                                </div>
                                                <div className="textTutor">
                                                Профильные предметы :
                                                Экономика.
                                                </div>
                                                <div className="textTutor">Информация о преподавателе: На счету Сильвестра 50 стобальников по математике.
                                                </div>
                                        </div>
                                </div>
                                
                                <div className="fees">Преподаватель просит 1800 рублей за академический час</div>
                                <div className="pleaseFillForm">
                                Если вас заинтересовал преподаватель, заполните анкету ниже:
                                </div>
                                
                                <form className="formTutors">
                                        <p><input type="text" className="formInput" placeholder="Введите имя" autocomplete="off"></input></p>
                                        <p><input type="text" className="formInput" placeholder="Введите ваш e-mail адрес" autocomplete="off"></input></p>
                                        <p><input type="text" className="formInput" placeholder="Введите номер телефона" autocomplete="off"></input></p>
                                        <p><input type="submit" className="formButton" value="Отправить заявку"/></p>
                                </form>  
                        </div>
                        <div className="tutor second">
                                <div className="tutorsWrapper">
                                        <img src="/static/images/VeronaBulkina.svg" alt=""/>
                                        <div className="tutorInfo">
                                                <h1>Вероника Булкина</h1>
                                                <div className="textTutor">
                                                Опыт: 5 лет.
                                                </div>
                                                <div className="textTutor">
                                                Профильные предметы :
                                                        Литература.
                                                </div>
                                                <div className="textTutor">
                                                Информация о преподавателе:  Многие из тех, кому довелось учиться у Вероники, сейчас учатся в МГУ и СПБГУ.
                                                </div>
                                        </div>
                                </div>
                                
                                <div className="fees">Преподаватель просит  2500 рублей за академический час</div>
                                <div className="pleaseFillForm">
                                Если вас заинтересовал преподаватель, заполните анкету ниже:
                                </div>
                                <form className="formTutors">
                                        <p><input type="text" className="formInput" placeholder="Введите имя" autocomplete="off"></input></p>
                                        <p><input type="text" className="formInput" placeholder="Введите ваш e-mail адрес" autocomplete="off"></input></p>
                                        <p><input type="text" className="formInput" placeholder="Введите номер телефона" autocomplete="off"></input></p>
                                        <p><input type="submit" className="formButton" value="Отправить заявку"/></p>
                                </form>  
                        </div>
                </div>
                
        );
};

export default Tutors;