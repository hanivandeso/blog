import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }]; //make array and put into it
    default:
      return state;
  }
};

const addBlogPost = () => {
  dispatch({ type: "add_blogpost" });
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
