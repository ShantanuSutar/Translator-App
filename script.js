const selectTag = document.querySelectorAll("select");

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
