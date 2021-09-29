import React from "react"
import { connect, styled } from "frontity"
import Link from "./link"
import Logout from "./logout"
import Logo from "./logo"

const Header = ({ state }) => {
    const isCurrentLink = state.router.link;
    const username = typeof window !== 'undefined' ? sessionStorage.getItem("username") : null;

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
        <LogoLink className="brand" link="/"><Logo /> <span class="brand__claim">Watchfront</span></LogoLink>
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
              <MenuLink link="/popular_movies" aria-current={isCurrentLink === "/popular_movies/" ? "page" : undefined}>Filme</MenuLink>
              </li>
              <li className="nav-item">
              <MenuLink link="/serie" aria-current={isCurrentLink === "/serie/" ? "page" : undefined}>Serien</MenuLink>
              </li>
              <li className="nav-item">
              <MenuLink link="/watchlist" aria-current={isCurrentLink === "/watchlist/" ? "page" : undefined}>Watchlist</MenuLink>
              </li>
              <li className="nav-item">
              { username ==  null ? <MenuLink link="/login" aria-current={isCurrentLink === "/login/" ? "page" : undefined}>Anmelden</MenuLink> : null } 
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

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  .brand__logo {
      display: block;
      width: 82px;
      height: 82px;
      position: relative;
      
      img {
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: auto;
      }
    }
    
    .brand__claim {
      padding-left: 1rem;		
      text-decoration: none;
      font-size: 20px;
      font-weight: 600;
      color: steelblue
    }
`;