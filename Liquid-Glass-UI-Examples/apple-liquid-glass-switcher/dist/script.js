const switcher = document.querySelector(".switcher");
const switcher2 = document.querySelector(".switcher2");

const trackPrevious = (el) => {
  const radios = el.querySelectorAll('input[type="radio"]');
  let previousValue = null;

  // init first select
  const initiallyChecked = el.querySelector('input[type="radio"]:checked');
  if (initiallyChecked) {
    previousValue = initiallyChecked.getAttribute("c-option");
    el.setAttribute("c-previous", previousValue);
  }

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        el.setAttribute("c-previous", previousValue ?? "");
        previousValue = radio.getAttribute("c-option");
      }
    });
  });
};

trackPrevious(switcher);

const themeRadios = switcher2.querySelectorAll('input[type="radio"]');
themeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        document.body.classList.remove('dark', 'dim');
        if (radio.checked) {
            document.body.classList.add(radio.value);
        }
    });
});
