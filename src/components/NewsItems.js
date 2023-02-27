import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,description,imageUrl,url} = this.props
    return (
      <div>
          <div className="card my-2">
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
          </div>
         
      </div>
    )
  }
}

export default NewsItems
