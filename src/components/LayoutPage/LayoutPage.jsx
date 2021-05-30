import CalmSensor from './CalmSensor/CalmSensor';

import style from './LayoutPage.module.scss';

const LayoutPage = () => (
    <div className={style.layout}>
        <div className={style.container}>
            <CalmSensor />
        </div>
    </div>
);

export default LayoutPage;
