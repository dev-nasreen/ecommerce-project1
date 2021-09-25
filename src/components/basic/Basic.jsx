import React, {Component} from 'react';
import './basic.css';
import BlogCard from './BlogCard';

class Basic extends Component {
   state = {
       showBlogs : true
   }
  mObjectArr = [
     {
     title: "Blog Title 1",
     description: "Lorem Ipsum dolor sit.Lorem Ipsum dolor sit.Lorem Ipsum dolor sit.",
},
     {
     title: "Blog Title 2",
     description: "Lorem Ipsum dolor sit.Lorem Ipsum dolor sit.Lorem Ipsum dolor sit.",
},
     {
     title: "Blog Title 3",
     description: "Lorem Ipsum dolor sit.Lorem Ipsum dolor sit.Lorem Ipsum dolor sit.",
}
]

 blogs = this.mObjectArr.map(item => <BlogCard item={item}/> )

 hideBlogs = () =>{
     let updateState = !this.state.showBlogs
     this.setState({showBlogs: updateState});
 }


 render(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <button onClick={this.hideBlogs}>Show / Hide blogs</button>
                    
                   { this.state.showBlogs ? this.blogs : null}
                </div>
            </div>
        </div>
       
    );
 }
    
};

export default Basic;