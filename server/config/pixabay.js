//Assign automatically
var url;
var key;

/* Detect enviroment */
if (process.env.APP_NAME == "pro") {
    url = "https://pixabay.com/api/?";
    key = "key=13119377-fc7e10c6305a7de49da6ecb25";
} else {
    url = "https://pixabay.com/api/?";
    key = "key=13119377-fc7e10c6305a7de49da6ecb25";
}

const PixaBay = {
    "url": url,
    "key": key
}

module.exports = PixaBay;