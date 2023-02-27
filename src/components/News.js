import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export class News extends Component {
  constructor()
  {
    super();
    this.state = {
      articles : [],
      loading: false,
      page: 1,
    }
    
      
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2a741f830f404a0aad1c07f17710076d&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData)
    this.setState({
      articles : parseData.articles,
      totalResults:parseData.totalResults,
      loading: false
    })
  }
  handlePrevClick = async () =>{
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2a741f830f404a0aad1c07f17710076d&page=${this.state.page - 1 }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({
      articles : parseData.articles,
      page: this.state.page - 1,
      status: parseData.status,
      loading: false
    })
  }
  handleNextClick = async () =>{
    //if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){}else{}
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2a741f830f404a0aad1c07f17710076d&page=${this.state.page + 1 }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url)
    let parseData = await data.json()
    if(parseData.status==='error')
    {
      this.setState({
        status:  parseData.status
      })
    }
    else
    {
      this.setState({
        articles : parseData.articles,
        page: this.state.page + 1,
        loading: false
      })
    }
   
  }
  render() {
    return (
      <div className='container py-2'>
        <div className="row">
          <h1 className='text-center'>Top News Headline</h1>
          {this.state.loading && <Spinner/>}
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title?element.title.slice(0,40):''} description={element.description?element.description:''} imageUrl={element.urlToImage?element.urlToImage:''} url={element.url} />
              </div>
            })}
        </div>
        <div className="container d-flex justify-content-between py-3">
          <button disabled={this.state.page<=1} onClick={this.handlePrevClick} className='btn btn-primary'>&larr; Previous</button>
          <button disabled={this.state.status==='error'} className='btn btn-primary' onClick={this.handleNextClick}>Next 	&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
