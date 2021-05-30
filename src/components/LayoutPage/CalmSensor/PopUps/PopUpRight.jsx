import moove from '../../../../assets/img/moove.svg';
import download from '../../../../assets/img/download.svg';
import family from '../../../../assets/img/family.svg';
import world from '../../../../assets/img/world.svg';
import bell from '../../../../assets/img/bell.svg';
import saving_data from '../../../../assets/img/saving_data.svg';
import close from '../../../../assets/img/close.svg';
import smartImg from '../../../../assets/img/popUp_smart.png';

import style from './PopUpRight.module.scss';


const PopUp = ({ handleClickRight }) => (
    <div className={style.PopUp}>
        <img
            src={smartImg}
            className={style.rightPopUp__backImg}
            alt="png"
        />
        <img
            src={close}
            alt="svg"
            className={style.rightPopUp__close}
            onClick={handleClickRight}
        />
        <div className={style.PopUpLayer}>
            <div className={style.PopUp__content}>
                <div className={style.PopUp__item}>
                    <div className={style.PopOp__item__round}>
                        <img src={moove} alt="svg" />
                    </div>
                    <p>Работает по Wi-Fi или кабелю</p>
                </div>
                <div className={style.PopUp__item}>
                    <div className={style.PopOp__item__round}>
                        <img src={saving_data} alt="svg" />
                    </div>
                    <p>Разрешение 1280х960 (HD)</p>
                </div>
                <div className={style.PopUp__item}>
                    <div className={style.PopOp__item__round}>
                        <img src={family} alt="svg" />
                    </div>
                    <p>Ночная съемка</p>
                </div>
                <div className={style.PopUp__item}>
                    <div className={style.PopOp__item__round}>
                        <img src={download} alt="svg" />
                    </div>
                    <p>Запись звука и видео</p>
                </div>
                <div className={style.PopUp__item}>
                    <div className={style.PopOp__item__round}>
                        <img src={world} alt="svg" />
                    </div>
                    <p>Угол обзора 100°</p>
                </div>
                <div className={style.PopUp__item}>
                    <div className={style.PopOp__item__round}>
                        <img src={bell} alt="svg" />
                    </div>
                    <p>Длина кабеля 1.5 метра</p>
                </div>
            </div>
        </div>
    </div>
);

export default PopUp;
