import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import NewsContent from "./components/newsContent/NewsContent";
import BackToTop from "./components/scroll/BackToTop";
import Spinner from "./components/ui/Spinner";
import Fab from "@material-ui/core/Fab";
import { KeyboardArrowUp } from "@material-ui/icons";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (loadMore === 20) {
      setNewsArray([]);
    }
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, loadMore]);

  let displayContent = <Spinner />;
  if (newsArray.length !== 0) {
    displayContent = (
      <NewsContent
        newsArray={newsArray}
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
        category={category}
      />
    );
  }

  return (
    <div className="">
      <Navbar setCategory={setCategory} />
      {displayContent}
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
      <Footer />
    </div>
  );
}

export default App;
