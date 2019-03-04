loading = "./images/loading.gif"
imgs = ["https://uploads.disquscdn.com/images/4d5ed32f4e04aec026ec350333705bd77ad6082e87488f47cc2c8339aa5b4ec9.jpg",
"https://i.imgur.com/tTJxt5E.png", 
"https://img.moegirl.org/common/9/97/GC_meizhongjian.jpg",
"https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.15752-9/52977071_410050456480025_6646796468512358400_n.jpg?_nc_cat=104&_nc_ht=scontent.ftpe7-2.fna&oh=8e7bac6ae4c02acd3382bdd2030155cc&oe=5CE3A6C6",
"https://i.imgur.com/7Ibwd2a.jpg",
"https://pic.pimg.tw/always1027/1419314490-2806041304_n.jpg",
"https://images.alphacoders.com/719/thumb-1920-719514.png",
"https://i.pinimg.com/originals/6e/6d/a2/6e6da227e499dc24911b2b0d1c47e87c.jpg",
"https://wallpapers-all.com/uploads/posts/2017-03/14_clockwork_planet.jpg"]
count = 0
total    = document.getElementById("total")
total.innerHTML = imgs.length
img = document.getElementById("display")

nextImg = function(){
    if(count < imgs.length-1){
        ++count
        adj()
    }
}

backImg = function(){
    if(count > 0){
        --count
        adj()
    }
}

topImg = function(){
    count = 0
    adj()
}

endImg = function(){
    count = imgs.length-1
    adj()
}

adj = function(){
    backIcon = document.getElementById("back")
    nextIcon = document.getElementById("next")
    topIcon  = document.getElementById("top")
    endIcon  = document.getElementById("end")
    url = document.getElementById("URL")
    now = document.getElementById("now")
    if(count == 0){
        backIcon.classList.add("disabled")
        topIcon .classList.add("disabled")
    }
    else{
        backIcon.classList.remove("disabled")
        topIcon .classList.remove("disabled")
    }
    if(count == imgs.length-1){
        nextIcon.classList.add("disabled")
        endIcon .classList.add("disabled")  
    }
    else{
        nextIcon.classList.remove("disabled")
        endIcon. classList.remove("disabled")
    }
    url.innerHTML = imgs[count]
    now.innerHTML= count+1
    load()
}

newImg = new Image()
newImg.onload = function(){
    img.id  = "display"
    img.src = newImg.src
}

load = function(){
    img.id           = "loading"
    img.src          = loading
    newImg.src       = imgs[count]
}