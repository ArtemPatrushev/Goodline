import style from './QwertyBlock.module.scss';
import deleteImg from '../../../assets/img/delete.svg';
import capsImg from '../../../assets/img/caps.svg';
import returnImg from '../../../assets/img/return.svg';

const QwertyBlockGrey = () => (
    <div className={style.qwertyBlock}>
        <div className={style.qwertyTop}>
            <p>suggestion</p>
            <div></div>
            <p className={style.fontWeight}>suggestion</p>
            <div></div>
            <p>suggestion</p>
        </div>
        <div className={style.qwertyField}>
            <div className={style.qwertyFieldRow}>
                <p>q</p>
                <p>w</p>
                <p>e</p>
                <p>r</p>
                <p>t</p>
                <p>y</p>
                <p>u</p>
                <p>i</p>
                <p>o</p>
                <p>p</p>
            </div>
            <div className={style.qwertyFieldRow}>
                <p>a</p>
                <p>s</p>
                <p>d</p>
                <p>f</p>
                <p>g</p>
                <p>h</p>
                <p>j</p>
                <p>k</p>
                <p>l</p>
            </div>
            <div className={style.qwertyFieldRow}>
                <img src={capsImg} alt="svg" />
                <p>z</p>
                <p>x</p>
                <p>c</p>
                <p>v</p>
                <p>b</p>
                <p>n</p>
                <p>m</p>
                <img src={deleteImg} alt="svg" />
            </div>
            <div className={style.qwertyBottom}>
                <div>
                    ?123
                            </div>
                <p>,</p>
                <div className={style.space}></div>
                <p>.</p>
                <img src={returnImg} alt="svg" />
            </div>
        </div>
    </div>
);

export default QwertyBlockGrey;
