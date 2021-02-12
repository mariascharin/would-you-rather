import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from "./Logout";


export default function Nav (authedUser) {
  return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
          <li>
            {authedUser === null || authedUser === '' || !authedUser ? null : <Logout /> }
          </li>
        </ul>
      </nav>
  )
}
