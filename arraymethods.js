const myClubs = [
  "dortmund",
  "barca",
  "napoli",
  "atalanta",
  "real sociedad",
  "leeds",
  "brentford",
  "celtic",
];

let removeLastItem = myClubs.pop();
console.log("removeLastItem", removeLastItem);
console.log(myClubs);

let addClub = myClubs.push("fulham")
let addAnotherClub = myClubs.push("wolfsburg");
console.log("myUpdatedFriendList", myClubs);

let removeFirstItem = myClubs.shift("aston villa");
console.log("removeFirstItem", myClubs);

let addItemAtTheStart = myClubs.unshift("montpellier");
console.log("addItemAtTheStart", myClubs);

const sliceUs = [
  "gavi",
  "raphinha",
  "leao",
  "simons",
  "toney",
  "foden",
  "mudryk",
  "kvaratshkelia",
  "osimhen",
];
let sliceArray = sliceUs.slice(1, 3);
let sliceAnotherPlayer = sliceUs.slice(3, 5);
let getLastPlayer = sliceUs.slice(-3);
console.log("sliceOneThree", sliceArray);
console.log("sliceFourSix", sliceAnotherPlayer);
console.log("sliceAndGetLastElement", getLastPlayer);

const spliceMe = [
  "fati",
  "pedri",
  "madueke",
  "gakpo",
  "kubo",
  "sancho",
  "rashy",
  "mev",
  "wurcielago",
];
let spliceArray = spliceMe.splice(0, 5);
console.log("spliceResult", spliceArray);
console.log("deletedElements", spliceMe);

const myCities = [
  "lagos",
  "rabat",
  "ankara",
  "moscow",
  "rosario",
  "antannanarivo",
  "georgia",
];
let includeElement = myCities.includes("riyadh", 0);
let includeElementNotFound = myCities.includes("casablanca", 0);
console.log(includeElement);
console.log(includeElementNotFound);
