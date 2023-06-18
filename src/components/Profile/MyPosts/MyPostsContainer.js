import {addPostActionCreator, updatePostActionCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        postValue: state.postsPage.postValue
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
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;