import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

import {user} from '../store/actions';
import LoginStatus from '../constants/auth';

import styles from './signup-styles';

export class Signup extends Component {
  state = {
    name: null,
    email: null,
    password: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.loginStatus !== this.props.loginStatus) {
      if (this.props.loginStatus === LoginStatus.SIGN_UP) {
        this.props.navigation.goBack();
      }
    }
  }

  onSignUp = () => {
    const {name, email, password} = this.state;
    this.props.singUp({
      name,
      email,
      password,
    });
  };

  render() {
    const {name, email, password} = this.state;

    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.txtLogin}>Signup</Text>
          <Input
            label={'Name'}
            value={name}
            onChangeText={(text) => this.setState({name: text})}
          />
          <Input
            label={'Email'}
            value={email}
            onChangeText={(text) => this.setState({email: text})}
            keyboardType={'email-address'}
            containerStyle={styles.inputContainer}
          />
          <Input
            label={'Password'}
            value={password}
            onChangeText={(text) => this.setState({password: text})}
            containerStyle={styles.inputContainer}
            secureTextEntry
          />
          <Button
            title={'Sing Up'}
            containerStyle={styles.btn}
            onPress={this.onSignUp}
          />
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user.get('info'),
  loginStatus: state.auth.get('loginStatus'),
});

const mapDispatchToProps = {
  singUp: user.singUp,
  checkUser: user.checkUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
