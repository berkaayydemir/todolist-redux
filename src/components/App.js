import React, { Component } from 'react'
import { Button, Navbar } from 'react-bootstrap';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <div className="container">
          <Navbar className ='text-center mt-3' fluid>
            <Navbar.Header>
              <Navbar.Brand>
                <a style={{ color: 'white', fontSize:'small' }} href="home">TodoApp - Berkay Aydemir</a>
              </Navbar.Brand>
              <Button
                bsStyle="info"
                className="btn-margin mr-1"
                onClick={this.goTo.bind(this, 'home')}
              >
                Ana Sayfa
            </Button>
              {
                !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="success"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Giriş Yap
                  </Button>
                )
              }
              {
                isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="danger"
                    className="btn-margin"
                    onClick={this.logout.bind(this, 'home')}
                  >
                    Çıkış Yap
                  </Button>
                )
              }
            </Navbar.Header>
          </Navbar>
        </div>
      </div>
    );
  }
}


export default App
