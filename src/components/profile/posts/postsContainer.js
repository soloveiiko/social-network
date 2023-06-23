import profile, {addPostActionCreator, updatePostActionCreator} from '../../../redux/profile'
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