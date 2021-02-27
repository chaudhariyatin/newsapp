import React from "react";
import moment from "moment";
import "./NewsCard.css";

const NewsCard = ({ news }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener, noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="news-card" onClick={() => openInNewTab(news.url)}>
      <img
        alt={news.title}
        src={
          news.urlToImage
            ? news.urlToImage
            : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
        }
        className="card-image"
      />
      <div className="news-text">
        <div>
          <span className="title">
            {news.title} {"   "}
          </span>
          <br />
          <span className="author">
            <a
              href={news.url}
              className="source"
              target="_blank"
              rel="noreferrer"
            >
              <b>short </b>
            </a>
            <span className="muted">
              by {news.author ? news.author : "unknown"}{" "}
            </span>
            <span className="muted">
              / {moment(news.publishedAt).format("LT")} on{" "}
              {moment(news.publishedAt).format("LL")},
              {moment(news.publishedAt).format("dddd")}
            </span>
          </span>
        </div>
        <div className="lower-news">
          <div className="description">{news.description}</div>
          <span className="readmore">
            read more at{" "}
            <a
              href={news.url}
              className="source"
              target="_blank"
              rel="noreferrer"
            >
              <b>{news.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
