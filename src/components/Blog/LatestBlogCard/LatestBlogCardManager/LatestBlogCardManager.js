import React, { Component } from 'react';
import './LatestBlogCardManager.css';
import LatestBlogCard from '../LatestBlogCard/LatestBlogCard';

class LatestBlogCardManager extends Component {
    render () {
        return (
            <div className="Latest__Blogs">
                <div className="Latest__Blogs--Main-Heading">
                    <p>
                        #LATEST_BLOGS
                    </p>
                    
                </div>
                <div className="Latest__Blogs--Main-Blog">
                   <LatestBlogCard />
                </div>
                <div className="Latest__Blogs--Subordinate-Blogs">
                    <div className="Latest__Blogs--Subordinate-Blogs-Blog">
                        <LatestBlogCard />
                    </div>
                    <div className="Latest__Blogs--Subordinate-Blogs-Blog">
                        <LatestBlogCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default LatestBlogCardManager;