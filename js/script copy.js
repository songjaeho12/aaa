window.onload = function () {
  const nav_a = document.querySelectorAll(".bg nav a");
  const bg = document.querySelectorAll(".bg");
  const body = document.querySelector("html,body");
  console.log(nav_a, bg);

  nav_a.forEach(function (target, index) {
    target.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo(0, bg[index].offsetTop);
    });
  });

  nav_a[0].classList.add("active");
  window.addEventListener("scroll", function () {
    for (let i in bg) {
      if (body.scrollTop >= bg[i].offsetTop - 200) {
        re();
        nav_a[i].classList.add("active");
      }
    }
  });

  function re() {
    for (let j of nav_a) {
      j.classList.remove("active");
    }
  }

  $(".bg nav a").on("click", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  const design_a = document.querySelectorAll(".sns a");
  const detail_big_wrap = document.querySelectorAll(".detail_big_wrap");
  const close_btn = document.querySelectorAll(".big .close");
  console.log(detail_big_wrap, design_a);

  design_a.forEach(function (target, index) {
    target.addEventListener("click", function (e) {
      e.preventDefault();
      detail_big_wrap[index].style.display = "block";
    });
    close_btn[index].addEventListener("click", function () {
      detail_big_wrap[index].style.display = "none";
    });
  });
}; /* onload end */
