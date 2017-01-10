import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

/**
 * Renders actions for a list of patients
 */
class PatientsListActions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sortValue: this.props.sortValue};
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        const {sortValueSelected} = this.props;
        const sortValue = ReactDOM.findDOMNode(this.sortBy).value;
        this.setState({sortValue});
        sortValueSelected(sortValue);
    }
    render() {
        return <Grid>
            <Row>
                <Col xs={12} className="sort-by">
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Sort by</ControlLabel>
                        <FormControl componentClass="select"
                                     placeholder={this.state.sortValue}
                                     ref={ref => this.sortBy = ref}
                                     value={this.state.sortValue}
                                     onChange={this.onChange}>
                            <option value="name">Name</option>
                            <option value="dataOfBirthday">Data of Birthday</option>
                            <option value="dayOfEntry">Day of Entry</option>
                        </FormControl>
                    </FormGroup>
                </Col>
            </Row>
        </Grid>;
    }
}

export default PatientsListActions;
