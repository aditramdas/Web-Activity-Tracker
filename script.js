

setInterval(function () {
  var cur = window.location.hostname;

  console.log(cur);

  cur = parseCurrent(cur);

  console.log(cur);


  chrome.storage.local.set({["current_website"]: cur }, function () {});

  chrome.storage.local.get(["websites"], function (items) {

    // gets rid of parenthesis/quoutes
    var formatted = items.websites
      .toString()
      .slice(1, -1)
      .replace(/['"]+/g, "");

      console.log(formatted);

    // splits each of the 5 urls into it's own array index
    var splitted = formatted.toString().split(",");

    var website1 = splitted[0];






    if (website1 == cur) {
      console.log("tyest");
        window.location.replace(
          "https://www.thewindowsclub.com/wp-content/uploads/2014/04/Access-Restricted-Websites.png"
        );
        
    }

  });
}, 1000);



function parseCurrent (currentURL) {

  const pre = "www.";

  if (!currentURL.toString().startsWith("www.")) {
    var newLink = pre + currentURL;
    console.log(newLink);
    return newLink;
  }
  return currentURL; 
}


console.log("This is from main script");
