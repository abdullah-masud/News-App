import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  // constructor
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4e7604820ba748d8917f30940b2315a3";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h1>Daily News</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 col-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 65) : ""}
                  description={
                    element.description ? element.description.slice(0, 65) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://image.cnbcfm.com/api/v1/image/106922527-1628177099813-Weber-OB-210805-PRESS-11.jpg?v=1628177178"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
