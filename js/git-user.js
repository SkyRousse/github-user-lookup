var apiKey = require('./../.env').apiKey;

function GitUser() {

}

GitUser.prototype.getUserInfo = function(userName/*, displayUser*/) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {
    console.log(response);
  })
}

GitUser.prototype.getRepos = function(userName, displayFunction) {
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    var foundRepos = response;
    foundRepos.forEach(function(repo) {
      var repoName = repo.name;
      var repoDescription = repo.description;
      console.log("Repo Name:" + repoName);
      console.log("Description:" + repoDescription);
      displayFunction(repoName, repoDescription);
    })
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $('.showRepos').text(error.responseJSON.message);
  });
};

exports.gituserModule = GitUser;
