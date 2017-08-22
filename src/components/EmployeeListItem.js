import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './common';

class EmployeeListItem extends React.Component {constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props.employee

    return (
      <CardSection>
        <Text style={styles.titleStyle}>
          {name}
        </Text>
      </CardSection>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

export default EmployeeListItem;
