import $ from "jquery";
function doStatistics() {
  let counter = 0;
  const listener = () => counter++;
  $("body").on("click", listener);
  //document.addEventListener("click", listener);

  return {
    getClicks() {
      return counter;
    },
  };
}

window.statistics = doStatistics();
