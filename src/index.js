require('./css/main.scss');
var fetch =require ('node-fetch');
var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./js/components/board');


var App = React.createClass({

    getInitialState : function(){
      
      return {
          lists: [],
          className_30: 'past30_selected',
          className_allTime:'allTime'
      };  
    },
    
    componentDidMount: function(){
     
      fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(function(result){
            return  result.json();
        }).then(function(jsonResult){
            this.setState({
                lists: jsonResult
            });
        }.bind(this));  
    },
    
    get30Days: function(){
       fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(function(result){
            return  result.json();
        }).then(function(jsonResult){
            this.setState({
                lists: jsonResult,
                className_30: 'past30_selected',
                className_allTime:'allTime'
            });
        }.bind(this)); 
    },
    
    getAllTime: function(){
        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(function(result){
            return  result.json();
        }).then(function(jsonResult){
            this.setState({
                lists: jsonResult,
                className_30: 'past30',
                className_allTime:'allTime_selected'
            });
        }.bind(this)); 
    },
    
    
    
    render: function(){
        return(
            <div>
                <div className='banner'><i className="fa fa-free-code-camp"></i>  freeCodeCamp</div>
                <div className='leaderBoard'>
                    <div className='header'>Camper Leaderboard</div>
                    <Board lists = {this.state.lists} className_30={this.state.className_30} className_allTime={this.state.className_allTime} past30Days = {this.get30Days} allTime = {this.getAllTime} />
                </div>
               
                <footer>Coded by <a href='https://github.com/BeauBo' target='_blank'>BeauBo</a></footer>
            </div>

        );
    }
});

ReactDOM.render(<App />, document.getElementById('container'));