let card1=document.querySelector("#marketing"),card2=document.querySelector("#SEO"),card3=document.querySelector("#social-media"),card4=document.querySelector("#content-creation"),allBtnCards=document.querySelectorAll(".plus-icon"),modal=document.querySelector(".modal");allBtnCards.forEach(a=>{a.addEventListener("click",b=>{let a=b.target.parentElement;"marketing"==a.id?(modal.classList.add("show-modal"),modal.id="marketing-modal",cuerpo.style.overflow="hidden",modal.innerHTML=`
            <h3>Marketing</h3>
            <p>blogs, newsletters, photography and video <span style="color: #FF7223">content creation</span> according to the platforms we are working with.</p>
            <h6 style="color: #FF7223; cursor: pointer">Close</h6>`):"SEO"==a.id?(modal.classList.add("show-modal"),modal.id="SEO-modal",cuerpo.style.overflow="hidden",modal.innerHTML=`
            <h3>SEO</h3>
            <p>SEO off-page and on-page <span style="color: #FF7223"> we can create a good strategy </span> for your business and make it work for you</p>
            <h6 style="color: #FF7223; cursor: pointer">Close</h6>`):"social-media"==a.id?(modal.classList.add("show-modal"),modal.id="social-media-modal",cuerpo.style.overflow="hidden",modal.innerHTML=`
            <h3>Social Media Management</h3>
            <p style="color: #FF7223">posting commenting, and running the different <span style="color: #D9487D">accounts you may have</span></p>
            <h6 style="color: #FF7223; cursor: pointer">Close</h6>`):"content-creation"==a.id&&(modal.classList.add("show-modal"),modal.id="content-creation-modal",cuerpo.style.overflow="hidden",modal.innerHTML=`
            <h3>Content Creation</h3>
            <p><span style="color: #FF7223">I create the strategic plan</span> for social media platforms, such as Instagram, TikTok, and Facebook, including Facebook ads,Instagram ads, and Google ads. Google analytics, all kinds of digital campaigns and email marketing</p>
            <h6 style="color: #FF7223; cursor: pointer">Close</h6>`)})}),modal.addEventListener("click",()=>{modal.classList.remove("show-modal"),cuerpo.style.overflow=""})