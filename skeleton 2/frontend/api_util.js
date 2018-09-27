const APIUtil = {
  followUser: id => APIUtil.changeFollowStatus(id, 'post'),

  unfollowUser: id => APIUtil.changeFollowStatus(id, 'delete'),
  
  changeFollowStatus: (id, method) => (
    $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'json',
      method
    })
  )
}

module.exports = APIUtil;
