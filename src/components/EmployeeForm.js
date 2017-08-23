import React from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { StyleSheet, View, Picker, Text } from 'react-native';
import { Input, Card, CardSection } from './common'


class EmployeeForm extends React.Component {
    constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeHolder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value: value })}
          />
        </CardSection>

        <CardSection>
        <Input
          label="Phone"
          placeHolder="555-555-5555"
          value={this.props.phone}
          onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value: value })}
        />
        </CardSection>

        <CardSection style={styles.cardPickerStyle}>
          <Text style={styles.pickerTextStyle}>Select Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  cardPickerStyle: {
    flexDirection: 'column'
  }
});

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return{ name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
