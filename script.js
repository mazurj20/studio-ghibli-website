let filmUrl = "https://ghibliapi.herokuapp.com/films"

let filmImages = {}
let imageArray = [
    "https://cdn.coil.com/images/KQKt1nlBQB-ArZLCDQkugQ.jpg",
    "background-image: url(https://static01.nyt.com/images/2019/01/04/arts/04grave1/grave1-videoSixteenByNineJumbo1600.jpg",
    "https://www.denofgeek.com/wp-content/uploads/2012/11/totoro-main.jpg?fit=640%2C380",
    "https://i.guim.co.uk/img/media/aa5f12bac3ba95322c58929eab0303262dc20340/321_175_1509_905/master/1509.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=242ea5b7b0adae22bb80a3161a6c337f",
    "https://www.indiewire.com/wp-content/uploads/2016/12/princess-mononoke_592x299-7.jpg",
    "https://www.intofilm.org/intofilm-production/2111/scaledcropped/1170x658/resources/2111/spirited-away-ep-buena-vista.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQst3EqC_3u6QTgwMtd9xjtfw6fXkQHZF7gsQ&usqp=CAU",
    "https://kpbs.media.clients.ellingtoncms.com/img/croppedphotos/2009/08/15/pon_103_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d",
    "https://hbomax-images.warnermediacdn.com/images/GXrHaVgM1yKu9KwEAAAAl/tile.jpeg?size=1280x720&format=jpeg&partner=hbomaxcom&productCode=hbomax&host=artist.api.cdn.hbo.com&w=480"

]

fetch(filmUrl)
    .then(res => res.json())
    .then(res => {
    for (i=0;i<9;i++) {
       filmImages[`${res[i].id}`] = {}
    }
        for (let i=0;i<9;i++) {
            filmImages[`${res[i].id}`].img = imageArray[i]
        }
    
    
    })

console.log(filmImages)


