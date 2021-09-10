// File: /packages/my-first-theme/src/components/list.js

import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const List = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
    // Get the html2react component.
    const Html2React = libraries.html2react.Component;
    
  return (
    <Container>
      <Html2React html={data} />
    <div className="row">
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        
        return (
           <div className="col-md-6 text-center" key={item.id}> 
            <Link link={post.link}>
              <Title>
                {post.title.rendered}
              </Title>
              <br />
            </Link>
            <Html2React html={post.excerpt.rendered} />
           <hr/>
          </div>
        )
      })}
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

export default connect(List)