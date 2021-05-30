import style from './WelcomeBackBlock.module.scss';

const WelcomeBackBlock = () => {

    return (
        <div className={style.welcomeBack}>
            <div className={style.welcomeBack__top}>
                <p>
                    Welcome Back!
                            </p>
                <p>
                    It’s been a while, have you read any new books lately?
                            </p>
            </div>
            <div className={style.welcomeBack__bottom}>
                <p className={style.button}>
                    Yes
                            </p>
                <p className={style.button}>
                    No
                            </p>
            </div>
        </div>

    );
};

export default WelcomeBackBlock;
