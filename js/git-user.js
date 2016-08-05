var apiKey = require('./../.env').apiKey;

function GitUser() {

}

GitUser.prototype.getRepos = function(userName, displayFunction) {
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    var foundRepos = response;
    console.log(foundRepos)
    foundRepos.forEach(function(repo) {
      var repoName = repo.name;
      var repoDescription = repo.description;
      console.log("Repo Name:" + repoName);
      console.log("Description:" + repoDescription);
      displayFunction(repoName, repoDescription);
    })
  $('.show-repos').show();
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $('.showRepos').text(error.responseJSON.message);
  });
};

exports.gituserModule = GitUser;
