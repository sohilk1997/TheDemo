import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import colors from 'assets/colors';

interface LabelTextProps {
    text: string;
    testID: any;
}

const LabelText: FC<LabelTextProps> = ({ text, testID }) => {
    return (
        <Text style={styles.loginText} testID={testID}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    loginText: {
        fontSize: 40,
        textAlign: 'center',
        color: colors.blue,
        fontFamily: 'FiraSans-Regular'
    }
})

export default LabelText;