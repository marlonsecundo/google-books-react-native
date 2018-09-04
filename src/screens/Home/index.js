import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import styles from './styles';
import { BookList } from '../../components';

import { connect } from 'react-redux';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: false,
        };
    }

    onBtSearchBookPress = () => {
        this.props.navigation.navigate("SearchScreen");
    }

    render() {

        let books = this.props.books;

        if (this.state.filter) {
            books = this.props.books.filter((item) => {
                if (item.isFavorite) return item;
            });
        }


        return (
            <View style={styles.rootContainer}>
                <Text style={styles.title}>Página Inicial</Text>
                <Button title="Pesquisar Livros" onPress={this.onBtSearchBookPress}></Button>
                <Text style={styles.title}>Livros Salvos</Text>
                <Button
                    title={this.state.filter ? "Mostrar Todos" : "Favoritos"}
                    onPress={() => { this.setState({ filter: !this.state.filter }) }}></Button>
                <BookList navigation={this.props.navigation} books={this.props.books}></BookList>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    books: state.books,
});

export default connect(mapStateToProps)(Home);