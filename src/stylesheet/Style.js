import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({

    headerRootContainer: {
        height: 60,
      flex: 0.1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset:{width: 0, height:2},
      shadowOpacity: 0.2,
        marginTop: 20,
        position: 'relative'
    },
    albumListView:{
      flex: 0.9
    },
    headerText: {
        fontSize: 20,
        color: '#000'
    },
    rootContainer: {
        flex: 1
    },
    clearContainer: {
        flex: 1,
        backgroundColor: '#3E606F',
    },
    displayContainer: {
        flex: 2,
        backgroundColor: '#193441',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20,
        flex: 8
    },
    clearButton: {

        flex: 2
    },
    inputButtonHighlighted: {
        backgroundColor: '#193441'
    },
    inputContainer: {
        flex: 7,
        backgroundColor: '#3E606F'
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },
    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },

    //Album detail styles

    albumMainView: {
        flexDirection:'column',
        flex:1,
        backgroundColor: '#ff0000'
    },
    albumHeaderView :{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    thumbnailContainerImage: {
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        justifyContent:'center'
    },

    headerTextContainerStyle: {
      justifyContent: 'space-around',
      flexDirection: 'column'
    },

    albumName: {
        marginLeft: 5,
        fontSize: 18
    },
    artistName: {
        marginLeft: 5
    },

    coverImage: {
       height: 300,
        flex: 1,
        width: null
    },

    buyNowButton :{
        flex: 1,
        margin: 10
    },
    buyNowTopView:{

        justifyContent: 'center',
        alignItems: 'center'
    },

    thumbnailImageStyle: {
        width: 60,
        height: 60
    }

});

export default Style;