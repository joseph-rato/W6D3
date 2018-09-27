const APIUtil = require('./api_until');

class FollowToggle {
  constructor (el) {
    this.$el = $(el)
    this.userId = this.$el.data('user-id')
    this.followState = this.$el.data('initial-follow-state')
    this.render()
    this.$el.on('click', this.handleClick.bind(this));
  }
  render() {
    if (this.followState === "followed") {
      this.$el.text('Unfollow!');
    } else if (this.followState === "unfollowed") {
      this.$el.text('Follow!')
    }
  }
  handleClick (event){
    const that = this;
    event.preventDefault();
    if (this.followState === 'followed') {

      this.render();
      APIUtil.unfollowedUser(this.userID).then(() =>{
          that.followState = 'unfollowed';
          that.render()
      });
    } else {
      this.render()
      APIUtil.followUser(this.userID).then(() =>{
        that.followState = 'followed';
        that.render();
      });
    }
  }
}
module.exports = FollowToggle;
