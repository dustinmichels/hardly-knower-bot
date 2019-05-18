/// <reference path="setup.js" />

const keywords = [
  "defer",
  "incur",
  "blender",
  "liqueur",
  "concur",
  "prefer",
  "recur",
  "confer",
  "render",
  "succour",
  "occur",
  "sender",
  "lender",
  "splendor",
  "bartender",
  "vendor",
  "mender"
];

function main() {
  initializeOAuthClient();
  search();
}

function search() {
  let tweets = getTweets();
  for (let tweet of tweets) {
    // get text
    let text = <string>tweet.text;
    let arr = text.split(" ");

    // get final words
    let finalWord = clean(arr.pop());
    let penultimateWord = clean(arr.pop());

    // Logger.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    // Logger.log(finalWord);
    // Logger.log(penultimateWord);

    // check if final word in keywords list
    if (keywords.indexOf(finalWord) >= 0) {
      // Logger.log("==== final word match! ====");
      Logger.log(text);
      Logger.log(`>> ${finalWord}?? I hardly know 'er!`);
    } else if (keywords.indexOf(penultimateWord) >= 0) {
      // Logger.log("==== penultimate word match! ====");
      Logger.log(text);
      Logger.log(`>> ${penultimateWord}?? I hardly know 'er!`);
    }
  }
}

/** Standardize word, remove puncuation & emoji characters */
function clean(word: string) {
  return word
    .trim()
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(
      /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
      ""
    );
}

function getTweets() {
  const search_url = "https://api.twitter.com/1.1/search/tweets.json";
  const keywordParams = keywords.join("+OR+");
  const params = `?q=${keywordParams}&lang=en&count=50`;
  var url = search_url + params;

  var response = authUrlFetch.fetch(url);
  let json = JSON.parse(response.getContentText());
  return json["statuses"];
}
