import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.rootContainer}>
                <Text> textInComponent </Text>
            </View>
        );
    }
}

export default Book;
