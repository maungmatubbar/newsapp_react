import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  constructor()
  {
    super();
    this.state = {
      articles : [],
      loading: false
    }
      
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2a741f830f404a0aad1c07f17710076d";
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData)
    this.setState({articles : parseData.articles})

  }
  render() {
    return (
      <div className='container py-2'>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title?element.title.slice(0,40):''} description={element.description?element.description:''} imageUrl={element.urlToImage?element.urlToImage:''} url={element.url} />
              </div>
            })}
        </div>
      </div>
    )
  }
}

export default News
