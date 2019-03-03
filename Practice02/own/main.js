var loading = "./images/loading.gif"
var imgs = ["https://uploads.disquscdn.com/images/4d5ed32f4e04aec026ec350333705bd77ad6082e87488f47cc2c8339aa5b4ec9.jpg",
"https://i.imgur.com/tTJxt5E.png", 
"https://img.moegirl.org/common/9/97/GC_meizhongjian.jpg",
"https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.15752-9/52977071_410050456480025_6646796468512358400_n.jpg?_nc_cat=104&_nc_ht=scontent.ftpe7-2.fna&oh=8e7bac6ae4c02acd3382bdd2030155cc&oe=5CE3A6C6",
"https://i.imgur.com/7Ibwd2a.jpg",
"https://pic.pimg.tw/always1027/1419314490-2806041304_n.jpg",
"https://images.alphacoders.com/719/thumb-1920-719514.png",
"https://i.pinimg.com/originals/6e/6d/a2/6e6da227e499dc24911b2b0d1c47e87c.jpg",
"https://wallpapers-all.com/uploads/posts/2017-03/14_clockwork_planet.jpg"]
var count = 0
img = document.getElementById("display")
url = document.getElementById("URL")
backIcon = document.getElementById("back")
nextIcon = document.getElementById("next")
topIcon  = document.getElementById("top")
endIcon  = document.getElementById("end")
now     = document.getElementById("now")
total    = document.getElementById("total")
total.innerHTML = imgs.length
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
load = function(){
    img.src= loading
}
adj = function(){
    load()
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
    img.src       = imgs[count]
    url.innerHTML = imgs[count]
    now.innerHTML= count+1
    img.id        = "display"
}