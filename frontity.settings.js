const settings = {
  "name": "react-wordpress-project",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "my-first-theme",
      "state": {
        "theme": {
        "featured": {
          "showOnList": true,
          "showOnPost": true
        },
        
      }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        
        "source": {
          
          "url": "http://wordpress.vrs/" ,
          "params": {
            "per_page": 100
          },
          
           "postTypes":[
            	{
              type: "filme",
              endpoint: "filme",
              archive: "/filme"
             },
             {
              type: "post",
              endpoint: "posts",
              archive: "/posts"
             },
             {
              type: "watchlist",
              endpoint: "watchlist",
              archive: "/watchlist"
             },
             {
              type: "filmreview",
              endpoint: "filmreview",
              archive: "/reviews"
             },
             {
              type: "multiple-post-type",
              endpoint: "multiple-post-type",
              archive: "/multiple-post-type"
             },
             {
              type: "serie",
              endpoint: "serie",
              archive: "/serie"
             },
             {
              type: "popular_movies",
              endpoint: "popular_movies",
              archive: "/popular_movies"
              
             },
          ] 
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
