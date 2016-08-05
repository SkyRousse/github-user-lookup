var GitUser = require('./../js/git-user.js').gituserModule;

var displayRepos = function(repoName, repoDescription) {
  $('.show-repos').append('<tr> + <td>' + repoName + '</td> + <td>' + repoDescription + '</td><tr>')
}

// var displayUser = function(name, )

$(document).ready(function() {
  var userObjectSearch = new GitUser();
  $('#user-form').submit(function(event) {
    event.preventDefault();
    $('.show-repos').empty();
    var userName = $('#user-name').val();
    $('#user-name').val("");
    userObjectSearch.getRepos(userName, displayRepos);
    $('.show-repos').show();
    userObjectSearch.getUserInfo(userName/*, displayUser*/);
  });
});
