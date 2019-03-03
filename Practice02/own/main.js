var imgs = ["http://livedoor.blogimg.jp/ren_ka_blog/imgs/1/3/130bdb0c.png", 
"https://img.moegirl.org/common/9/97/GC_meizhongjian.jpg", 
"https://uploads.disquscdn.com/images/4d5ed32f4e04aec026ec350333705bd77ad6082e87488f47cc2c8339aa5b4ec9.jpg",
"https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.15752-9/52977071_410050456480025_6646796468512358400_n.jpg?_nc_cat=104&_nc_ht=scontent.ftpe7-2.fna&oh=8e7bac6ae4c02acd3382bdd2030155cc&oe=5CE3A6C6",
"https://i.imgur.com/7Ibwd2a.jpg"]
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

adj = function(){
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
}