import React from "react";
import { Container } from "@material-ui/core";
import NewsCard from "../newscard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({
  newsArray,
  newsResults,
  loadMore,
  setLoadMore,
  category,
}) => {
  const uppercaseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Container maxWidth="md" style={{ paddingTop: "1rem" }}>
      <span className="head-title text-muted">
        News/{uppercaseFirstLetter(category)}
      </span>
      <div className="content">
        {newsArray.map((news) => (
          <NewsCard key={news.title} news={news} />
        ))}
        {loadMore <= newsResults && (
          <React.Fragment>
            <hr />
            <button
              className="load-more"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </React.Fragment>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
