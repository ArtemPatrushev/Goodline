import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import CalmSensorsModels from './CalmSensorsModels/CalmSensorsModels';
import Acquire from './Acquire/Acquire';
import UserForm from './UserForm/UserForm';
import SliderPage from './SliderPage/SliderPage';
import PopUpLeft from './PopUps/PopUpLeft';
import PopUpRight from './PopUps/PopUpRight';

import logoImg from '../../../assets/img/logo.svg';

import style from './CalmSensor.module.scss';


const CalmSensor = () => {
    const [leftPopUpVisible, setLeftPopUpVisible] = useState(false);
    const [rightPopUpVisible, setRightPopUpVisible] = useState(false);
    const [PopUpBackVisible, setPopUpBackVisible] = useState(false);

    const handleClickLeft = () => {
        setLeftPopUpVisible(!leftPopUpVisible);
        setPopUpBackVisible(!PopUpBackVisible);
    }

    const handleClickRight = () => {
        setRightPopUpVisible(!rightPopUpVisible);
        setPopUpBackVisible(!PopUpBackVisible);
    }

    return (
        <div className={style.wrapper}>
            <CSSTransition
                in={PopUpBackVisible}
                timeout={600}
                classNames={style.popUpBack}
                mountOnEnter
                unmountOnExit>
                <div className={style.popUpBack}></div>
            </CSSTransition>
            <div className={style.layout__calmSensor}>
                <div className={style.layout__calmSensor__top}>
                    <img src={logoImg} alt="svg" className={style.logoImg} />
                    <p className={style.layout__calmSensor__header}>Датчик спокойствия</p>
                </div>
                <p>Комплекс из камеры и мобильного приложения, который помогает в любой момент убедиться, что с близкими и домом все в порядке</p>
            </div>
            <CalmSensorsModels handleClickLeft={handleClickLeft} handleClickRight={handleClickRight} />
            <Acquire />
            <UserForm />
            <SliderPage />
            <CSSTransition
                in={leftPopUpVisible}
                timeout={600}
                classNames='leftModule'
                mountOnEnter
                unmountOnExit>
                <PopUpLeft className='leftModule' handleClickLeft={handleClickLeft} />
            </CSSTransition>
            <CSSTransition
                in={rightPopUpVisible}
                timeout={600}
                classNames='rightModule'
                mountOnEnter
                unmountOnExit>
                <PopUpRight className='rightModule' handleClickRight={handleClickRight} />
            </CSSTransition>
        </div>
    );
};

export default CalmSensor;
