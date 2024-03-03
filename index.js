const imgs = [
  "./images/pingpong.jpg",
  "https://beirutdigitaldistrict.com/wp-content/uploads/2023/06/slide6.jpg",
  "https://beirutdigitaldistrict.com/wp-content/uploads/2023/06/slide4.jpg",
  "https://beirutdigitaldistrict.com/wp-content/uploads/2023/06/slide5.jpg",
  "https://beirutdigitaldistrict.com/wp-content/uploads/2023/06/slide3.jpg",
  "https://beirutdigitaldistrict.com/wp-content/uploads/2023/06/slide2.jpg",
  "https://beirutdigitaldistrict.com/wp-content/uploads/2023/06/slide1.jpg",
];
let imgIndex = Math.floor(Math.random() * imgs.length);
slideShow(imgIndex);

function slideShow(index) {
  document.getElementById(
    "hero-section"
  ).style.backgroundImage = `url('${imgs[index]}')`;
}
setInterval(() => {
  imgIndex = (imgIndex + 1) % imgs.length; // made sure we stay in array and not go out of bounds
  slideShow(imgIndex);
}, 5000);
