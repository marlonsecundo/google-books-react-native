import React, { Component } from 'react';
import { View, Image, Button, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../../redux/books/actions';
import styles from './styles';
class Book extends Component {
    constructor(props) {
        super(props);

        let bookArg = this.props.navigation.getParam('book');

        let book = this.props.books.find(item => {
            return item.id === bookArg.id
        })

        book = !!book ? book : bookArg;

        this.state = {
            defaultImage: "https://vignette.wikia.nocookie.net/2007scape/images/7/7a/Mage%27s_book_detail.png/revision/latest?cb=20180310083825",
            isFavorite: book.isFavorite,
            book,

        };
    }

    onSave = () => {
        let book = this.state.book;
        book.isFavorite = this.state.isFavorite;

        if (this.props.books.some(item => item.id === this.state.book.id))
            this.props.updateBook(book);
        else
            this.props.addBook(book);
    }

    onRemove = () => {
        this.props.removeBook(this.state.book);
        this.props.navigation.goBack();
    }

    onBackPress = () => {
        this.props.navigation.goBack();
    }


    render() {
        return (
            <View style={styles.rootContainer}>
                <Button onPress={this.onBackPress} title="Voltar"></Button>
                <Image style={styles.image} source={{ uri: !!this.state.book.image ? this.state.book.image : this.state.defaultImage }}></Image>
                <Text style={styles.title}>{this.state.book.title}</Text>
                <View style={styles.container}>
                    <Button
                        title={this.state.isFavorite ? "Desfavoritar" : "Marcar Como Favorito"}
                        onPress={() => { this.setState({ isFavorite: !this.state.isFavorite }) }}>
                    </Button>
                </View>
                <View style={styles.btContainer}>
                    <Button style={styles.bt} title="Salvar" onPress={this.onSave}></Button>
                    {
                        this.props.books.some(item => item.id === this.state.book.id)
                            ? <Button style={styles.bt} onPress={this.onRemove} title="Remover"></Button>
                            : null
                    }
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    books: state.books,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(booksActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Book);
