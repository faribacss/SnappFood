const logIn = document.querySelector("button.log-btn");
const popUp = document.querySelector(".modal-pop");
const closeI = document.querySelector(".close");
const section = document.querySelector('.sec-1');
const search = document.querySelector('.search');
const image = document.querySelector('.img-1');
const header = document.querySelector('.header');

logIn.addEventListener("click", () => {
  popUp.style.display = "block";
  popUp.classList.add("pop-up");
});
window.addEventListener("click", (e) => {
  if (e.target == section || e.target == search || e.target == image || e.target == header || e.target == closeI) {
    popUp.style.display = "none";
  }
});

const mapUp = document.querySelector('.search-btn');
const mapBox = document.querySelector('.map');
const mapBoxClose = document.querySelector(".closee");

mapUp.addEventListener('click', ()=>{
    mapBox.style.display = 'block';
})
window.addEventListener("click", (e) => {
  if (
    e.target == section ||
    e.target == search ||
    e.target == image ||
    e.target == header ||
    e.target == mapBoxClose
  ) {
    mapBox.style.display = "none";
  }
});



const changeable = document.getElementById("change");
const items = ["غذا", "نان", "خواروبار", "قهوه", "پیتزا"];
let index = 0;

function updateText() {
  changeable.textContent = items[index];
  // حذف کلاس انیمیشن قبلی و ریست کردن انیمیشن برای آیتم جدید
  changeable.classList.remove("animate");
  void changeable.offsetWidth; // ریست کردن انیمیشن
  changeable.classList.add("animate");

  index = (index + 1) % items.length;
}
setInterval(updateText, 2000);
