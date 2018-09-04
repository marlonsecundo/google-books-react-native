import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { BookItem } from '../';
import styles from './styles';

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.rootContainer}>
                <ScrollView>
                    {this.props.books.map((item) => {
                        return (<BookItem navigation={this.props.navigation} key={item.id} book={item}></BookItem>)
                    })}
                </ScrollView>
            </View>
        );
    }
}

export default BookList;
