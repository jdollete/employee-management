import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common'

class EmployeeEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect()(EmployeeEdit);
