import { StyleSheet } from 'react-native';

const styles  = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'stretch',
    },
    header:{
        backgroundColor: 'black',
        height: 100,
    },
    logoReact:{
        height: '100%',
    },
    containerHeader:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    content: {
        padding: 20,
        alignItems: 'stretch',
        justifyContent: 'center',

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        height: 60,
        borderRadius: 30,
        marginBottom: 10,
    },
    textButton: {
        
    }
});

export default styles;