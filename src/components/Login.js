import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dropdown } from 'react-bootstrap';
import { setAuthedUser } from '../actions/authedUser';
import { withRouter } from "react-router-dom";

class Login extends Component {
  render() {
    const {dispatch, users} = this.props;
    const chooseUser = (userId, e) => {
      e.preventDefault();
      dispatch(setAuthedUser(userId));
    }
    return (
        <div className='login'>
          <div>
            <h3>Welcome to</h3>
            <h2>Would you Rather</h2>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Log in
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {
                  users.map((u) => {
                    return <Dropdown.Item key={u.id} onClick={e => chooseUser(u.id, e)}>
                      {<img
                          src={u.avatarURL}
                          alt={`Avatar of ${u.name}`}
                          className='avatar'
                      />}
                      {u.name}
                    </Dropdown.Item>
                  })
                }
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  }
}

export default withRouter(connect(mapStateToProps)(Login))
