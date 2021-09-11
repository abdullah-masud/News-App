import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="my-3">Daily News</h2>
        <div className="row">
          <div className="col-md-4 col-4">
            <NewsItem title="My Title" description="My Description" />
          </div>
          <div className="col-md-4 col-4">
            <NewsItem title="My Title" description="My Description" />
          </div>
          <div className="col-md-4 col-4">
            <NewsItem title="My Title" description="My Description" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
