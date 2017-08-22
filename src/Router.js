import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{backgroundColor:'#3498db'}}>
      <Scene key="root">
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
        />
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeeList"
          component={EmployeeList}
          title="Employees"
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
