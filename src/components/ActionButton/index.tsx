import colors from 'assets/colors';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ActionButtonProps {
    title: string,
    onButtonPress: any,
    testID: string
}

const ActinButton: FC<ActionButtonProps> = ({ title, onButtonPress, testID }) => {
    return (
        <TouchableOpacity style={styles.touchableView}
            onPress={onButtonPress} testID={testID}>
            <Text style={styles.labelText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchableView: {
        marginTop: 30,
        backgroundColor: colors.blue,
        padding: 10
    },
    labelText: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'FiraSans-Bold'
    }
})

export default ActinButton;