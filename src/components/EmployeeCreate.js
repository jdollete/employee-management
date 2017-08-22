import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button, Card, CardSection } from './common';

class EmployeeCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            label="Name"
            placeHolder="Jane"
          />
        </CardSection>

        <CardSection>
        <Input
          label="Phone"
          placeHolder="555-555-5555"
        />
        </CardSection>

        <CardSection>

        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>


      </Card>
    );
  }
}

export default EmployeeCreate;
