import React from 'react';
import './BlogCardUI.css';

const blogCard = (props) => (
    <div className="Card">
        <div className="Card__Img"></div>
        <div className="Card__Content">
            <div className="Card__Content--Heading">
                <p>{props.title}</p>
            </div>
            <div className="Card__Content--Info">
                <div className="Card__Content--Info-Writer">Haysam Bin Tahir</div>
                <div className="Card__Content--Info-Date">{props.postedOn}</div>
            </div>
            <div className="Card__Content--Overview">
                <p>
                    {props.body.substr(0,150) + "..."}
                </p>
            </div>
        </div>
        <button className="Card__Button">
            <strong>Read full blog</strong>
        </button>
    </div>
);

export default blogCard;