/// <reference path="setup.js" />

const keywords = [
  "blender",
  "liqueur",
  "liquor",
  "succour",
  "sucker",
  "diner",
  "banger",
  "grinder",
  "lover",
  "insider",
  "69er",
  "liner",
  "plower",
  "power",
  "filler",
  "eater",
  "toaster",
  "thriller",
  "fucker",
  "binder",
  "sewer",
  "wiper",
  "bartender"
];

function main() {
  initializeOAuthClient();

  for (let word of keywords) {
    Logger.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    Logger.log(word);
    search(word);
  }
}

function search(word: string) {
  let tweets = getTweets(word);

  for (let tweet of tweets) {
    // get text
    let text = <string>tweet.text;
    let arr = text.split(" ");

    // get final words
    let finalWord = clean(arr.pop());
    // let penultimateWord = clean(arr.pop());

    // Logger.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    // Logger.log(finalWord);
    // Logger.log(penultimateWord);

    // check if final word in keywords list
    if (keywords.indexOf(finalWord) >= 0) {
      Logger.log(text);
      Logger.log(`>> ${finalWord}?? I hardly know 'er!`);
    }
    // if (keywords.indexOf(penultimateWord) >= 0) {
    // Logger.log("==== penultimate word match! ====");
    // Logger.log(text);
    // Logger.log(`>> ${penultimateWord}?? I hardly know 'er!`);
    // }
  }
}

function getTweets(word) {
  const search_url = "https://api.twitter.com/1.1/search/tweets.json";
  const params = `?q=${word}&lang=en&count=50`;
  var url = search_url + params;

  var response = authUrlFetch.fetch(url);
  let json = JSON.parse(response.getContentText());
  return json["statuses"];
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
