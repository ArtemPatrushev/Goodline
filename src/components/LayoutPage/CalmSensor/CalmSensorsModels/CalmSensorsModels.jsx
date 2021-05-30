import cameraImg from '../../../../assets/img/cam.png';

import style from './CalmSensorsModels.module.scss';

const CalmSensorsModels = ({ handleClickRight, handleClickLeft }) => (
    <div className={style.calmSensorsModels}>
        <div className={style.calmSensorsModels__box}>
            <div className={style.calmSensorsModels__item} onClick={handleClickLeft}>
                <img src={cameraImg} alt="png" />
            </div>
            <p onClick={handleClickLeft}>Подробнее</p>
        </div>
        <div className={style.calmSensorsModels__box}>
            <div className={style.calmSensorsModels__item} onClick={handleClickRight}>
                <img src={cameraImg} alt="png" />
            </div>
            <p onClick={handleClickRight}>Подробнее</p>
        </div>
    </div>
);

export default CalmSensorsModels;
