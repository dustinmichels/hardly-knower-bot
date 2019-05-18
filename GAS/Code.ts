function search() {
  initializeOAuthClient();
  var tweets = getTweets();
  Logger.log(tweets);
}

function getTweets() {
  var search_url = "https://api.twitter.com/1.1/search/tweets.json";
  var params = "?q=blender+OR+fender";
  var url = search_url + params;

  var response = authUrlFetch.fetch(url);
  return JSON.parse(response.getContentText());
}
