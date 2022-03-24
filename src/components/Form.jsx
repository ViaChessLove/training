import React from 'react';

const Form = () => {
        return (
                <div className="form" id="standin">
                        <div className="formText">
                                Хочешь присоединиться к команде? Заполни анкету и отправь ее,
                                мы ответим тебе в ближайшее время.
                        </div>
                        <div className="inputForm">
                                <div className="formTitle">
                                        Анкета для будущих преподавателей.
                                </div>
                                <form className="questioning">
                                        <p><input type="text" className="formInput" placeholder="Введите имя" autocomplete="off"></input></p>
                                        <p><input type="text" className="formInput" placeholder="Введите ваш e-mail адрес" autocomplete="off"></input></p>
                                        <p><input type="text" className="formInput" placeholder="Введите номер телефона" autocomplete="off"></input></p>
                                        <p><input type="text" className="formInput" placeholder="Введите вашу специализацию" autocomplete="off"></input></p>
                                        <p><input type="text" className="formInput" placeholder="Введите опыт вашей работы (полных лет)" autocomplete="off"></input></p>
                                        <p><input type="submit" className="formButton" value="Отправить заявку"/></p>
                                </form>
                        
                                <p><div className="afterFormText">
                                Не волнуйтесь, если вам не ответили сразу,
                                наши сотрудники обычные люди, которые могут
                                не успеть вовремя прочитать ваше письмо, 
                                однако, не переживайте, мы отвечаем всем и 
                                у вас есть все шансы стать частью нашей команды. GL HF!
                                </div></p>
                        </div>
                </div>
        );
};

export default Form;