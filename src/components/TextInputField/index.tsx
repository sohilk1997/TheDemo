import React, { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import colors from 'assets/colors';

interface InputTextProps {
    inputValue: string,
    secureEntry: boolean,
    onChange: any,
    testID?: string
}

const TextInputField: FC<InputTextProps> = ({ inputValue, onChange, secureEntry, testID }) => {
    return (
        <TextInput style={styles.textInputStyle}
            onChangeText={text => onChange(text)}
            value={inputValue}
            autoCapitalize='none'
            secureTextEntry={secureEntry}
            testID={testID}
            >
        </TextInput>
    );
};

const styles = StyleSheet.create({
    textInputStyle: {
        fontFamily: 'FiraSans-Regular',
        borderColor: colors.grey_1,
        borderWidth: 1.5,
        padding: 10,
        marginTop: 5
    }
})

export default TextInputField;