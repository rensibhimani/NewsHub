import React, { Component } from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

export class News extends Component {
   
    static defaultProps = {
      country: 'in',
      pageSize: 6,
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
