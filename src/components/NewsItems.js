//import React, { Component } from "react";
import React from "react";
//Function Class Component
/*export class NewsItems extends Component {
  render() {
    let {title,description,imageUrl,url,author,date,source} = this.props
    return (
      <div>
          <div className="card my-2">
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-secondary z-1">{!source?"Unknown":source}</span>
          {this.props.imageUrl?<img src={imageUrl} alt="" className='card-img-top' height="200px"/>:''}
            <div className="card-header">
              <h4 className='card-titile'>{title}</h4>
            </div>
            <div className="card-body">
              <div className="card-description">
                {description}
              </div>
              <a href={url} target="_blank" rel="noreferrer" className='btn btn-primary'>Go to somewhere</a>
            </div>
            <div className="card-footer">
              <p>By {!author?"Unknown":author} on {new Date(date).toLocaleString()}</p>
            </div>
          </div>
         
      </div>
    )
  }
}*/
//Function Based Component
function NewsItems(props) {
  let { title, description, imageUrl, url, author, date, source } = props;
  return (
    <div>
      <div className="card my-2">
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-secondary z-1">
          {!source ? "Unknown" : source}
        </span>
        {props.imageUrl ? <img src={imageUrl} alt="" className="card-img-top" height="200px" /> : ""}
        <div className="card-header">
          <h4 className="card-titile">{title}</h4>
        </div>
        <div className="card-body">
          <div className="card-description">{description}</div>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">
            Go to somewhere
          </a>
        </div>
        <div className="card-footer">
          <p>
            By {!author ? "Unknown" : author} on {new Date(date).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsItems;
