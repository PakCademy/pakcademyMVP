import React, { useContext } from 'react';
import BlogSignatureHeading from '../../../UIWidgets/Typography/BlogSignatureHeading';
import DotList from '../../../UIWidgets/DotList';
import './LatestBlogCard.css';

function LatestBlogCard(props) {

    return (
        <div className="LatestBlog__Card">
            <div className="LatestBlog__Card--Info">
                <BlogSignatureHeading theme="warm">This is the blog title</BlogSignatureHeading>
                <div className="LatestBlog__Card--Info-Detail">
                    <DotList items={["Haysam Bin Tahir", "27/09/2020"]} theme="warm" />
                </div>
                <div className="LatestBlog__Card--Info-Button">Read full blog</div>
            </div>
        </div>
    );
};

export default LatestBlogCard;