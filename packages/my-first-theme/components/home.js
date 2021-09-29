// File: /packages/my-first-theme/src/components/list.js

import React, { useEffect } from "react"
import { connect, styled } from "frontity"
import ListFilme from "./list-filme";
import ListSerie from "./list-serie";
import Switch from "@frontity/components/switch";

const Home = ({ state, actions }) => {
  useEffect(async () => {
    actions.source.fetch("/home", { force: true });
    actions.source.fetch("/filme", { force: true });
    actions.source.fetch("/posts", { force: true });
    actions.source.fetch("/serie", { force: true });
  }) 

  const data = state.source.get("/filme"); 
  const serie = state.source.get("/serie")
  const username = typeof window !== 'undefined' ? sessionStorage.getItem("username") : null;

  return (
    <Container>
      <div>
        <div>
          <Welcome>Willkommen {username}</Welcome>
          <Title>Filme im Trend</Title>
        </div>
        <Switch> 
          <ListFilme when={data.isFilmeArchive} />
        </Switch>  
        <Title>Serien im Trend</Title>
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

const Title = styled.h2`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const Welcome = styled.h1`
  font-weight: 600;
  color: #ffc107;
`;

export default connect(Home)