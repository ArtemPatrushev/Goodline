import style from './PreFabBlock.module.scss';
import like from '../../../assets/img/like.svg';
import flag from '../../../assets/img/flag.svg';
import share from '../../../assets/img/share.svg';

const PreFabBlock = () => (
    <div className={style.preFab}>
        <div className={style.preFab__top}>
            <p>
                Pre-fab Homes
                            </p>
        </div>
        <div className={style.preFab__bottom}>
            <img src={like} alt="svg" />
            <img src={flag} alt="svg" />
            <img src={share} alt="svg" />
        </div>
    </div>

);

export default PreFabBlock;
