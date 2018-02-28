import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadArticles
} from './../redux/actions/actions'

const mapStateToProps = state => {
    return {
        articles: state.articles.articles
    }
}

class Feed extends Component {

    componentWillReceiveProps(nextProps) {
        
    }
        
    componentWillMount() {
        this.props.loadArticles()
    }
    
    render() {
    const articles = this.props.articles.map((article)=>
    <div className="container-fluid main-container">
        <div className="col-md-6 col-md-offset-1 dashboard-main-content">
            <div className="posts-wrapper animated fadeInUp" data-behavior="endless-scroll" data-animation="fadeInUp-fadeOutDown">
                <div className="post-panel">

                    <div className="post-metadata">
                        <img alt="avatar image" className="avatar-image" src={article.author.provider_pic} height="40" width="40"/>
                        <div className="post-info">
                            <div data-react-className="PopoverLink">
                            <span className="popover-link" data-reactroot=""><a href={`/profile/${article.author._id}`}>{article.author.name}</a></span></div>
                            <small>Posted • a must read</small>
                        </div>
                    </div>

                    <div class="post-picture-wrapper">
                        <img src={article.feature_img} alt="Thumb" />
                    </div>

                    <div className="main-body">
                        <h3 className="post-title"><a href={`/articleview/${article._id}`} >{article.title}</a></h3>
                        <div className="post-body">
                            <p className="" dangerouslySetInnerHTML={{__html: article.description}}></p>
                        </div>
                        <a className="read-more" href={`/articleview/${article._id}`}>Read more</a>
                    </div>

                    <div className="post-stats clearfix">
                        <div className="pull-left">
                            <div className="like-button-wrapper">
                                <form className="button_to" method="get" action="">
                                    <button className="like-button" data-behavior="trigger-overlay" type="submit"><i className="fa fa-heart-o"></i><span className="hide-text">Like</span></button></form>
                                <span className="like-count">0</span>
                            </div>

                        </div>

                        <div className="pull-right">
                            <div className="bookmark-button-wrapper">
                                <form className="button_to" method="get" action=""><button className="bookmark-button" data-behavior="trigger-overlay" type="submit">      <span className="icon-bookmark-o"></span><span className="hide-text">Bookmark</span></button></form>
                            </div>

                        </div>

                        <div className="response-count pull-right">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            )

        return ( 
            <div>
            {articles}
            </div>
        );
    }
}

export default connect(mapStateToProps, { loadArticles })(Feed);