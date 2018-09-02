import React, { Component } from 'react';
import { View, Button, Switch } from 'react-native';
import styles from './styles';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onBtSearchBookPress = () => {
        this.props.navigation.navigate("SearchScreen");
    }

    render() {
        return (
            <View style={styles.rootContainer}>
                <Button title="Pesquisar Livros" onPress={this.onBtSearchBookPress}></Button>
            </View>
        );
    }
}

export default Home;
