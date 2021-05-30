import style from './ElPoochBlock.module.scss';

const ElPoochBlock = () => (
    <div className={style.layoutPage2__content__pooch}>
        <div className={style.layoutPage2__content__pooch__greyBlock}></div>
        <div className={style.layoutPage2__content__pooch__top}>
            <p>
                El Pooch
                </p>
            <p>
                By Alex Nelson
                </p>
        </div>
        <div className={style.layoutPage2__content__pooch__bottom}>
            <div className={style.button}>
                Free Sample
                </div>
            <div className={style.button}>
                Review
                </div>
        </div>
    </div>
);

export default ElPoochBlock;
