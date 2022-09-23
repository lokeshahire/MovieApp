var i = 0;
var img = [];
var time = 2000;

img[0] =
  "https://product-assets.faasos.io/production/product/image_1618561895209_Faasos%20Chinese%20wraps_website%20banner%20%281%29.jpg";
img[1] =
  "https://product-assets.faasos.io/production/product/image_1620280380694_Banner%201%20%281%29.jpg";
img[2] =
  "https://product-assets.faasos.io/production/product/image_1620280991048_Faasos%20Combo_3%20May_Classic%20Wraps%20%281%29.jpg";
img[3] =
  "https://product-assets.faasos.io/production/product/image_1620280934986_Faasos%20Combo_3%20May_Signature%20Wraps%20%281%29%20%281%29.jpg";
img[4] =
  "https://product-assets.faasos.io/production/product/image_1620280934986_Faasos%20Combo_3%20May_Signature%20Wraps%20%281%29%20%281%29.jpg";

function changeImg() {
  document.slide.src = img[i];

  if (i < img.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", 4000);
}

window.onload = changeImg;

var data = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xkjXja7NvXG5CSBm9AVT7Lda2comKJ9XuQ&usqp=CAU",
    moviename: "Jai Bhim",
    category: "Crime,Drama",
    rating: 9.4,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTICSLoSVaBO95K3_EyS21stRBWHT6IhEmprA&usqp=CAU",
    moviename: "The Shawshank Redemption",
    category: "Drama",
    rating: 9.3,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDc9ZyQJfhfaVSu6QN_qnRmFjsFgbtJSH3Q&usqp=CAU",
    moviename: "The Godfather",
    category: "Crime,Drama",
    rating: 9.2,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgtpt5eyL66DfRI2RDIZNc1CpqCjhDckl2w&usqp=CAU",
    moviename: "The Dark Knight",
    category: "Action,Crime,Drama",
    rating: 9,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBV8rK_dluA4rcRQwowsdXB7JuonBmPP_dZg&usqp=CAU",
    moviename: "The Godfather: Part II",
    category: "Crime,Drama",
    rating: 9,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcIk9EoKccWXqbwFJmMrYCjhzhMuNhfl_4A&usqp=CAU",
    moviename: "12 Angry Men",
    category: "Crime,Drama",
    rating: 9.4,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgtpt5eyL66DfRI2RDIZNc1CpqCjhDckl2w&usqp=CAU",
    moviename: "Sprider-Man:No Way Home",
    category: "Crime,Drama",
    rating: 9.4,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTp7h_eYC7U1w2hTCUrciDPobvwg2vuig7Ew&usqp=CAU",
    moviename: "The Lord of the Rings:The Return of the King",
    category: "Crime,Drama",
    rating: 9.4,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_b5dEYJNSOTjW9RuiszPISiWQ19qR0Xwzw&usqp=CAU",
    moviename: "Pulp Fiction",
    category: "Crime,Drama",
    rating: 9.4,
  },
];
displayMovies(data);
function displayMovies(data) {
  document.querySelector("#movies").textContent = "";
  data.map(function (data) {
    var box = document.createElement("div");
    box.setAttribute("class", "movies-card");
    document.querySelector("#movies").append(box);

    var image = document.createElement("img");
    image.setAttribute("src", data.image);
    image.setAttribute("class", "image");

    var text = document.createElement("div");

    var moviename = document.createElement("h3");
    moviename.textContent = data.moviename;
    moviename.setAttribute("class", "moviename");

    var category = document.createElement("p");
    category.textContent = data.category;
    category.setAttribute("class", "category");

    var rating = document.createElement("p");
    rating.textContent = data.rating;
    rating.setAttribute("class", "rating");

    var star = document.createElement("img");
    star.setAttribute(
      "src",
      "https://image.shutterstock.com/image-vector/black-star-vector-icon-260nw-691104247.jpg"
    );
    star.setAttribute("class", "star");

    var box2 = document.createElement("div");
    box2.setAttribute("class", "box3");
    box2.append(rating, star);

    text.append(moviename, category, box2);
    box.append(image, text);

    document.querySelector("#movies").append(box);
  });
}

function sortticket() {
  console.log("hello world");
  var sort = document.querySelector("#sort-buttons").value;
  if (sort === "high") {
    // console.log("high")
    data.sort(function (a, b) {
      return b.rating - a.rating;
    });
  } else if (sort == "low") {
    // console.log("low")
    data.sort(function (a, b) {
      return a.rating - b.rating;
    });
  }
  displayMovies(data);
}
