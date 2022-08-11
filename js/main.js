

$('.navbar ul li a').click(function(){
    $(this).css('color' , '#FF443A')
    $(this).parent().siblings().find("a").css('color' , '#fff')
})

var typed = new Typed('.typing', {
    strings: ['a Developer.', 'a Designer.'],
    smartBackspace: true ,// Default value
    typeSpeed: 100,
    backSpeed: 100,
    loop:true,
    loopCount: Infinity 
  });
//  let about =  document.getElementById('about'),
//     nav = document.getElementsByClassName('navbar')
  // var offs = about.offsetTop
//   console.log(offs);
  // $(window).scroll(function(){
  //   if($(window).scrollTop() >= offs){
  //   // $('.navbar').css({'backgroundColor' : 'rgba(116, 32, 141, 0.548)' , 'transition' : 'all .3s'});
  //   // alert('ihgg')
  //   }
  // })

 

//   $(window).scroll(function(){ fadeInRightBig
 $('.mobile-link').click(function(){
  // $(this).addClass('.active');
  $(this).css('color', 'red ');
  $(this).parent().siblings().find('.mobile-link').css('color' , '#000');
  // $('body section').removeClass('fadeInRightBig');
  // $('body section').addClass('fadeIn');
  // $('body section').replaceClass('fadeInRightBig' ,'fadeIn');
  let currentHref = $(this).attr('href');
  $('body section').hide();
  $(currentHref).show();
  new WOW().init();
 })
 
//   })
  $('.link').click(function(){
     let currentHref = $(this).attr('href');
     $('body section').hide();
     $(currentHref).show();
     new WOW().init();
    //  console.log(currentHref);
    //  currentOffset = $(currentHref).offsetTop;
    //  console.log(currentOffset);
    //  $('body,html').animate({scrollTop:currentOffset } , 1000)
  })