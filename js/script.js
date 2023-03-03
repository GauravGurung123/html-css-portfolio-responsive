// // // Add smooth scrolling when clicking on anchor links
// // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// // anchor.addEventListener('click', function (e) {
// //     e.preventDefault();
// //     document.querySelector(this.getAttribute('href')).scrollIntoView({
// //     behavior: 'smooth'
// //     });
// // });
// // });

// // //Add class in header when scrolling
// // const header = document.querySelector("header");
// // window.addEventListener("scroll", () => {
// // if (window.scrollY > 0) {
// //     header.classList.add("header-scrolled");
// // } else {
// //     header.classList.remove("header-scrolled");
// // }
// // })

// // //Add color in active navigation link of menu
// // const menuItems = document.querySelectorAll(".navbar-menu-list");
// // menuItems.forEach((item) => {
// //   item.addEventListener("click", () => {
// //     menuItems.forEach((item) => {
// //       item.classList.remove("active");
// //     });
// //     item.classList.add("active");
// //   });
// // });


// // function highOderFN (fn=()=>{} ) {
// //   return fn()
// //  }
 
// //  highOderFN (()=>{return "hello from another fn"})
 
// //  highOderFN.nameFn= "Test"


// const person1 = {
//   name: 'Ujwal',
//   money: 200,
//   borrow(amount){
//     return this.money =  this.money+ amount
//   }
// }
// const person2 = {
//   name: "Bishal",
//   money: 1000,
//   borrow(amount){
//     return this.money =  this.money+ amount
//   }
// }
// person2.borrow.call(person1,800)
// console.log(person1.money)

const obj = {
  name: "test",
  test: function(){
    console.log(this)
    let anotherTest = function(){
      console.log(this)
    }
    anotherTest.bind(this)
  }
}

obj.test()
obj.test(anotherTest(this))




















































