import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loader from './Loader';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
// import LoadingBar from 'react-top-loading-bar'




export class News extends Component {
    static defaultProps = {
        country:'in',
        pageSize:6,
        category:'general',
    }
    static propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }
    constructor(props){
        super(props);
        this.state = {
            articles : [],
            loading:true,
            page:1,
            totalResults:0
        }
        document.title = `NewsWave - ${this.capitalizeFirstLetter(this.props.category)}`
    }

    async componentDidMount(){
        this.updateNews();
    }
    async updateNews(){
        this.props.setProgress(10);
        
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
        this.setState({loading:true});
        let data= await fetch(url)
        let parsedData =await data.json()
        // console.log(parsedData)
        this.setState({articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
             loading:false})
             this.props.setProgress(100)

             
    }
    // handlePrevClick = async () =>{
    //     console.log("previous");
    //     this.setState({page:this.state.page-1})
    //     this.updateNews();
    // }
    // handleNextClick = async () =>{
    //        console.log("next");
    // this.setState({page:this.state.page+1})
    // this.updateNews();
        
    // }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    fetchMoreData = async () => {
        this.setState(
          (prevState) => ({
            // loading: true,
            page: prevState.page + 1,
          }),
          async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            // console.log(parsedData);
            this.setState((prevState) => ({
              articles: prevState.articles.concat(parsedData.articles),
              totalResults: parsedData.totalResults,
              loading: false,
            }));
          }
        );
      };
      


  render() {
    return (
      <div>
        
        
        <h2 className='text-center' style={{margin:'30px', marginTop:'90px'}} ><strong>NewsWave</strong> - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Loader/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loader/>}>
            <div className="continer mx-3">
        <div className="row" >
        {this.state.articles.map((element)=>{
            return(
            <div className="col-md-4" key={element.url}>
            <div className="my-2">
             <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} author={!element.author?"Unknown Author":element.author} date={element.publishedAt} source={element.source.name} />
            </div>
        </div>
        
        )})}
        </div>
        </div>
        </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </div>
    )
  }
}

export default News
