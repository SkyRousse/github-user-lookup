var GitUser = require('./../js/git-user.js').gituserModule;

var displayRepos = function(repoName, repoDescription) {
  $('#show-repos').append("<div class='item'>" + "<h4>" + repoName + "</h4><p>" + repoDescription + "</p></div>");
};

var displayUser = function( name, email, followers, following, publicRepos, avatarUrl ) {
  $('#show-user-info').html(
    "<div class='top-item' >" +
    "<img src='" + avatarUrl + "'>" +
    '<ul><li>' + name + '</li>' +
    '<li>' + email + '</li>' +
    '<li>' + 'Followers: ' + followers + '</li>' +
    '<li>' + 'Following: '+ following + '</li>' +
    '<li>' + 'Public Repos: '+ publicRepos + '</li>' +
    '</ul></div>'
  );
};

$(document).ready(function() {
  var userObjectSearch = new GitUser();
  $('#user-form').submit(function(event) {
    event.preventDefault();
    $('#show-repos').empty();
    $('#show-user-info').empty();
    var userName = $('#user-name').val();
    $('#user-name').val("");
    userObjectSearch.getRepos(userName, displayRepos);
    userObjectSearch.getUserInfo(userName, displayUser);
  });
});
