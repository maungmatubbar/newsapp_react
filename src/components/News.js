import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general",
//   };
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0,
//     };
//     document.title = this.capitalize(this.props.category);
//   }
//   capitalize = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   };
//   async updateNews() {
//     this.props.setProgress(0);
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.props.setProgress(30);
//     await this.setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(70);
//     let parseData = await data.json();
//     await this.setState({
//       articles: parseData.articles,
//       totalResults: parseData.totalResults,
//       loading: false,
//       page: 2,
//     });
//     this.props.setProgress(100);
//   }
//   async componentDidMount() {
//     this.updateNews();
//   }
//   // handlePrevClick = async () => {
//   //   await this.setState({ page: this.state.page - 1 });
//   //   this.updateNews();
//   // };
//   // handleNextClick = async () => {
//   //   await this.setState({ page: this.state.page + 1 });
//   //   this.updateNews();
//   // };
//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     this.props.setProgress(0);
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     this.props.setProgress(70);
//     let parseData = await data.json();
//     console.log(parseData);
//     await this.setState({
//       articles: this.state.articles.concat(parseData.articles),
//       totalResults: parseData.totalResults,
//     });

//     this.props.setProgress(100);
//   };
//   render() {
//     return (
//       <>
//         <h1 className="text-center">Top {this.capitalize(this.props.category)} Headline</h1>
//         {this.state.loading && <Spinner />}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}
//         >
//           <div className="container">
//             <div className="row">
//               {
//                 /*this.state.loading &&*/ this.state.articles.map((element, index) => {
//                   return (
//                     <div className="col-md-4" key={(element, index)}>
//                       <NewsItems
//                         title={element.title ? element.title.slice(0, 40) : ""}
//                         description={element.description ? element.description : ""}
//                         imageUrl={element.urlToImage ? element.urlToImage : ""}
//                         url={element.url}
//                         author={element.author}
//                         source={element.source.name}
//                         date={element.publishedAt}
//                       />
//                     </div>
//                   );
//                 })
//               }
//             </div>
//           </div>
//         </InfiniteScroll>

//         {/* <div className="container d-flex justify-content-between py-3">
//           <button disabled={this.state.page<=1} onClick={this.handlePrevClick} className='btn btn-primary'>&larr; Previous</button>
//           <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} className='btn btn-primary' onClick={this.handleNextClick}>Next 	&rarr;</button>
//         </div>*/}
//       </>
//     );
//   }
// }
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(30);
    await setLoading(true);
    let data = await fetch(url);
    props.setProgress(70);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    setPage(2);
    props.setProgress(100);
    console.log(articles);
  };
  useEffect(() => {
    document.title = capitalize(props.category);
    updateNews();
  }, []);
  // async componentDidMount() {
  //   this.updateNews();
  // }
  // handlePrevClick = async () => {
  //   await this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };
  // handleNextClick = async () => {
  //   await this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };
  const fetchMoreData = async () => {
    setPage(page + 1);
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(70);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    props.setProgress(100);
  };
  return (
    <>
      <h1 className="text-center">Top {capitalize(props.category)} Headline</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {
              /*this.state.loading &&*/ articles.map((element, index) => {
                return (
                  <div className="col-md-4" key={(element, index)}>
                    <NewsItems
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={element.description ? element.description : ""}
                      imageUrl={element.urlToImage ? element.urlToImage : ""}
                      url={element.url}
                      author={element.author}
                      source={element.source.name}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })
            }
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between py-3">
          <button disabled={this.state.page<=1} onClick={this.handlePrevClick} className='btn btn-primary'>&larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} className='btn btn-primary' onClick={this.handleNextClick}>Next 	&rarr;</button>
        </div>*/}
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
