import {StyleSheet} from "react-native";


 const buttonStyle = StyleSheet.create({


    specialButtonProperties: {
        flex: 0.5, alignItems: 'center'
    },

    core: {
        borderStyle: 'solid',
        borderColor: '#d5d5d5',
        borderWidth: 1,
        backgroundColor: '#eee',
        borderRadius: 3,
        padding: 3,
        paddingLeft: 5,
        paddingRight: 5,
        margin: 10
    }, primary: {
        backgroundColor: '#60b044',
        borderColor: '#355f27'
    },
    hairlineBorder: {
        borderWidth: StyleSheet.hairlineWidth
    }, spacer: {
        marginBottom: 10
    }
});

export default buttonStyle;
