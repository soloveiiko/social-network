import {connect} from 'react-redux';
import {followAC, setUsers, unfollowAC} from '../../redux/users';
import Users from '../../pages/users/users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
            // console.log(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);