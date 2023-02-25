const google_search_input = document.querySelector("input[name='q']");
const div = document.createElement("div");

const site_button = document.createElement("input");
const filetype_button = document.createElement("input");
const exact_button = document.createElement("input");
const or_button = document.createElement("input");
const include_button = document.createElement("input");
const exclude_button = document.createElement("input");
const range_button = document.createElement("input");
const before_button = document.createElement("input");
const after_button = document.createElement("input");
const wildcard_button = document.createElement("input");
const social_handle_button = document.createElement("input");
const price_button = document.createElement("input");
const hashtag_button = document.createElement("input");
const define_button = document.createElement("input");
const stocks_button = document.createElement("input");
const related_button = document.createElement("input");

// Div container
div.setAttribute("class", "features_container");

// Site Button
site_button.setAttribute("value", "Site");
site_button.setAttribute("type", "button");
site_button.setAttribute("id", "site");

// Filetype Button
filetype_button.setAttribute("value", "Filetype");
filetype_button.setAttribute("type", "button");
filetype_button.setAttribute("id", "filetype");

// Exact button
exact_button.setAttribute("value", "Exact");
exact_button.setAttribute("type", "button");
exact_button.setAttribute("id", "exact");

// OR Button
or_button.setAttribute("value", "OR");
or_button.setAttribute("type", "button");
or_button.setAttribute("id", "or");

// Include Button
include_button.setAttribute("value", "Include (+)");
include_button.setAttribute("type", "button");
include_button.setAttribute("id", "include");

// Exclude Button
exclude_button.setAttribute("value", "Exclude (-)");
exclude_button.setAttribute("type", "button");
exclude_button.setAttribute("id", "exclude");

// Range Button
range_button.setAttribute("value", "Range (..)");
range_button.setAttribute("type", "button");
range_button.setAttribute("id", "range");

// Before Button
before_button.setAttribute("value", "Before");
before_button.setAttribute("type", "button");
before_button.setAttribute("id", "before");

// After Button
after_button.setAttribute("value", "After");
after_button.setAttribute("type", "button");
after_button.setAttribute("id", "after");

// Wildcard Button
wildcard_button.setAttribute("value", "*");
wildcard_button.setAttribute("type", "button");
wildcard_button.setAttribute("id", "wildcard");

// Social handle Button
social_handle_button.setAttribute("value", "@");
social_handle_button.setAttribute("type", "button");
social_handle_button.setAttribute("id", "social_handle");

// Price Button
price_button.setAttribute("value", "$");
price_button.setAttribute("type", "button");
price_button.setAttribute("id", "price");

// Hashtag Button
hashtag_button.setAttribute("value", "#");
hashtag_button.setAttribute("type", "button");
hashtag_button.setAttribute("id", "hashtag");

// Define Button
define_button.setAttribute("value", "Define");
define_button.setAttribute("type", "button");
define_button.setAttribute("id", "define");

// Stocks Button
stocks_button.setAttribute("value", "Stocks");
stocks_button.setAttribute("type", "button");
stocks_button.setAttribute("id", "stocks");

// Related Button
related_button.setAttribute("value", "Related");
related_button.setAttribute("type", "button");
related_button.setAttribute("id", "related");

const user_guide_link = document.createElement("a");
user_guide_link.innerText = "user guide 📃";
user_guide_link.setAttribute("class", "guide");
user_guide_link.setAttribute("target", "_blank");
user_guide_link.setAttribute("href", "#");

const google_button_container = document.querySelector(".FPdoLc");

div.append(
  site_button,
  filetype_button,
  exact_button,
  or_button,
  include_button,
  exclude_button,
  range_button,
  before_button,
  after_button,
  wildcard_button,
  social_handle_button,
  price_button,
  hashtag_button,
  define_button,
  stocks_button,
  related_button,
  user_guide_link
);

google_button_container.prepend(div);

site_button.addEventListener("click", () => {
  google_search_input.value += " site:";
  google_search_input.focus();
});

filetype_button.addEventListener("click", () => {
  google_search_input.value += " filetype:";
  google_search_input.focus();
});

exact_button.addEventListener("click", () => {
  google_search_input.value += ` "your_query"`;
  google_search_input.focus();
});

or_button.addEventListener("click", () => {
  google_search_input.value += " OR";
  google_search_input.focus();
});

include_button.addEventListener("click", () => {
  google_search_input.value += " +";
  google_search_input.focus();
});

exclude_button.addEventListener("click", () => {
  google_search_input.value += " -";
  google_search_input.focus();
});

range_button.addEventListener("click", () => {
  google_search_input.value += " ..";
  google_search_input.focus();
});

before_button.addEventListener("click", () => {
  google_search_input.value += " before:";
  google_search_input.focus();
});

after_button.addEventListener("click", () => {
  google_search_input.value += " after:";
  google_search_input.focus();
});

wildcard_button.addEventListener("click", () => {
  google_search_input.value += " *";
  google_search_input.focus();
});

social_handle_button.addEventListener("click", () => {
  google_search_input.value += " @";
  google_search_input.focus();
});

price_button.addEventListener("click", () => {
  google_search_input.value += " $";
  google_search_input.focus();
});

hashtag_button.addEventListener("click", () => {
  google_search_input.value += " #";
  google_search_input.focus();
});

define_button.addEventListener("click", () => {
  google_search_input.value += " define:";
  google_search_input.focus();
});

stocks_button.addEventListener("click", () => {
  google_search_input.value += " stocks:";
  google_search_input.focus();
});

related_button.addEventListener("click", () => {
  google_search_input.value += " related:";
  google_search_input.focus();
});
