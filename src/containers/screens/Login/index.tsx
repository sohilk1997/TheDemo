import React, { FC, useState } from 'react';
import { View, Text, SafeAreaView, Alert } from 'react-native';
import styles from './styles';
import { useTranslation } from "react-i18next";
import LabelText from 'components/LabelText';
import SubLabelText from 'components/SubLabelText';
import TextInputField from 'components/TextInputField';
import ActionButton from 'components/ActionButton';
import colors from 'assets/colors';
import { validateEmail, isEmpty } from 'utils/validate';
import { TRANSLATIONS_EN } from 'translations/en/translation';

const Login = (props: any) => {
    const { t } = useTranslation();
    let isUsernameValid = false;
    let isPasswordValid = false;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onUserLogin = () => {
        if (isEmpty(email)) {
            Alert.alert(t('str_email_empty_validation'))
        } else if (!validateEmail(email)) {
            Alert.alert(t('str_valid_email_validation'))
        } else if (isEmpty(password)) {
            Alert.alert(t('str_password_empty_validation'))
        } else {
            props.navigation.push('Dashboard');
        }
    }

    const onEmailChangeText = (email: string) => {
        setEmail(email)
    }

    const onPasswordChangeText = (password: string) => {
        setPassword(password)
    }
    const ErrorText = ({ messages = [] }) => {
        const displayMessages = messages.filter((msg) => msg !== undefined);
      
        return (
          <View style={styles.errorContainer}>
            {displayMessages.map((msg) => (
              <Text key={msg} style={styles.errorText}>
                {msg}
              </Text>
            ))}
          </View>
        );
      };

      let usernameErrorMsg: any;
      let passwordErrorMsg: any;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginView}>
                <Text>Login</Text>
                <LabelText text={t('str_login_title')} testID={'LoginTitle'}></LabelText>
            </View>

            <View style={styles.formView}>
                <SubLabelText text={TRANSLATIONS_EN.str_user_name}
                    textColor={colors.grey_2} >
                </SubLabelText>

                <TextInputField inputValue={email}
                    onChange={onEmailChangeText}
                    secureEntry={false} testID={'Login.email'} />

                <SubLabelText text={TRANSLATIONS_EN.str_password}
                    textColor={colors.grey_2}>
                </SubLabelText>

                <TextInputField inputValue={password}
                    onChange={onPasswordChangeText}
                    secureEntry={true} testID={'Login.password'} />

                <SubLabelText text={t('str_forgot_password')}
                    textColor={colors.blue}>
                </SubLabelText>
                <ErrorText messages={[usernameErrorMsg, passwordErrorMsg]} />

                <ActionButton title={t('str_login')}
                    onButtonPress={onUserLogin} testID={'Login.Button'}>
                </ActionButton>
            </View>
        </SafeAreaView>
    )
}

export default Login;
