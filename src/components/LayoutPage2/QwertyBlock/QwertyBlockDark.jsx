import style from './QwertyBlock.module.scss';
import deleteDarkImg from '../../../assets/img/delete_dark.svg';
import capsDarkImg from '../../../assets/img/caps_dark.svg';
import returnImg from '../../../assets/img/return.svg';

const QwertyBlockDark = () => (
    <div className={style.qwertyBlock}>
        <div className={`${style.qwertyTop} ${style.darkTop}`}>
            <p>suggestion</p>
            <div className={style.divTop}></div>
            <p className={style.fontWeight}>suggestion</p>
            <div className={style.divTop}></div>
            <p>suggestion</p>
        </div>
        <div className={`${style.qwertyField} ${style.darkField}`}>
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
                <img src={capsDarkImg} alt="svg" />
                <p>z</p>
                <p>x</p>
                <p>c</p>
                <p>v</p>
                <p>b</p>
                <p>n</p>
                <p>m</p>
                <img src={deleteDarkImg} alt="svg" />
            </div>
            <div className={style.qwertyBottom}>
                <div className={style.fontColor}>
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

export default QwertyBlockDark;
