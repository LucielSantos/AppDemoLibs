import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00D1C1',
    },
    containerTitle:{
        padding: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#007A87',
        
    },
    content: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    lottie: {
        height: 100,
    },
    astronauta: {
        height: 200
    },
    controls:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    instruction: {
        color: '#1A0953',
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button:{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A0953',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    textButton:{
        color: 'white',
    }
});

export default styles;