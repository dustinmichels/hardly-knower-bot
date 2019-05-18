/**
 * From Google Twitter OAuth Example
 * See: https://developers.google.com/google-ads/scripts/docs/examples/twitter-oauth20
 **/

var authUrlFetch;

// Call this function just once, to initialize the OAuth client.
function initializeOAuthClient() {
  if (typeof OAuth2 === "undefined") {
    var libUrl =
      "https://developers.google.com/google-ads/scripts/docs/examples/oauth20-library";
    throw Error(
      "OAuth2 library not found. Please take a copy of the OAuth2 " +
        "library from " +
        libUrl +
        " and append to the bottom of this script."
    );
  }
  var tokenUrl = "https://api.twitter.com/oauth2/token";
  authUrlFetch = OAuth2.withClientCredentials(
    tokenUrl,
    TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET
  );
}
