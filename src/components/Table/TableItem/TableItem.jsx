import style from './TableItem.module.scss';

const TableItem = ({id, name, age, phone}) => {
    return (
        <>
            <div className={style.tableHead}>About User</div>
            <div className={style.tableItem}>
                <p className={style.rowName}>id:</p>
                {id}
            </div>
            <div className={style.tableItem}>
                <p className={style.rowName}>name:</p>
                {name}
            </div>
            <div className={style.tableItem}>
                <p className={style.rowName}>age:</p>
                {age}
            </div>
            <div className={style.tableItem}>
                <p className={style.rowName}>phone:</p>
                {phone}
            </div>
        </>
    );
};

export default TableItem;
