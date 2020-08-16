let filmUrl = "https://ghibliapi.herokuapp.com/films"

let filmImages = {}
let imageArray = [
    "https://cdn.coil.com/images/KQKt1nlBQB-ArZLCDQkugQ.jpg",
    "https://static01.nyt.com/images/2019/01/04/arts/04grave1/grave1-videoSixteenByNineJumbo1600.jpg",
    "https://www.denofgeek.com/wp-content/uploads/2012/11/totoro-main.jpg?fit=640%2C380",
    "https://i.guim.co.uk/img/media/aa5f12bac3ba95322c58929eab0303262dc20340/321_175_1509_905/master/1509.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=242ea5b7b0adae22bb80a3161a6c337f",
    "https://i.ytimg.com/vi/FLpX8dkl8g8/maxresdefault.jpg",
    "https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2011/12/1007006.jpg",
    "https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2015/12/POM_POKO_03_1004821.jpg",
    "https://d17389e216ygm.cloudfront.net/wp-content/uploads/CE_whisperoftheheart-1024x576.jpg",
    "https://www.indiewire.com/wp-content/uploads/2016/12/princess-mononoke_592x299-7.jpg",
    "https://lh3.googleusercontent.com/proxy/b3FuBaZznjKuhpKeTHOJsiu46tPaPWeirOcSfBOWXVBzWkONwvY-c_NrLlAIh5uj24Z8P0UxkLwJ2UF9godN1aWevAIAOzPpfbwqDDshEXXPJA",
    "https://www.intofilm.org/intofilm-production/2111/scaledcropped/1170x658/resources/2111/spirited-away-ep-buena-vista.jpg",
    "https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2019/12/cat_07s16c52_t2.0246.jpg"

]

let imageContainer = document.querySelector(".imageContainer")
let picHeader = document.querySelector(".picHeader")
let textHeader = document.querySelector(".textHeader")
let description = document.querySelector("p")
let footer = document.querySelector(".footer")
let title = document.querySelector("h1")
let director = document.querySelector("h2")
let score = document.querySelector("h3")
let year = document.querySelector("h4")

fetch(filmUrl)
    .then(res => res.json())
    .then(res => {
        console.log(res)
    for (i=0;i<imageArray.length;i++) {
       filmImages[`${res[i].id}`] = {}
    }
        for (let i=0;i<imageArray.length;i++) {
            filmImages[`${res[i].id}`].img = imageArray[i]
            let eachFilm = document.createElement("div")
            eachFilm.classList.add("eachFilm")
            let imageLink = document.createElement("a")
            imageLink.setAttribute("href","#")
            imageLink.setAttribute("id",`picture${i}`)
            imageLink.style.backgroundImage = `url(${filmImages[`${res[i].id}`].img})`
            imageContainer.appendChild(eachFilm)
            eachFilm.appendChild(imageLink)

            let pic = document.querySelector(`#picture${i}`)
            pic.addEventListener("click",toggleModal = () => {
            picHeader.style.backgroundImage = `url(${filmImages[`${res[i].id}`].img})`
            title.innerText = res[i].title
            director.innerText = res[i].director
            description.innerText = res[i].description
            score.innerText = res[i].rt_score
            year.innerText = res[i].release_date

            modal.classList.toggle("modalToggle")

            
            })
            
        }
        window.addEventListener("click", (e) =>{
            e.preventDefault()
            if (e.target === modal) {
                toggleModal()
            }
        })
        
    })


    let modal = document.querySelector(".modal")


  

    


/* link.forEach(pic => {
    
    pic.addEventListener("click",toggleModal)
}) */




