// $(function() {
//   $('.hamburger').click(function() {
//       $(this).toggleClass('active');

//       if ($(this).hasClass('active')) {
//           $('.globalMenuSp').addClass('active');
//       } else {
//           $('.globalMenuSp').removeClass('active');
//       }
//   });
// });
console.log("こんにちは");
const hamburger = document.querySelector('.hamburger');
const glob = document.querySelector('.globalMenuSp');

hamburger.addEventListener("click",()=>{
  // console.log(hamburger);
  hamburger.classList.toggle("active");

  if (hamburger.classList.contains("active")){
    glob.classList.add("active");
  }
  else {
    glob.classList.remove("active");
    }
});