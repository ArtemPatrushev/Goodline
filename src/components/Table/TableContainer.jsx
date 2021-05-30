import { connect } from 'react-redux';
import Table from './Table';

const mapStateToProps = (state) => {
    
    return {
        tableData: state.tablePage.tableData,
    };
};

export default connect(mapStateToProps)(Table);
