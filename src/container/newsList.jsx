import React,{Component} from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap';
import Pagination from '../components/Pagination';


export default  class NewsList extends Component{
    constructor()
    {
        super();
        this.state={
            topNews:'',
            newsDetails:''
        }
    }
    componentWillMount()
    {
        
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then(
           results=>{
               return results.json();
           }
        ).then(
            data=>{
                 this.setState({
                     topNews:data
                 })
            }
        ).then(
              () => {
                  var newsarry=[];   
              for(var i=0;i<10;i++)
              {
                var a=fetch('https://hacker-news.firebaseio.com/v0/item/'+this.state.topNews[i]+'.json').then(
                    results=>{
    
                        return results.json();
                    }
                 );
                 newsarry.push(a);
              }
              Promise.all(newsarry).then((val)=>{

                  this.setState({
                    newsDetails:val
                        })
                })
            }
           
        )
      
        
    }
    render()
    {
        console.log(this.state.newsDetails)
                return(    
                 this.state.newsDetails.length>0?
                 (
                 <div>
                 <ListGroup>
                
                 {this.state.newsDetails.map((news)=><ListGroupItem tag="a" href={news.url} key={news.id}>{news.title}</ListGroupItem>)  }
                
                </ListGroup>
                 <Pagination/></div>):null   
        )
    }
}
