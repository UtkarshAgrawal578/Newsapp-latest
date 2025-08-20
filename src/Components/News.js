import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  // ✅ Default props
  News.defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
  };

  // ✅ Fetch news (calls backend API instead of NewsAPI directly)
  const updateNews = async () => {
    props.setProgress(10);
 //https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}
 //https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=india&max=10&apikey=4477316f6b41523935f2f40821a380e1&page=${page}&pageSize=${props.pageSize}
    try {
      const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=india&max=10&apikey=4477316f6b41523935f2f40821a380e1&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);

      let data = await fetch(url);
      props.setProgress(40);

      let parsedData = await data.json();
      props.setProgress(70);

      setArticles(parsedData.articles || []);
      setTotalResults(parsedData.totalResults || 0);

      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
      props.setProgress(100);
    }
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [props.category]);

  // ✅ Infinite Scroll handler
  // const fetchMoreData = async () => {
  //   try {
  //     const nextPage = page + 1;
  //     const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=india&max=10&apikey=4477316f6b41523935f2f40821a380e1&page=${page}&pageSize=${props.pageSize}`;
      
  //     let data = await fetch(url);
  //     let parsedData = await data.json();

  //     setArticles(articles.concat(parsedData.articles || []));
  //     setTotalResults(parsedData.totalResults || 0);
  //     setPage(nextPage);
  //   } catch (error) {
  //     console.error("Error fetching more news:", error);
  //   }
  // };

  return (
    <>
      <h1
        className="text-danger"
        style={{ marginTop: "6rem", marginBottom: "2rem" }}
      >
        <u>
          <center>
            NewsHub - Top {props.category.toUpperCase()} Headlines
          </center>
        </u>
      </h1>

      {loading && <Spinner />}
       <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-12 col-md-4 my-2" key={element.url}>
                <NewsItem
                  title={element.title || ""}
                  description={element.description.slice(0,201)}
                   imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source?.name?.slice(0, 17)}
                />
              </div>
            ))}
          </div>
        </div>
      {/* <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={articles.length !== totalResults ? <Spinner /> : null}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-12 col-md-4 my-2" key={element.url}>
                <NewsItem
                  title={element.title || ""}
                  description={element.description.slice(0,201)}
                   imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source?.name?.slice(0, 17)}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll> */}
    </>
  );
};

export default News;
