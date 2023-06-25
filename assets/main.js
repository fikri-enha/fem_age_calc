document.addEventListener("DOMContentLoaded", () => {
  const caclButton = document.getElementById("buttoncalc");

  let inputDay = document.getElementById("dayInput");
  let inputMonth = document.getElementById("monthInput");
  let inputYear = document.getElementById("yearInput");

  const Sekarang = new Date();

  const tahunSkrg = Sekarang.getFullYear()
  const bulanSkrg = Sekarang.getMonth()
  const tglSkrg = Sekarang.getDate()

  caclButton.addEventListener("click", () => {
    document.getElementById('yearResult').innerHTML = tahunSkrg - inputYear.value
    document.getElementById('monthResult').innerHTML = bulanSkrg - inputMonth.value
    document.getElementById('dayResult').innerHTML = tglSkrg - inputDay.value
  });
});
