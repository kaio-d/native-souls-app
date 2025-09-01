import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './SigninStyle';
import { DefaultInput } from '../../components/DefaultInput/DefaultInput';
const miniLogo = require("../../../assets/miniLogo.png")

export function SignIn() {
  return (
    <View style={styles.container}>
        <Image source={miniLogo} />
        <Text style={styles.h1}>Sign In</Text>
        <Text style={styles.p}>Create your account to start exploring a new world of possibilities</Text>

        <View style={styles.inputContainer}>
            <DefaultInput placeholder={'Username'} />
            <DefaultInput placeholder={'Email'} />
            <DefaultInput placeholder={'Password'} />
            <DefaultInput placeholder={'Confirm Password'} />
        </View>
    </View>
  );
}