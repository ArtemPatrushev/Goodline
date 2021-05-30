import style from './TicketsBlock.module.scss';
import point from '../../../assets/img/point.svg';
import today from '../../../assets/img/today.svg';
import checkbox from '../../../assets/img/checkbox outline.svg';

const TicketsBlock = () => (
    <div className={style.tickets}>
        <div className={style.tickets__leftTop}>
            <div className={style.tickets__leftTop__top}>
                <p>
                    Yuna tickets on sale 6/24
                                </p>
            </div>
            <div className={style.tickets__leftTop__bottom}>
                <p>
                    May 24, 2014
                                </p>
                <img src={today} alt="svg" />
            </div>
        </div>
        <div className={style.tickets__right}>
            <div className={style.tickets__right__top}>
                <p>
                    Groceries:
                                </p>
                <ul>
                    <li>
                        <img src={checkbox} alt="svg" />
                                        almond milk
                                    </li>
                    <li>
                        <img src={checkbox} alt="svg" />
                                        coconut water
                                    </li>
                    <li>
                        <img src={checkbox} alt="svg" />
                                        cucumber
                                    </li>
                    <li>
                        <img src={checkbox} alt="svg" />
                                        green apples
                                    </li>
                </ul>
            </div>
            <div className={style.tickets__right__bottom}>
                <p>
                    Campbell
                                </p>
                <img src={point} alt="svg" />
            </div>
        </div>
        <div className={style.tickets__leftBottom}>
            <p>
                Clean desk
                            </p>
        </div>
    </div>
);

export default TicketsBlock;
