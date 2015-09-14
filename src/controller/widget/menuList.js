var React =require('react');
module.exports = React.createClass({
    render:function(){
        PropTypes:{
            items:React.PropTypes.array
        }
        return <ul className={'list-menu '+ this.props.className}>
            {this.props.items.map(function(item,index){
                    return <li key = {index} className = {item.className}>
                    <a href='javascript:0'>{item.content}</a></li>
            })}
        </ul>
    }
})