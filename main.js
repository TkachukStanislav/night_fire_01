// S triangle = (1/2)*h*b
// S rectangle = h*b
// S average = a+b/2

document.getElementById("but_tr").addEventListener("click", (ev) => {
  let results = document.getElementById("results");
  results.innerHTML =
    `Трикутник ${document.getElementById("inp_a").value} ${
      document.getElementById("inp_b").value
    }: ` +
    (document.getElementById("inp_a").value *
      document.getElementById("inp_b").value) /
      2 +
    "<br>" +
    results.innerHTML;
  checkClear();
});
document.getElementById("but_rc").addEventListener("click", (ev) => {
  let results = document.getElementById("results");
  results.innerHTML =
    `Прямокутник ${document.getElementById("inp_a").value} ${
      document.getElementById("inp_b").value
    }: ` +
    document.getElementById("inp_a").value *
      document.getElementById("inp_b").value +
    "<br>" +
    results.innerHTML;
  checkClear();
});
document.getElementById("but_ar").addEventListener("click", (ev) => {
  let results = document.getElementById("results");
  results.innerHTML =
    `СР ${document.getElementById("inp_a").value} ${
      document.getElementById("inp_b").value
    }: ` +
    (Number(document.getElementById("inp_a").value) +
      Number(document.getElementById("inp_b").value)) /
      2 +
    "<br>" +
    results.innerHTML;
  checkClear();
});
document.getElementById("clear").addEventListener("click", () => {
  let results = document.getElementById("results");
  results.innerHTML = "";
  document.getElementById("clear").style.display = "none";
});

function checkClear() {
  let results = document.getElementById("results");
  if (results.children.length > 1) {
    document.getElementById("clear").style.display = "block";
  }
}