import style from './Table.module.scss';
import TableItem from './TableItem/TableItem';

const Table = ({tableData}) => {
    
    let tableElements = tableData.map((t) => {
        return <TableItem id={t.id} key={t.id} name={t.name} age={t.age} phone={t.phone} />
    });

    return (
        <div className={style.table}>
            <div className={style.tableHead}>name</div>
            <div className={style.tableHead}>id</div>
            <div className={style.tableHead}>age</div>
            <div className={style.tableHead}>phone</div>
            {tableElements}
        </div>
    );
};

export default Table;
