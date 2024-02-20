import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, date, author, source } = this.props;
    return (
      <div>  
        <div className="card">
          <img src={!imgUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg":imgUrl} className="card-img-top" alt="..." />
          <span className="position-absolute top-0 end-0 translate-middle badge bg-danger" style={{color:'white', transform: 'translate(8%, -50%)' }}>{source}</span>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-info">by {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
