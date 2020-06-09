const cheerio = require("cheerio");
const axios = require("axios");

const siteUrl = "https://www.clear.com.br/pit/rescue?controller=Rescue";

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const getResults = async () => {
  const $ = await fetchData();
  return $(".txt_page_not").text()
};

module.exports = getResults;