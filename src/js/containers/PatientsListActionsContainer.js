import React from 'react';
import {connect} from 'react-redux';

import PatientsListActions from '../components/PatientsListActions';

/**
 * Passes necessary data to PatientsListActions component
 */
class PatientsListActionsContainer extends React.Component {
    render() {
        const {vewMode} = this.props;
        return <PatientsListActions vewMode={vewMode}/>;
    }
}

const mapStateToProps = state => {
    return {vewMode: state.vewMode}
};

export default connect(mapStateToProps, null)(PatientsListActionsContainer);
