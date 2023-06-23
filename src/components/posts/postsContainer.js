import posts, {addPostActionCreator, updatePostActionCreator} from '../../redux/posts/posts'
import Posts from './posts';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        postValue: state.profile.postValue
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updatePostActionCreator(text));
        }
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;