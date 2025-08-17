import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News =(props)=> {
  
  News.defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  }
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  const [articles,setArticles]=useState([]);
  const [page,setPage]=useState(1);
  const [loading,setLoading]=useState(true);
  const [totalResults,setTotalResults]=useState(0);
  


 const updateNews= async ()=> {
    props.setProgress(10);
    const url = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    // console.log(parsedData)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    // setPage(page+1)
    setLoading(false)
    
   
    props.setProgress(100);
  }
  useEffect(()=>{
    updateNews();
  },[])
 
  // async updateNews(){
  //    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=048263337dc049c99e94872b2fae4c55&page=${this.state.page}&pageSize=${props.pageSize}`;
  //   this.setState({loading:true})
  //    let data=await fetch(url);
  //    let parsedData=await data.json();
  //    console.log(parsedData)
  //    this.setState({articles: parsedData.articles,
  //                   page:this.state.page-1,
  //                   loading:false
  //    })
  //  }
    
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
};
    
   
  // handlenextclick=async ()=>{
  //   // if(!(this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize))){
  //   //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=048263337dc049c99e94872b2fae4c55&page=${this.state.page+1}&pageSize=${props.pageSize}`;
  //   //   this.setState({loading:true})
  //   //  let data=await fetch(url);
  //   //  let parsedData=await data.json();

  //   //  this.setState({articles: parsedData.articles,
  //   //                 page:this.state.page+1,
  //   //                 loading:false
  //   //  })
  //   // }
  //   this.setState({page:this.state.page+1});
  //   this.updateNews();
  // }
  // handleprevclick=async ()=>{
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=048263337dc049c99e94872b2fae4c55&page=${this.state.page-1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading:true})
  //   //  let data=await fetch(url);
  //   //  let parsedData=await data.json();
  //   //  console.log(parsedData)
  //   //  this.setState({articles: parsedData.articles,
  //   //                 page:this.state.page-1,
  //   //                 loading:false
  //   //  })
  //   this.setState({page:this.state.page-1});
  //   this.updateNews();
  //}
  
    return (
      <>
        <h1 className='text-danger' style={{marginTop:'6rem',marginBottom:'2rem'}}><u><center>NewsHub-Top {props.category.toUpperCase()} Headlines </center></u></h1>
        {loading && <Spinner />}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={articles.length!==totalResults?<Spinner/>:null}>
           
          {/* loader={<Spinner />} */}
          
          {/* // loader!=={<Spinner/>} */}
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return <div className="col-12 col-md-4 my-2" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name.slice(0, 17)} />
                </div>

              })}

            </div>
          </div>
        </InfiniteScroll>

      </>
    )
  }


export default News;
