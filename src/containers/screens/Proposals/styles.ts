import { StyleSheet } from 'react-native'
import colors from 'assets/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.blue_4
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelStyle: {
        fontSize: 20
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 16,
      },
      row: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
      },
});

export default styles;
