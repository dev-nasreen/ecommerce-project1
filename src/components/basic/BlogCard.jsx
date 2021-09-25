import React from 'react';
class BlogCard extends React.Component{
   

    render(){
        console.log(this.props)
        return (
            <div className="text-center py-4 blog-card" >
            <h4>{this.props.item.title}</h4>
            <p>{this.props.item.description}</p>
            <h2>Like Count: {this.props.item.countLike}</h2>
            <button onClick={this.props.handleCountLike}>Like </button>
            </div>
        );
    }
   
};

export default BlogCard;