var apiKey = require('./../.env').apiKey;

function GitUser() {

}

GitUser.prototype.getRepos = function(userName, displayFunction) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    displayFunction(userName, response.user.repos);
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $('.showRepos').text(error.responseJSON.message);
  });
};

exports.gituserModule = GitUser;
