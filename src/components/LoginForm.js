import React from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.onEmailChange = onEmailChange.bind(this);
  }

  onEmailChange(text) {

  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>

      </Card>
    );
  }
}

export default LoginForm;
