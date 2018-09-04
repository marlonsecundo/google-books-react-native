import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    rootContainer:
    {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    image: 
    {
        width: Dimensions.get('screen').width,
        height: 250,
    },
    title:
    {
        fontSize: 20,
        padding: 20,
    },
    fav:
    {
        flex: 0,
    },
    container:
    {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    picker:
    {
        height: 50,
        width: 100,
    },
    bt:
    {
        flex: 1,
        margin: 50,
    },
    btContainer:
    {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }



});

export default styles;