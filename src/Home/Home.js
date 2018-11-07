import React, { Component } from 'react';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <div className="App">
              <header className="App-header">
                <div className='container pt-2'>
                  <AddTodo />
                  <VisibleTodoList />
                  <Footer />
                </div>
              </header>
            </div>
          )
        }
        {
          !isAuthenticated() && (

            <div className="alert alert-warning mt-3" role="alert">
              <p className="text-center pt-3" style={{ lineHeight: '1', fontSize: 'large' }} >
                <i className="fas fa-exclamation"></i>
                {' '}Oturum açmadınız. Uygulamayı görmek için lütfen {' '}
                <a
                  style={{ cursor: 'pointer', color: 'green', fontWeight: 'bold' }}
                  onClick={this.login.bind(this)}
                >
                  Oturum Aç
                </a>
                {''}ınız.
              </p>
            </div>
          )
        }
      </div>
    );
  }
}

export default Home;