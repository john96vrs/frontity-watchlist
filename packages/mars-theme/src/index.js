const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\mars-theme\src\index.js</pre>
    </>
  );
};

export default {
  name: "mars-theme",
  roots: {
    marsTheme: Root
  },
  state: {
    marsTheme: {}
  },
  actions: {
    marsTheme: {}
  }
};
