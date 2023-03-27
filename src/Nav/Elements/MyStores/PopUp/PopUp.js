import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import DropDown from "./DropDown/DropDown";
import Input from "./Input/Input";
import './PopUp.css'

const PopUp = () => {
    return (
        <div className='popUpContainer'>
            {['bottom'].map((placement) => (
                <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                            <Popover.Header as="h3">
                                <div>
                                    Создать магазин
                                </div>
                                <button className='btnClosePopUp'>
                                    <svg className='svgClosePopUp' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8.5" cy="8.5" r="7.98683" transform="rotate(0.088995 8.5 8.5)" stroke="#656565"/>
                                        <path d="M5.94629 5.94621L10.9408 10.7489" stroke="#656565" stroke-linecap="round"/>
                                        <path d="M10.9409 5.95027L5.95037 10.7489" stroke="#656565" stroke-linecap="round"/>
                                    </svg>
                                </button>
                            </Popover.Header>
                            <Popover.Body>
                                <div className='dropDownBlock'>
                                    <div className='dropDownSample'>
                                        Шаблон
                                        <DropDown className='componentDropDown' text='Стандартный'/>
                                    </div>
                                    <div>
                                        Цветовая схема
                                        <DropDown text='Классическая'/>
                                    </div>
                                </div>
                                <div className='domain'>
                                    <div>
                                        Домен
                                    </div>
                                    <form className='formSearch'>
                                        <Input className='searchInput' placeholder='Например: ivangrozniy'/>
                                        <Button className='btnOnForm' variant="secondary">.work5.ru</Button>
                                    </form>
                                </div>
                                <div className='blockExampleContainer'>
                                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_11_287)">
                                            <mask id="mask0_11_287"  maskUnits="userSpaceOnUse" x="0" y="0" width="52" height="52">
                                                <rect width="52" height="52" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_11_287)">
                                            </g>
                                            <g clip-path="url(#clip1_11_287)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9253 0.944702C39.7224 0.944702 50.9059 11.8313 50.9059 25.2595C50.9059 38.6878 39.7224 49.5743 25.9253 49.5743C12.1282 49.5743 0.944702 38.6878 0.944702 25.2595C0.944702 11.8313 12.1282 0.944702 25.9253 0.944702V0.944702Z" stroke="#6666D2" stroke-width="1.8894" stroke-miterlimit="22.9256"/>
                                                <path d="M23.6895 27.3918H27.9092V12.8434H23.6895V27.3918ZM28.8269 29.2272H22.7718C22.2635 29.2272 21.8541 28.8179 21.8541 28.3095V11.9302C21.8541 11.4219 22.2635 11.0125 22.7718 11.0125H28.8269C29.3353 11.0125 29.7446 11.4219 29.7446 11.9302V28.3095C29.7446 28.8179 29.3353 29.2272 28.8269 29.2272Z" fill="#6666D2"/>
                                                <path d="M23.6895 38.0894H27.9092V34.4366H23.6895V38.0894ZM28.8269 39.9248H22.7718C22.2635 39.9248 21.8541 39.5155 21.8541 39.0071V33.5189C21.8541 33.0105 22.2635 32.6012 22.7718 32.6012H28.8269C29.3353 32.6012 29.7446 33.0105 29.7446 33.5189V39.0071C29.7446 39.5155 29.3353 39.9248 28.8269 39.9248Z" fill="#6666D2"/>
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_11_287">
                                                <rect width="52" height="52" fill="white"/>
                                            </clipPath>
                                            <clipPath id="clip1_11_287">
                                                <rect width="51.8506" height="50.5145" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div className='exampleText'>
                                        В названии домена разрешены латиница и “-”, запрещается использовать словосочетание Work 5. После создания магазина Вы сможете прикрутить свой домен (например ivangrozniy.ru). Подробнее по ссылке
                                    </div>
                                </div>
                            </Popover.Body>
                            <div className='btnFooter'>
                                <Button className='btnCloseModal' variant="secondary" >
                                    Отмена
                                </Button>
                                <Button className='btnCreateModal' variant="success" >
                                    Создать
                                </Button>
                            </div>
                        </Popover>
                    }
                >
                    <Button variant="success" className='btnCreateYourStore'>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.293 4.08008V6.53125H0.546875V4.08008H10.293ZM6.75781 0.222656V10.5742H4.0918V0.222656H6.75781Z" fill="white"/>
                        </svg>
                        Создать свой магазин
                    </Button>
                </OverlayTrigger>
            ))}
        </div>
    );
};

export default PopUp;