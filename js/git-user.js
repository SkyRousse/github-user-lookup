var apiKey = require('./../.env').apiKey;

function GitUser() {

}

GitUser.prototype.getUserInfo = function(userName, displayUser) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {
    var name = response.name;
    var email = response.email;
    var followers = response.followers;
    var following = response.following;
    var publicRepos = response.public_repos;
    var avatarUrl = response.avatar_url;
    displayUser(name, email, followers, following, publicRepos, avatarUrl);
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $('.showRepos').text(error.responseJSON.message);
  });
};

GitUser.prototype.getRepos = function(userName, displayRepos) {
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    var foundRepos = response;
    foundRepos.forEach(function(repo) {
      var repoName = repo.name;
      var repoDescription = repo.description;
      displayRepos(repoName, repoDescription);
    })
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $('.showRepos').text(error.responseJSON.message);
  });
};

exports.gituserModule = GitUser;
