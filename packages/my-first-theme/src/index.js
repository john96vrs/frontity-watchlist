// File: /packages/my-first-theme/src/index.js

import Root from "../components/"
import link from "@frontity/html2react/processors/link";
import 'bootstrap/dist/css/bootstrap.css'

const loginHandler = {
  pattern: "/login/",
  func: ({ state }) => {
    state.source.data["/login/"].isLogin = true;
  }
}

const homeHandler = {
  pattern: "/home/",
  func: ({ state, params }) => {
    state.source.data["/home/"].isHome = true;
    
  },
}

const searchUrls = {
  pattern: "/multiple-post-type",
  func: async ({ link, params, state, libraries, force }) => {
    const response = await libraries.source.api.get({
      endpoint: "multiple-post-type",
      params: { search: params.search, type : 'popular_movies',}
    });

    const items = await libraries.source.populate({
      response,
      state,
      force,
    });    
    
    Object.assign(state.source.data[link], {
      isSearchUrl: true,
      //add queried posts to data
      items,
    });

  }
}

const myFirstTheme = {
  name: "my-first-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: { 
      isSearchModalOpen: false,
      isMobileMenuOpen: false,
      autoPreFetch: "all"
    },
  },
  actions: {
    theme: {
      afterCSR: async ({ state, actions }) => {
        setInterval(() => {
          actions.source.fetch(state.router.link, { force: true });
        }, 5000);
      }, 
     
      beforeSSR: async ({state, actions}) => { 
          await actions.source.fetch(state.router.link, { force: true });
      },

      init: ({ libraries }) => {
        libraries.source.handlers.push(loginHandler);
        libraries.source.handlers.push(homeHandler);
        libraries.source.handlers.push(searchUrls);
      },

      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      
      openSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = true;
      },
      
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false;
      }
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}

export default myFirstTheme