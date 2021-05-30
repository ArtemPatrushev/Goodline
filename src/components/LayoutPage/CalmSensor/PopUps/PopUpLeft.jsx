import wiFi_cabel from '../../../../assets/img/wiFi_cabel.svg';
import corner from '../../../../assets/img/corner.svg';
import hd from '../../../../assets/img/hd.svg';
import night_camera from '../../../../assets/img/night_camera.svg';
import rec from '../../../../assets/img/rec.svg';
import popUp_cam from '../../../../assets/img/popUp_cam.png';
import close from '../../../../assets/img/close.svg';

import style from './PopUpLeft.module.scss';


const PopUp = ({ handleClickLeft }) => (
    <div className={style.PopUp}>
        <img
            src={popUp_cam}
            className={style.leftPopUp__backImg}
            alt="png"
        />
        <img
            src={close}
            alt="svg"
            className={style.leftPopUp__close}
            onClick={handleClickLeft}
        />
        <div className={style.PopUpLayer}>
            <div className={style.PopUp__content}>
                <div className={style.PopUp__item}>
                    <div className={style.PopOp__item__round}>
                        <img src={wiFi_cabel} alt="svg" />
                    </div>
                    <p>Работает по Wi-Fi или кабелю</p>
                </div>
                <div className={style.PopUp__item}>
                    <div className={style.PopOp__item__round}>
                        <img src={hd} alt="svg" />
                    </div>
                    <p>Разрешение 1280х960 (HD)</p>
                </div>
                <div className={style.PopUp__item}>
                    <div className={style.PopOp__item__round}>
                        <img src={night_camera} alt="svg" />
                    </div>
                    <p>Ночная съемка</p>
                </div>
                <div className={style.PopUp__item}>
                    <div className={style.PopOp__item__round}>
                        <img src={rec} alt="svg" />
                    </div>
                    <p>Запись звука и видео</p>
                </div>
                <div className={style.PopUp__item}>
                    <div className={style.PopOp__item__round}>
                        <img src={corner} alt="svg" />
                    </div>
                    <p>Угол обзора 100°</p>
                </div>
                <div className={style.PopUp__item}>
                    <div className={style.PopOp__item__round}>
                    </div>
                    <p>Длина кабеля 1.5 метра</p>
                </div>
            </div>
        </div>
    </div>
);

export default PopUp;
