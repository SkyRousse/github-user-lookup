var GitUser = require('./../js/git-user.js').gituserModule;

var displayRepos = function(repoName, repoDescription) {
  $('.show-repos').append('<tr> + <td>' + repoName + '</td> + <td>' + repoDescription + '</td><tr>')
}

var showTable = function() {
  $('.show-repos').show();
};

$(document).ready(function() {
  var currentUserObject = new GitUser();
  $('#user-form').submit(function(event) {
    event.preventDefault();
    var userName = $('#user-name').val();
    $('#user-name').val("");
    currentUserObject.getRepos(userName, displayRepos);
  });
});
