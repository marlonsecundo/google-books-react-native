import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../../redux/books/actions';

export class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultImage: "https://vignette.wikia.nocookie.net/2007scape/images/7/7a/Mage%27s_book_detail.png/revision/latest?cb=20180310083825",
    };
  }

  goBookScreen = () => {
    let book = { ...this.props.book, isFavorite: false };
    this.props.navigation.navigate("BookScreen", { book });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.goBookScreen}>
        <View style={styles.rootContainer}>
          <Image style={styles.image} source={{ uri: !!this.props.book.image ? this.props.book.image : this.state.defaultImage }}></Image>
          <Text style={styles.txtTitle}>{this.props.book.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(booksActions, dispatch);

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
