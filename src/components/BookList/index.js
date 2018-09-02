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
                    <Text style={styles.title}>Lista De Livros</Text>
                    {this.props.books.map((item) => {
                        return (<BookItem key={item.id} book={item}></BookItem>)
                    })}
                </ScrollView>
            </View>
        );
    }
}

export default BookList;
