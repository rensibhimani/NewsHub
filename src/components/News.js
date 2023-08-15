import React, { Component } from 'react'
import Item from './Item'
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
   
    static defaultProps = {
      country: 'in',
      pageSize: 5,
      category: 'sport',
    }
    static propTypes = {
      country : PropTypes.string,
      pageSize : PropTypes.number,  
      category : PropTypes.string,
    }
    constructor(){
        super();
        console.log("Hello I am constructor from this component");
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
      console.log("cmd");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df72c291a78a4eac9b948796bc3008ef&page=1&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
    }
     handlePreClick = async()=>{
      console.log("Previous");

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df72c291a78a4eac9b948796bc3008ef&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles})

      this.setState({
        page: this.state.page - 1,

      })
    }
     handleNextClick = async() =>{
      console.log("Next");
      if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

      }
      else{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df72c291a78a4eac9b948796bc3008ef&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
  
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
  
        })
      }
    }
  render() {
    return (

      <div>
        <div className="my-2" >
          <h2 className="text-center my-2">News - Top headlines </h2>
          <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-2" key={element.url}>
              <Item title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url}
              author={element.author} date={element.publishedAt} source={element.source.name} />                            
              {/* <Item title={element.title.slice(0, 18)} description={element.description.slice(0, 66)} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
            </div>
           
          })}
            <div className="container">
            <button disabled={this.state.page <= 1 } type="button" className="btn btn-dark" onClick={this.handlePreClick}> &larr; Pervious</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default News


// import React, {useEffect, useState} from 'react'

// import Item from './Item'
// // import Spinner from './spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props)=>{
//     const [articles, setArticles] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [page, setPage] = useState(1)
//     const [totalResults, setTotalResults] = useState(0)
    
//     const capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     } 

//     const updateNews = async ()=> {
//         props.setProgress(10);
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
//         setLoading(true)
//         let data = await fetch(url);
//         props.setProgress(50);
//         let parsedData = await data.json()
//         setArticles(parsedData.articles)
//         setTotalResults(parsedData.totalResults)
//         setLoading(false)
//         props.setProgress(100);
//     }

//     useEffect(() => {
//         document.title = `${capitalizeFirstLetter(props.category)} - News App`;
//         updateNews(); 
//         // eslint-disable-next-line
//     }, [])


//     const fetchMoreData = async () => {   
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
//         setPage(page+1) 
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         setArticles(articles.concat(parsedData.articles))
//         setTotalResults(parsedData.totalResults)
//       };
       
//         return (
//             <>
//                 <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>News - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
//                 {loading && (<h4>Loading...</h4>)}
//                 <InfiniteScroll
         
//                     dataLength={articles.length}
//                     next={fetchMoreData}
//                     hasMore={articles.length !== totalResults}
//                     loader={<h4>Loading...</h4>}
//                 > 
//                     <div className="container">
                         
//                     <div className="row">
//                         {articles.map((element) => {
//                             return <div className="col-md-4" key={element.url}>
//                                 <Item title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                             </div>
//                         })}
//                     </div>
//                     </div> 
//                 </InfiniteScroll>
//             </>
//         )
    
// }


// News.defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general',
// }

// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
// }

// export default News
