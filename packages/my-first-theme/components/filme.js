import React from "react";
import { connect, styled } from "frontity";
import Add from "./add";
import Image from "@frontity/components/image";
import Notification from './notification';

const Filme = ({ state, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const filme = state.source[data.type][data.id];
  const { poster } = filme

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  
  // Load the post, but only if the data is ready.
  return data.isReady ? (

    <Container type={data.type}>
      <div className="row">
        <div className="col-md-4 mx-md-5 px-0">
          {/* Look at the settings to see if we should include the featured image */}
            <StyledImage src={"https://image.tmdb.org/t/p/w400" + poster}/>
        </div>
        <div className="col-md-6">
          <Title dangerouslySetInnerHTML={{ __html: filme.filmtitle}} />
          <p>{"voting count: " +filme.vote}</p>
          <p>{"average voting rate: "+ filme.votinrate}</p>
          <p>{"Startdatum: "+filme.release}</p>
      
        {/* Render the content using the Html2React component so the HTML is processed
        by the processors we included in the libraries.html2react.processors array. */}
        <Content>
          <Title>story</Title>
          <p><Html2React html={filme.overview} /> </p>
        </Content>
        <Add />
      </div>
     </div>
     <Notification />
    </Container>

  ) : null;
};

export default connect(Filme);

const StyledImage = styled(Image)`
  display: block;
  max-width: 100%;  
  height: auto;
`;

const Container = styled.div`
  max-width: 1200px;
  margin-top: 2rem;
`;

  const Title = styled.h1`
    margin: 0;
    margin-bottom: 8px;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
 const Content = styled.div`
  @media screen and (max-width: 600px) {
    img {
      float: left
    }
  }
 
`;

