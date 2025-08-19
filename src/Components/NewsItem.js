import React from 'react'
import "./Newsitem.css";
const NewsItem =(props)=>{


  
    let { title, description, newsUrl, author, date, source } = props;
    return (
     <div className="card-container">
  <div className="card">
    <span className="badge">{source}</span>

    {/* <img
      src={
        !imageUrl
          ? "https://image.cnbcfm.com/api/v1/image/108146251-174733164404-gettyimages-2214616600-AFP_46VQ37P.jpeg?v=1747331669&w=1920&h=1080"
          : imageUrl
      }
      className="card-img"
      alt="news"
    /> */}

    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <p className="card-footer">
        <small>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small>
      </p>
      <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn">
        Read More
      </a>
    </div>
  </div>
</div>
    )
  }


export default NewsItem
