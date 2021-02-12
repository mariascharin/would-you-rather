import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dropdown } from 'react-bootstrap';
import { unsetAuthedUser } from '../actions/authedUser';
import { withRouter } from "react-router-dom";


class Logout extends Component {

  render() {
    const { dispatch, authedUser, users } = this.props;
    const  { name, id, avatarURL } = users[authedUser];

    const logOutUser = (evt) => {
      evt.preventDefault();
      dispatch(unsetAuthedUser());
      this.props.history.push('/');
    }

    return (
      <div>
        {authedUser &&
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {<img
                src={avatarURL}
                alt={`Avatar of ${name}`}
                className='avatar'
            />}
            {name}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item key={id} onClick={e => logOutUser(e)}>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>}
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default withRouter(connect(mapStateToProps)(Logout))
