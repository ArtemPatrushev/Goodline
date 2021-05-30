import like from '../../../assets/img/like.svg';
import flag from '../../../assets/img/flag.svg';
import share from '../../../assets/img/share.svg';

import style from './BestBlock.module.scss';

const BestBlock = () => (
    <div className={style.best}>
        <div className={style.best__item}>
            <div className={style.best__item__top}>
                <p>
                    Favorite Road Trips
                                </p>
            </div>
            <div className={style.best__item__bottom}>
                <img src={like} alt="svg" />
                <img src={flag} alt="svg" />
                <img src={share} alt="svg" />
            </div>
        </div>
        <div className={style.best__item}>
            <div className={`${style.best__item__top} ${style.best__back}`}>
                <p>
                    Best Airlines
                                </p>
            </div>
            <div className={style.best__item__bottom}>
                <img src={like} alt="svg" />
                <img src={flag} alt="svg" />
                <img src={share} alt="svg" />
            </div>
        </div>
    </div>

);

export default BestBlock;
