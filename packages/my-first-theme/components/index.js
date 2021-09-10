// File: /packages/my-first-theme/src/components/index.js

import React from "react"
import { connect, Global, css, styled, Head  } from "frontity"
import Link from "@frontity/components/link"
import List from "./list"
import Switch from "@frontity/components/switch";
import Post from "./post"
import Page from "./page";
import ListFilme from "./list-filme";
import ListSerie from "./list-serie";
import ListPopular from "./list-popular";
import Film from "./filme";
import ListWatchlist from "./listWatchlist";
import Login from "./login";
import Loading from "./loading"
import Logout from "./logout"
import Home from "./home"
import Error from "./error"
import Footer from "./footer"
import SearchResults from "./searching/search-results";
import SearchForm from "./searching/search-form";

const Root = ({ state, libraries, actions }) => {
  const data = state.source.get(state.router.link)
  // Get the html2react component.
  const parse = libraries.source.parse(state.router.link);
  // Check if the url is a search type
  const isSearch = Boolean(parse.query["s"]);
  const username = typeof window !== 'undefined' ? sessionStorage.getItem("username") : null;

  return (
    <>
    
    <Head>
      <meta name="description" content={state.frontity.description} />
      <html lang="en" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
    </Head>
      <Global
        styles={css`
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            
          },
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
          nav {
            padding: 2rem;
            background: #F5F8FA;
          }
          nav ul li{
            display: inline;
            padding-right:2rem;
            list-style-type: none;
            text-decoration: none;
          }

          nav ul li a{
            color: steelblue;
            text-decoration: none;
            font-size: 1.5rem
          }

          a{ text-decoration: none !important }

          .navbar-brand {
            color: #145A95 !important;
            font-weight: 600;
            font-size: 3rem
          }
        `}
      />
      
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <Link className="navbar-brand" link="/">Frontity Watchlist</Link>
            <SearchForm />
              <ul className="nav">
                <li className="nav-item">
                 <Link link="/popular_movies">Movies</Link>
                </li>
                <li className="nav-item">
                 <Link link="/serie">TV shows</Link>
                </li>
                <li className="nav-item">
                  <Link link="/posts">News</Link>
                </li>
                <li className="nav-item">
                 <Link link="/watchlist">My watchlist</Link>
                </li>
                <li className="nav-item">
                { username ==  null ? <Link link="/login">Login</Link> : null } 
                </li>
                <li className="nav-item">
                 <Logout />
                </li>
              </ul>
            </div>
          </nav>
      <main>
      
        <Switch> 
        
          <Loading when ={data.Fetching} />
          <Login when={data.isLogin} />
          <Home when={data.isHome} /> 
          <SearchResults when={isSearch || data.isSearchUrl} />
          <ListFilme when={data.isFilmeArchive} />
          <ListSerie when={data.isSerieArchive} />
          <ListPopular when={data.isPopularMoviesArchive} />
          <ListWatchlist when={data.isWatchlistArchive} />
          <List when={data.isArchive} />
          <Film when={data.isFilme || data.isSerie || data.isPopularMovies} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Error when={data.isError} />
        
        </Switch>

      </main>
      <Footer />
    </>
  )
}

export default connect(Root)

const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  background: #ffff;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: blue;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`