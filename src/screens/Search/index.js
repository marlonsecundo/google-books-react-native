import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { BookList } from '../../components';
import styles from './styles';
import * as booksApi from '../../services/bookAPI';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: '',
            books: [],
        };
    }

    onChangeText = (text) => this.setState({ textSearch: text });

    btSearchPress = async () => {
        let books = [];

        let result = await booksApi.searchBooks(this.state.textSearch);

        if (result.response.ok)
            books = result.books;
        else {
            if (this.state.textSearch === "")
                Alert.alert("Texto Vazio");

            Alert.alert("Não foi possível realizar a procura dos livros!");
        }

        this.setState({ books });

        if (books.lenght === 0) Alert.alert("Nenhum Resultado Encontrado!");
    }



    render() {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.title}>Pesquisa de Livros</Text>
                <View style={styles.container}>
                    <TextInput onChangeText={this.onChangeText}></TextInput>
                    <Button title="Procurar" onPress={this.btSearchPress}></Button>
                </View>
                <BookList navigation={this.props.navigation} books={this.state.books}></BookList>
                <Button title="Voltar" onPress={() => { this.props.navigation.navigate("HomeScreen"); }}></Button>
            </View>
        );
    }
}

export default Search;
