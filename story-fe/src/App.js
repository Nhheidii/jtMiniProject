import { useEffect, useState } from "react";
import StoryList from "../../story-fe/src/component/StoryList.jsx"

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://sturdy-meme-4jp7gjxqqqwwh7p9-8080.app.github.dev/stories")
      .then(res => res.json())
      .then(data => setStories(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <StoryList stories={stories} />
  );
}

export default App;
