import React, { Component } from 'react';
import './BlogCardManager.css';
import BlogCard from '../BlogCardUI/BlogCardUI';
import axios from 'axios';

class BlogCardManager extends Component {
    state  = {
        blogType: "ISSB RELATED BLOGS",
        blogs: null,
    }
    componentDidMount () {
        axios.get('http://localhost:7000/blogs')
        .then(response => {
            console.log(response.data.Blogs);
            this.setState({blogs : response.data.Blogs /*, blogType: this.props.blogType*/});
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
                
        return (
            <div className="Blog-List__Container">
                <div className="Blog-List__Container--Heading">{this.state.blogType}</div>
                <div className="Blog-List__Container--BlogCards">
                    {this.state.blogs ? this.state.blogs.map(blog => (
                        <BlogCard 
                        key={blog._id}
                        id = {blog._id}
                        title={blog.Title}
                        picture={blog.PictureSecureId}
                        body={blog.body}
                        postedOn = {blog.postedOn}/>
                    )) : ''}

                </div>
            </div>
        );
    };
}

export default BlogCardManager;