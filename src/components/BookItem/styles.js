import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    rootContainer:
    {
        flex: 1,
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        margin: 5,
    },
    image: {
        width: Dimensions.get('screen').width,
        height: 250,
    },
    txtTitle:{
        fontSize: 20,
    }


});

export default styles;