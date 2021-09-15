import { connect, styled } from "frontity";
import { useRef } from "react";

const SearchForm = ({ state, actions, libraries }) => {
  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];
  
  const { closeSearchModal } = actions.theme;
  // Keep a reference to the input so we can grab it's value on form submission
  const inputRef = useRef();

  const handleSubmit = (event) => {
    // Prevent page navigation
    event.preventDefault();

    // Get the input's value
    const searchString = inputRef.current.value;

    // If the typed search string is no t empty
    // Better to trim write spaces as well
    if (searchString.trim().length > 0) {
      // Let's go search for blogs t-phat match the search string
      actions.router.set(`/popular_movies/${searchString.toLowerCase()}`);
      //actions.router.set(`multiple-post-type?search=${searchString.toLowerCase()}`);
      // Scroll the page to the top
      window.scrollTo(0, 0);

      // Close the search modal
      closeSearchModal();
    }
  };

  return (
    <Form class="form-inline my-2 my-lg-0" role="search" aria-label="404 not found" onSubmit={handleSubmit}>
      <Label>
        <SearchInput
          type="search"
          defaultValue={searchQuery}
          placeholder="Search ..."
          ref={inputRef}
        />
     
      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
        Search
      </button>
      </Label>
    </Form>
  );
};

export default connect(SearchForm);

const Form = styled.form`
  align-items: stretch;
  display: flex;
  flex-wrap: nowrap;
  margin: 0 0 -0.8rem -0.8rem;
  justify-content: center;
  margin-top: 3rem;
`;

const Label = styled.label`
  align-items: stretch;
  display: flex;
  font-size: inherit;
  width: 100%;
`;

const SearchInput = styled.input`
   
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem 2rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;


