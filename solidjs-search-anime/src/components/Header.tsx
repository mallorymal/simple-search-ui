import { NavLink } from '@solidjs/router';
import { Component } from 'solid-js';

export const Header: Component = () => {
  return (
    <header>
      <nav class='navbar navbar-expand-lg bg-light'>
        <div class='container-fluid'>
          <div class='navbar-brand'>SolidJS</div>
          <div class='navbar-nav'>
            <NavLink class='nav-link' href='/home'>
              Home
            </NavLink>
            <NavLink class='nav-link' href='/about'>
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
