var GitUser = require('./../js/git-user.js').gituserModule;

$(document).ready(function() {
  var currentUserObject = new GitUser();
  $('#user-form').submit(function(event) {
    event.preventDefault();
    var userName = $('#user-name').val();
    $('#user-name').val("");
    currentUserObject.getRepos(userName, displayRepos);
  });
});
