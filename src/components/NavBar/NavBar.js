import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';


class NavBar extends React.Component {
  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <div className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand" href="#"></span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
            <form className="form-inline my-2 my-lg-0">
            { authed ? (
              <button className="btn btn-danger my-2 my-sm-0" onClick={this.logMeOut}>Logout</button>
            ) : (
              ''
            )}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
