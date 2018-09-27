const FollowToggle = require('./follow_toggle.js')


jQuery(function () {
  $('button.follow-toggle').each( (i, btn) => new FollowToggle(btn));
})
