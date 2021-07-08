import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from 'assets/colors';

interface SubLabelTextProps {
    text: string,
    textColor: string,
    customStyle?: any,
}

const SubLabelText: FC<SubLabelTextProps> = ({ text, textColor, customStyle }) => {
    return (
        <Text style={[styles.loginText, customStyle, { color: textColor }]}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    loginText: {
        marginTop: 10,
        fontSize: 14,
        color: colors.grey_2,
        fontFamily: 'FiraSans-Medium'
    }
})

export default SubLabelText;
