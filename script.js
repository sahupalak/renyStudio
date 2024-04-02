
function locomotiveanime(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
     lerp:0.5,
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    
    });
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    
}
locomotiveanime()


function page1TextAni(){
gsap.to('#page1 img',{
    scale:1.2,
    duration:4,
})


gsap.to('#h1-text h1',{
    y:-20,
    duration:5,
    stagger:true,
    scrollTrigger:{
     trigger:"#h1-text",
     scroller:'#main',
    //  markers:true,
     start:"top 10%",
     end:"bottom 70%",
     scrub:2
    }
})
}
page1TextAni()


function splitTextAni(){
var  text = document.querySelector('#page3-para p').textContent
var splittedText = text.split(" ")


var textAni = "";
splittedText.forEach(function(elem){
 textAni += `<span>${elem}</span>` + " "

})

document.querySelector(' #page3-para p').innerHTML = textAni

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        pin:true,
        // start:"top top",
        end:"bottom top",
        // markers:true,
        scrub:2,
        pin:true,
    }
})
tl.from("#page3-para span",{
    // opacity:1,
    color:'#f9eedb51',
    duration:0.77,
    stagger:0.15,
    // ease:"back.out",
},'a')

tl.to("#page3-para span",{
    // opacity:,
    delay:0.3,
    color:"#F9EEDB",
    stagger:0.15,
},'a')
}
splitTextAni()


function mouseFollower1(){
var card = document.querySelectorAll('.card').forEach(function(elem){

    var crsr = document.querySelector('#cursor-1');
    
    elem.addEventListener('mouseenter', function() {
        crsr.style.transform = 'translate(-50%,-50%) scale(1)';
        // crsr.style.opacity = 1;

    });

    elem.addEventListener('mousemove', function(dets) {
        crsr.style.top = dets.y + "px";
        crsr.style.left = dets.x + "px";
    });
    
    elem.addEventListener('mouseleave', function() {
        crsr.style.transform = 'translate(-50%,-50%) scale(0)';
        // crsr.style.opacity = 0;
      
    });
    
})
}
mouseFollower1();



function mouseFollower2(){
var Container = document.querySelector('#page9-navbar');
var crsr2 = document.querySelector('#cursor-2');

Container.addEventListener('mouseenter', function() {
    crsr2.style.transform = 'scale(1)';
    crsr2.style.opacity = 1;
});

Container.addEventListener('mousemove', function(dets) {
    crsr2.style.top = dets.y + "px";
    crsr2.style.left = dets.x + "px";
});

Container.addEventListener('mouseleave', function() {
    crsr2.style.transform = 'scale(0)';
    crsr2.style.opacity = 0;
})
}
mouseFollower2();




// var changingText = document.querySelectorAll('.changing-text')
// var words = document.querySelectorAll('.changing-text span')

// clutter = 0;

// changingText.forEach(function(){
//     `<div class="changing-text">
//     <span>creative</span>
//   </div>
//   <div class="changing-text">
//     <span>valuable</span>
//   </div>
//   <div class="changing-text">
//     <span>powerful</span>
//   </div>
//   <div class="changing-text">
//     <span>sensible</span>
//   </div>
//   <div class="changing-text">
//     <span>important</span>
//   </div>
//   <div class="changing-text">
//     <span>that matters</span>
//   </div>
//   <div class="changing-text">
//     <span>that changes things</span>
//   </div>
//   <div class="changing-text">
//     <span>move you</span>
//   </div>
//   <div class="changing-text">
//     <span>move me</span>
//   </div>
//   <div class="changing-text">
//     <span>creative</span>
//   </div>
//     `

// },1000)



var words = ["creative", "valuable", "powerful", "sensible", "important", "that matters", "that changes things", "move you", "move me"];

  var changingText = document.querySelectorAll('.changing-text span');

  function changeText() {
    changingText.forEach(function(element, index) {
      setTimeout(function() {
        element.textContent = words[index % words.length];
      }, index * 1000);
    });
  }

  changeText();
  setInterval(changeText, words.length * 1000);