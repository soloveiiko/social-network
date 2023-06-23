import {connect} from 'react-redux';
import {followAC, setUsers, unfollowAC} from '../../redux/users';
import Users from '../../pages/users/users';

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        currentPage: state.users.currentPage,
        totalUsersCount: state.users.totalUsersCount,
        pageSize: state.users.pageSize,
        isFetching: state.users.isFetching
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