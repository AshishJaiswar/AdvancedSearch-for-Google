const search_input = document.getElementById("query");

const site_button = document.getElementById("site");
const filetype_button = document.getElementById("filetype");
const exact_button = document.getElementById("exact");
const or_button = document.getElementById("or");
const include_button = document.getElementById("include");
const exclude_button = document.getElementById("exclude");
const range_button = document.getElementById("range");
const before_button = document.getElementById("before");
const after_button = document.getElementById("after");
const wildcard_button = document.getElementById("wildcard");
const social_handle_button = document.getElementById("social_handle");
const price_button = document.getElementById("price");
const hashtag_button = document.getElementById("hashtag");
const define_button = document.getElementById("define");
const stocks_button = document.getElementById("stocks");
const related_button = document.getElementById("related");

site_button.addEventListener("click", () => {
  search_input.value += " site:";
  search_input.focus();
});

filetype_button.addEventListener("click", () => {
  search_input.value += " filetype:";
  search_input.focus();
});

exact_button.addEventListener("click", () => {
  search_input.value += ` "your_query"`;
  search_input.focus();
});

or_button.addEventListener("click", () => {
  search_input.value += " OR";
  search_input.focus();
});

include_button.addEventListener("click", () => {
  search_input.value += " +";
  search_input.focus();
});

exclude_button.addEventListener("click", () => {
  search_input.value += " -";
  search_input.focus();
});

range_button.addEventListener("click", () => {
  search_input.value += " ..";
  search_input.focus();
});

before_button.addEventListener("click", () => {
  search_input.value += " before:";
  search_input.focus();
});

after_button.addEventListener("click", () => {
  search_input.value += " after:";
  search_input.focus();
});

wildcard_button.addEventListener("click", () => {
  search_input.value += " *";
  search_input.focus();
});

social_handle_button.addEventListener("click", () => {
  search_input.value += " @";
  search_input.focus();
});

price_button.addEventListener("click", () => {
  search_input.value += " $";
  search_input.focus();
});

hashtag_button.addEventListener("click", () => {
  search_input.value += " #";
  search_input.focus();
});

define_button.addEventListener("click", () => {
  search_input.value += " define:";
  search_input.focus();
});

stocks_button.addEventListener("click", () => {
  search_input.value += " stocks:";
  search_input.focus();
});

related_button.addEventListener("click", () => {
  search_input.value += " related:";
  search_input.focus();
});

const search = document.getElementById("search");
search.addEventListener("click", () => {
  let query = search_input.value;
  if (query !== "") {
    search.setAttribute("href", `https://www.google.com/search?q=${query}`);
  }
});

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  search.click();
});
