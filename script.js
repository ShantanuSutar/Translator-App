const selectTag = document.querySelectorAll("select");
const translateBtn = document.querySelector(".btn");
const fromText = document.querySelector(".text");
const toText = document.querySelector(".trans");
const exchangeBtn = document.querySelector(".exchange");

selectTag.forEach((tag, id) => {
  for (const country_code in countries) {
    // selecting English and Hindi by default
    let selected;
    if (id == 0 && country_code == "en-GB") {
      selected = "selected";
    } else if (id == 1 && country_code == "hi-IN") {
      selected = "selected";
    }
    let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option); //adding language options inside option tag
  }
});

translateBtn.addEventListener("click", () => {
  let text = fromText.value,
    translateFrom = selectTag[0].value, // getting fromSelect text
    translateTo = selectTag[1].value; // getting toSelect text

  let api = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
  // fetching api response and returning ir with parsing into js obj and in second then method receiving that object

  fetch(api)
    .then((res) => res.json())
    .then((result) => {
      toText.value = result.responseData.translatedText;
    });
});

exchangeBtn.addEventListener("click", () => {
  //exchanging text
  let temp = fromText.value;
  fromText.value = toText.value;
  toText.value = temp;

  //exchanging selected option
  temp = selectTag[0].value;
  selectTag[0].value = selectTag[1].value;
  selectTag[1].value = temp;
});
