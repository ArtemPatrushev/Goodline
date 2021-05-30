import KangarooBlock from './KangarooBlock/KangarooBlock';
import ElPoochBlock from './ElPoochBlock/ElPoochBlock';
import WelcomeBackBlock from './WelcomeBackBlock/WelcomeBackBlock';
import PreFabBlock from './PreFabBlock/PreFabBlock';
import BestBlock from './BestBlock/BestBlock';
import TicketsBlock from './TicketsBlock/TicketsBlock';
import QwertyBlockGrey from './QwertyBlock/QwertyBlockGrey';
import QwertyBlockDark from './QwertyBlock/QwertyBlockDark';

import style from './LayoutPage2.module.scss';

const CalmSensor = () => (
    <div className={style.layoutPage2Wrapper}>
        <div className={style.layoutPage2__content}>
            <div className={style.layoutPage2__content__left}>
                <KangarooBlock />
                <ElPoochBlock />
                <WelcomeBackBlock />
            </div>
            <div className={style.layoutPage2__content__right}>
                <PreFabBlock />
                <BestBlock />
                <TicketsBlock />
            </div>
        </div>
        <div className={style.centerButton}>
            Открыть
        </div>
        <div className={style.qwertyBlocks}>
            <QwertyBlockGrey />
            <QwertyBlockDark />
        </div>
    </div>
);

export default CalmSensor;
