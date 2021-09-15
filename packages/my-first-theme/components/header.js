import React from "react"
import { connect, styled } from "frontity"
import Link from "./link"
import Logout from "./logout"

const Header = ({ state }) => {
    const isCurrentLink = state.router.link;
    const username = typeof window !== 'undefined' ? sessionStorage.getItem("username") : null;

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
        <Link className="navbar-brand" link="/">Watchfront</Link>
        <button type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav"
          class="navbar-toggler" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        { /*<p>Current URL: {state.router.link}</p> */}
        {/*<div>{ link === "/popular_movies/" ? <SearchForm /> : null } </div>*/}
        {/*  {state.theme.menu.map(([name, link]) => {
            var isCurrentLink = state.router.link === link;
          })} */}
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="mr-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
              <MenuLink link="/popular_movies" aria-current={isCurrentLink === "/popular_movies/" ? "page" : undefined}>Movies</MenuLink>
              </li>
              <li className="nav-item">
              <MenuLink link="/serie" aria-current={isCurrentLink === "/serie/" ? "page" : undefined}>TV shows</MenuLink>
              </li>
              <li className="nav-item">
              <MenuLink link="/watchlist" aria-current={isCurrentLink === "/watchlist/" ? "page" : undefined}>My watchlist</MenuLink>
              </li>
              <li className="nav-item">
              { username ==  null ? <MenuLink link="/login" aria-current={isCurrentLink === "/login/" ? "page" : undefined}>Login</MenuLink> : null } 
              </li>
              <li className="nav-item">
              <Logout />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}


export default connect(Header)

const MenuLink = styled(Link)`
  display: block;
  text-decoration: none;
  &[aria-current="page"] {
    text-decoration: underline steelblue !important; 
  }
`;