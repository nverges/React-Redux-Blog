import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Link tag for a button event. Instead of using 'href' use 'to' to route the button
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/fetch_posts';

class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts(); 
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className='list-group-item' key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary' to='/posts/new'>
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

// this is shorthand instead of creating a mapDispatchToProps function
// this passes the actual action creator to the connect function
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);