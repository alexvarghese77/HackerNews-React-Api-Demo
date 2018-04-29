import React,{Component} from 'react'
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';

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
              () => {var newsarry=[];   
              for(var i=0;i<10;i++)
              {
                fetch('https://hacker-news.firebaseio.com/v0/item/'+this.state.topNews[i]+'.json').then(
                    results=>{
    
                        return results.json();
                    }
                 ).then(
                    data=>{
                        newsarry.push(data);
                        this.setState({
                             newsDetails:newsarry
                        })
                    }
    
                    
                 )
              }
            }
           
        )

        
    }
    render()
    {
        console.log(this.state.newsDetails)
                return(
        <div>
            <ListGroup>
                { 
                  this.state.newsDetails.length>0?this.state.newsDetails.map((news)=><ListGroupItem>{news.title}</ListGroupItem>):null   
                } 
            </ListGroup>
        </div>
          
            

        )
    }
}
