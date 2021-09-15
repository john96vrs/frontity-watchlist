// File: /packages/my-first-theme/src/components/list-filme/list.js

import React from "react"
import { connect, styled } from "frontity"
import Item from "./list-item"

const List = ({ state }) => {
  const data = state.source.get("/filme")

  return ( 
      <Container>
        {data.items.slice(0, 6).map(({type, id}) => {
            const item = state.source[type][id];
            const {rating ,filmtitle, date, content: { rendered: contentRendered }} = item
            
            return (
              <div className="col-6 col-md-3 col-lg-2 px-0">
                <div className="card">
                    <Item 
                        link={item.link}
                        key={item.id}
                        title={filmtitle}
                        poster={item.poster}
                        content={contentRendered}
                        date={date}
                        rating={rating}
                    />
                </div>
              </div>
            );
        })} 
    </Container>
  )
}

export default connect(List)

const Container = styled.section`

  margin:  0 auto;
  
  list-style: none;
  
  display:flex;
  
  flex-direction:row;
  flex-wrap: wrap 
`;
