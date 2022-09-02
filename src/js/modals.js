// Funcion para mostrar y ocultar modals de los servicios
// Funcion para mostrar y ocultar modals de los servicios
let card1 = document.querySelector("#marketing");
let card2 = document.querySelector("#SEO");
let card3 = document.querySelector("#social-media");
let card4 = document.querySelector("#content-creation");
let allBtnCards = document.querySelectorAll(".plus-icon");
let modal = document.querySelector(".modal");

allBtnCards.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let card = e.target.parentElement;

        if (card.id == "marketing") {
            modal.classList.add("show-modal");
            modal.id = "marketing-modal";
            cuerpo.style.overflow = "hidden";
            modal.innerHTML =`
            <h3>Marketing</h3>
            <p><span style="color: #FF7223">I create the strategic plan</span> for social media platforms, such as Instagram, TikTok, and Facebook, including Facebook ads,Instagram ads, and Google ads. Google analytics, all kinds of digital campaigns and email marketing</p>
            <h6 style="color: #FF7223; cursor: pointer">Close</h6>`;
        } else if (card.id == "SEO") {
            modal.classList.add("show-modal");
            modal.id = "SEO-modal";
            cuerpo.style.overflow = "hidden";
            modal.innerHTML =`
            <h3>SEO</h3>
            <p>SEO off-page and on-page <span style="color: #FF7223"> we can create a good strategy </span> for your business and make it work for you</p>
            <h6 style="color: #FF7223; cursor: pointer">Close</h6>`;
        } else if (card.id == "social-media") {
            modal.classList.add("show-modal");
            modal.id = "social-media-modal";
            cuerpo.style.overflow = "hidden";
            modal.innerHTML =`
            <h3>Social Media Management</h3>
            <p style="color: #FF7223">posting commenting, and running the different <span style="color: #D9487D">accounts you may have</span></p>
            <h6 style="color: #FF7223; cursor: pointer">Close</h6>`;
        }  else if (card.id == "content-creation") {
            modal.classList.add("show-modal");
            modal.id = "content-creation-modal";
            cuerpo.style.overflow = "hidden";
            modal.innerHTML =`
            <h3>Content Creation</h3>
            <p>blogs, newsletters, photography and video <span style="color: #FF7223">content creation</span> according to the platforms we are working with.</p>
            <h6 style="color: #FF7223; cursor: pointer">Close</h6>`;
        }
    });
});

// Cerrando los modals
modal.addEventListener("click", () => {
    modal.classList.remove("show-modal");
    cuerpo.style.overflow = "";
});

