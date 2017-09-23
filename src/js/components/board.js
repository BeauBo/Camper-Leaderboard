var React = require('react');
require('../../css/board.scss');

var Board = React.createClass({
    
    
    
    
    
    render: function(){
        
        var lists = this.props.lists;
        
        if (lists){
        
            lists=lists.map(function(item, index){
                
                return (
                    <tr key = {index}>
                        <td className='rank'>{index+1}</td>
                        <td className='users'><a href={'https://www.freecodecamp.com/'+item.username} target='_blank'><img src={item.img}/>{item.username}</a></td>
                        <td className='last30Points'>{item.recent}</td>
                        <td className='allTimePoints'>{item.alltime}</td>
                    </tr>
                    
                    );
                
            });
            
            return(
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className='rank_header'>#</th>
                                <th className='users_header'>Camper Name</th>
                                <th onClick={this.props.past30Days} className={this.props.className_30}>Points in last 30 days</th>
                                <th onClick={this.props.allTime} className={this.props.className_allTime}>All time points</th>
                            </tr>
                        </thead>
                        <tbody>{lists}</tbody>
                        
                    </table>
            
                </div>
            
            );
        }else{
           return (
               <h4>Loading.......</h4>
               ); 
        }
        
        
        
        
    }
});

module.exports = Board;