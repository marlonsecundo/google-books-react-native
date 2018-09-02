import React, { Component } from 'react';
import { View, Text, Image, Switch, Button } from 'react-native';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../../redux/books/actions';

export class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,

    };
  }

  onSwitchValueChange = (value) => {
  }

  onBtSavePress = () => {
    this.props.addBook({ ...this.props.book, favorite: this.state.isFavorite });
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: this.props.book.image }}></Image>
        <Text style={styles.txtTitle}>{this.props.book.title}</Text>

        <View style={styles.container}>
          <Text>Favorito?</Text>
          <Switch  />
        </View>

        <Button title="Salvar" onPress={this.onBtSavePress}></Button>

      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(booksActions, dispatch);

export default connect(null, mapDispatchToProps)(BookItem);
