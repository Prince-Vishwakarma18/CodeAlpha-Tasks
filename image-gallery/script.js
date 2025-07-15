let images = document.querySelectorAll(".gallery-img img");
let buttons = document.querySelectorAll(".buttons button");

let crossBtn = document.querySelector(".cross-btn");
let cross = document.querySelector(".close");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

let popupImg = document.createElement("img");
popupImg.classList.add("popup-img");
crossBtn.insertBefore(popupImg, crossBtn.firstChild);

let currentIdx = 0;
let visibleImages = Array.from(images);

buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let category = btn.getAttribute("data-action");
        visibleImages = [];
        images.forEach(function (img) {
            let imgCategory = img.getAttribute("data-action");

            if (btn.classList.contains("all")) {
                img.style.display = "block";
                visibleImages.push(img);
            } else if (imgCategory === category) {
                img.style.display = "block";
                visibleImages.push(img);
            } else {
                img.style.display = "none";
            }
        });
    });
});

// Img click
images.forEach((img) => {
    img.addEventListener("click", () => {
        visibleImages = Array.from(images).filter(img => img.style.display !== "none");

        for (let i = 0; i < visibleImages.length; i++) {
            if (visibleImages[i].getAttribute("src") === img.getAttribute("src")) {
                currentIdx = i;
                break;
            }
        }

        showPopupImg(img.getAttribute("src"));
    });
});

function showPopupImg(src) {
    popupImg.src = src;
    crossBtn.style.display = "flex";
    document.body.style.overflow = "hidden";
}

//Cross Btn
crossBtn.addEventListener("click", () => {
    crossBtn.style.display = "none";
    document.body.style.overflow = "auto";
});

// Right Btn
right.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIdx++;
    if (currentIdx >= visibleImages.length) {
        currentIdx = 0;
    }
    popupImg.src = visibleImages[currentIdx].getAttribute("src");
});

// left Btn
left.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIdx--;
    if (currentIdx < 0) {
        currentIdx = visibleImages.length - 1;
    }
    popupImg.src = visibleImages[currentIdx].getAttribute("src");
});
