// File: /packages/my-first-theme/src/components/index.js

import React from "react"
import { connect } from "frontity"
import HeadInfo from "./head"
import Header from "./header"
import GlobalStyles from "./globalStyles"
import List from "./list"
import Switch from "@frontity/components/switch";
import Post from "./post"
import Page from "./page";
import ListFilme from "./list-filme";
import ListPopular from "./list-popular-movies";
import Film from "./filme";
import ListWatchlist from "./listWatchlist";
import Login from "./login";
import Loading from "./loading"
import Home from "./home"
import Error from "./error"
import Footer from "./footer"
import SearchResults from "./searching/search-results";
import ListPopularTvShows from "./list-popular-tv-shows";

const Root = ({ state }) => {
  const link = state.router.link
  const data = state.source.get(state.router.link)
  
  return (
    <>
      <HeadInfo />
      <GlobalStyles />
      <Header />
      <main className="container">
        <Switch> 
          {/*<Loading when ={data.Fetching} />*/}
          <Login when={data.isLogin} />
          <Home when={data.isHome} /> 
          {/* <SearchResults when={isSearch || data.isSearchUrl} /> */}
        
          <ListPopularTvShows when={data.isSerieArchive} />
          <ListPopular when={data.isPopularMoviesArchive} />
          <ListWatchlist when={data.isWatchlistArchive} />
          <List when={data.isArchive} />
          <Film when={data.isFilme || data.isSerie || data.isPopularMovies} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Error when={data.isError} />
        </Switch> 
        <Switch> 
        <Footer when={ link == "/" || link == "/watchlist/" || link == "/login/"}/>
        </Switch>
      </main>
      { /* link == "/popular_movies/" || "/serie/" ? null : <Footer /> */}
    
      
    </>
  )
}

export default connect(Root)

