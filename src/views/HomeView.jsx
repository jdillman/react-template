import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import View from './BaseView';

class HomeView extends Component {
  componentDidMount() {}

  render() {
    return (
      <View>
        <Container>
          <p>Home</p>
        </Container>
      </View>
    );
  }
}

export default HomeView;
