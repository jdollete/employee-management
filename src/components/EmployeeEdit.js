import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common'

class EmployeeEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };

    this.onButtonPress = this.onButtonPress.bind(this);
    this.onTextPress = this.onTextPress.bind(this);
    this.displayModal = this.displayModal.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `your upcoming shift is on  ${shift}`);
  }

  displayModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  onConfirm() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  onCancel() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.displayModal}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onConfirm={this.onConfirm}
          onCancel={this.onCancel}
        >
          Are you sure you want to fire this person?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
}

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit);
