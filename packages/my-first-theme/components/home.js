// File: /packages/my-first-theme/src/components/list.js

import React, { useEffect } from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import ListFilme from "./list-filme";
import ListSerie from "./list-serie";
import Switch from "@frontity/components/switch";
import List from "./list"

const Home = ({ state, libraries, actions }) => {
  const data = state.source.get("/filme"); 
  const post = state.source.get("/posts")
  const serie = state.source.get("/serie")

  useEffect(async () => {
    actions.source.fetch("/home", { force: true });
    actions.source.fetch("/filme", { force: true });
    actions.source.fetch("/posts", { force: true });
    actions.source.fetch("/serie", { force: true });
  })
  
  const Html2React = libraries.html2react.Component;
    
  return (
    <Container>
      <div>
        <div>
          <h1>Willkommen</h1>
          <h2> Movie Trends this week </h2>
        </div>
        <Switch> 
          <ListFilme when={data.isFilmeArchive} />
        </Switch>  
        <h2> TV Shows Trends this week</h2>
        <Switch> 
          <ListSerie when={serie.isSerieArchive} />
        </Switch> 
      </div>
    </Container>
  )
}

const Container = styled.section`
  padding: 24px;
  list-style: none;
  
`;

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

export default connect(Home)