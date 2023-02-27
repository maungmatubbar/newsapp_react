import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize: 9,
    category: 'general'
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c03717bd088a4649bc61ad82e4518375&page=1&pageSize=${this.props.pageSize}`;
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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c03717bd088a4649bc61ad82e4518375&page=${this.state.page - 1 }&pageSize=${this.props.pageSize}`;
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
    if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c03717bd088a4649bc61ad82e4518375&page=${this.state.page + 1 }&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url)
      let parseData = await data.json()
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
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} className='btn btn-primary' onClick={this.handleNextClick}>Next 	&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
