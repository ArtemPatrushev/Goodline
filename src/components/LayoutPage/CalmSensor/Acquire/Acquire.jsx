import purchaseImg from '../../../../assets/img/purchase.svg';
import installmentPlan from '../../../../assets/img/installment_plan.svg';
import hundredImg from '../../../../assets/img/100.svg';
import wiFiImg from '../../../../assets/img/wifi.svg';
import btvImg from '../../../../assets/img/btv.svg';
import purchaseSmallImg from '../../../../assets/img/purchase_small.svg';

import style from './Acquire.module.scss';

const Acquire = () => (
    <div className={style.wrapper}>
        <p>Приобрести</p>
        <div className={style.acquireTypes}>
            <div className={`${style.acquireTypesItem} ${style.gridArea_A}`}>
                <img className={style.purchaseImg} src={purchaseImg} alt="svg" />
                <p className={style.marginBottomTextMax}>Покупка</p>
            </div>
            <div className={`${style.acquireTypesItem} ${style.gridArea_B}`}>
                <img className={style.installmentPlan} src={installmentPlan} alt="svg" />
                <p className={style.marginBottomTextMax}>Рассрочка</p>
            </div>
            <div className={`${style.acquireTypesItem} ${style.gridArea_C}`}>
                <div className={style.acquireTypesItem__package}>
                    <img className={style.hundredImg} src={hundredImg} alt="svg" />
                    <img className={style.purchaseImg} src={purchaseImg} alt="svg" />
                    <img className={style.wiFiImg} src={wiFiImg} alt="svg" />
                </div>
                <p className={style.acquireTypesItem__text}>Пакет</p>
                <p className={`${style.acquireTypesItem__bottomText} ${style.marginBottomTextMin}`}>"Все под контролем"</p>
            </div>
            <div className={`${style.acquireTypesItem} ${style.gridArea_D}`}>
                <img className={style.btvImg} src={btvImg} alt="svg" />
                <div className={style.acquireTypesItem__package}>
                    <img className={style.hundredImg} src={hundredImg} alt="svg" />
                    <img className={style.purchaseSmallImg} src={purchaseSmallImg} alt="svg" />
                    <img className={style.wiFiImg} src={wiFiImg} alt="svg" />
                </div>
                <p className={style.acquireTypesItem__text}>Пакет</p>
                <p className={`${style.acquireTypesItem__bottomText} ${style.marginBottomTextMin}`}>"Все под контролем"</p>
            </div>
        </div>
    </div>
);

export default Acquire;
