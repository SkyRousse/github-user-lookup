var apiKey = require('./../.env').apiKey;

function GitUser() {

}

GitUser.prototype.exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + 'userName' + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    // displayFunction(userName, response.dig-into-api);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.gituserModule = GitUser;
