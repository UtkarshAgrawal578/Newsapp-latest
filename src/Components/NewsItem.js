import React from 'react'

const NewsItem =(props)=>{


  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <span className="position-relative top-0  translate-middle badge rounded-pill bg-danger w-50" style={{left:"70%",zIndex:1}}>
              {source}
              
            </span>
          <img src={!imageUrl ? "https://image.cnbcfm.com/api/v1/image/108146251-174733164404-gettyimages-2214616600-AFP_46VQ37P.jpeg?v=1747331669&w=1920&h=1080" : imageUrl} className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem
