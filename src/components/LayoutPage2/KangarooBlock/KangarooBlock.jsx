import style from './KangarooBlock.module.scss';

const KangarooBlock = () => (
    <div className={style.layoutPage2__content__kangaroo}>
        <div className={style.layoutPage2__content__kangaroo__top}>
            <p>
                Kangaroo Valley Safari
                </p>
        </div>
        <div className={style.layoutPage2__content__kangaroo__middle}>
            <p>
                Located two hours south of Sydney in the Southern Highlands of New South Wales, ...
                </p>
        </div>
        <div className={style.layoutPage2__content__kangaroo__bottom}>
            <div className={style.button}>Share</div>
            <div className={style.button}>Learn more</div>
        </div>
    </div>
);

export default KangarooBlock;
