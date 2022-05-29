import './App.css';
import {useState, useEffect} from "react";

const blogQuery = `
{
  blogPostCollection {
    items {
      title
      author
      postDate
      article {json}
    }
  }
}
`

function App() {
  // define the initial state
  const [page, setPage] = useState(null);

  // show a loading screen case the data hasn't arrived yet
  if (!page) {
    return "Loading...";
  }

  // return statement and JSX template.
  // ...

  return (
    <h1>
      Homepage
    </h1>
  );
}

export default App;
