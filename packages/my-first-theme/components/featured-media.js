import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedMedia = ({ state, id }) => {
  const data = state.source.get(state.router.link)
  const filme = state.source[data.type][data.id];
  

  return (
    <Container>
      <StyledImage
    
        src={"https://image.tmdb.org/t/p/w300" + filme.poster}
      />
    </Container>
  );
};

export default connect(FeaturedMedia);

const Container = styled.div`
  margin-top: 16px;
  height: 300px;
`;

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
