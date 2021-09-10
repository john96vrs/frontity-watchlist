import { connect, styled } from "frontity";
import SearchForm from "./search-form";
import React, { useEffect } from "react"

const reverseFormat = (query) => query.replace("+", " ");

const SearchResults = ({ actions, state }) => {
  
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  // data.total → total pages that match the current path/url
  // data.searchQuery → query done to get search results
  const { total, searchQuery } = data;
  const isEmpty = data.total === 0;

  useEffect(async () => {
    actions.source.fetch(state.router.link, { force: true });
    
  })

  return (
    <>
        <span>{`“${reverseFormat(searchQuery)}”`}</span>
        <IntroText size="thin">
          {isEmpty ? (
            <Text>
              We could not find any results for your search. You can give it
              another try through the search form below.
            </Text>
          ) : (
            <Text>
              We found {total} {total === 1 ? "result" : "results"} for your
              search.
            </Text>
          )}
        </IntroText>
      

      {isEmpty ? (
        <SearchContainer size="thin">
          <SearchForm />
        </SearchContainer>
      ) : (
        <div>
          {data.items.map((item) => {
            return (
              <div key={item.id}>
                {item.type} – {item.id} – {item.link}
              </div>
            )
          })}
        </div>
      )}
    </>
  );
};

export default connect(SearchResults);

const IntroText = styled.div`
  width: 100%;
  margin-top: 2rem;
  font-weight: initial;

  @media (min-width: 700px) {
    font-size: 2rem;
    margin-top: 2.5rem;
  }
`;

const Text = styled.p`
  margin: 0 0 1em 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SearchContainer = styled.div`
  padding-top: 5rem;
  @media (min-width: 700px) {
    padding-top: 6rem;
  }
`;
