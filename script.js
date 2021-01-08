jQuery(document).ready(function( $ ){
  /* Home page
   ========================================================================== */
   
  // create title/content divider within post cards
  $(".post--grid .elementor-posts .elementor-post__card .elementor-post__text > .elementor-post__title").each(function() {
    $(this).after(
      '<div class="custom-divider"><span class="post--title-divider"><span></div>'
    );
  });

  // append ellipsis within to post content
  $(".post--grid .elementor-posts .elementor-post__card .elementor-post__excerpt > p").each(function() {
    $(this).replaceWith($(this).html(function() {
      var text = $(this).text().slice(0,-1);
       
      return text + "...";
    }));
  });

  // append ellipsis within to post content
  $(".project--title .elementor-column-wrap .elementor-widget-wrap > div:last-child .elementor-heading-title").each(function() {
    $(this).replaceWith($(this).html(function() {
      var text = $(this).text();
       
      return "(" + text + ")";
    }));
  });


  /* About me page
   ========================================================================== */

  // support dynamic styling based on size
  $(window).resize(function() {
    if ($(window).width() < 1025) {

      // about-me page
      $('.about-me-section').removeClass('responsive-size');
      $('.about-me--inner-section').addClass('responsive-size');      

      // contact-me page
      $('.contact-me-section').removeClass('responsive-size');
      $('.contact-me--inner-section').addClass('responsive-size');

    } else {

      // about-me page
      $('.about-me-section').addClass('responsive-size');
      $('.about-me--inner-section').removeClass('responsive-size');      

      // contact-me page
      $('.contact-me-section').addClass('responsive-size');
      $('.contact-me--inner-section').removeClass('responsive-size');

    }
  }).resize(); // trigger resize event initially


  /* Portfolio page
   ========================================================================== */

  // handle "more projects" navigation
  $(".more-projects-section .button--grid .elementor-widget-wrap > .elementor-widget-button:first-child").click(function(event) {
    event.preventDefault();
    // button switch
    $(this).addClass('active');
    $(".more-projects-section .button--grid .elementor-widget-wrap > .elementor-widget-button:not(:first-child)").removeClass('active');
    // change posts
    $(".projects--list .elementor-row .elementor-widget-wrap > .elementor-widget-posts:first-child").addClass('show');
    $(".projects--list .elementor-row .elementor-widget-wrap > .elementor-widget-posts:not(:first-child)").removeClass('show');
  });

  $(".more-projects-section .button--grid .elementor-widget-wrap > .elementor-widget-button:nth-child(2)").click(function(event) {
    event.preventDefault();

    $(this).addClass('active');
    $(".more-projects-section .button--grid .elementor-widget-wrap > .elementor-widget-button:not(:nth-child(2))").removeClass('active');

    $(".projects--list .elementor-row .elementor-widget-wrap > .elementor-widget-posts:nth-child(2)").addClass('show');
    $(".projects--list .elementor-row .elementor-widget-wrap > .elementor-widget-posts:not(:nth-child(2))").removeClass('show');
  });

  $(".more-projects-section .button--grid .elementor-widget-wrap > .elementor-widget-button:nth-child(3)").click(function(event) {
    event.preventDefault();

    $(this).addClass('active');
    $(".more-projects-section .button--grid .elementor-widget-wrap > .elementor-widget-button:not(:nth-child(3))").removeClass('active');

    $(".projects--list .elementor-row .elementor-widget-wrap > .elementor-widget-posts:nth-child(3)").addClass('show');
    $(".projects--list .elementor-row .elementor-widget-wrap > .elementor-widget-posts:not(:nth-child(3))").removeClass('show');
  });

  $(".more-projects-section .button--grid .elementor-widget-wrap > .elementor-widget-button:last-child").click(function(event) {
    event.preventDefault();

    $(this).addClass('active');
    $(".more-projects-section .button--grid .elementor-widget-wrap > .elementor-widget-button:not(:last-child)").removeClass('active');

    $(".projects--list .elementor-row .elementor-widget-wrap > .elementor-widget-posts:last-child").addClass('show');
    $(".projects--list .elementor-row .elementor-widget-wrap > .elementor-widget-posts:not(:last-child)").removeClass('show');  
  });

  /* Blog page
  ========================================================================== */
    
  // toggle "image" functionality
  $(".main-blog--inner-section .elementor-row > .elementor-column:not(:first-child) .elementor-widget-wrap > div.toggle--img:nth-child(2)").click(
    function(event) {

    event.preventDefault();

    // switch sections
    $(".main-blog-section.engineer").addClass('show');
    $(".main-blog-section.design").removeClass('show');

    // handle "active" image
    $(this).addClass("active");
    $(".main-blog-section.engineer .main-blog--inner-section .elementor-row > .elementor-column:not(:first-child) .elementor-widget-wrap > div.toggle--img:not(:nth-child(2))").removeClass('active');

  });

  $(".main-blog--inner-section .elementor-row > .elementor-column:not(:first-child) .elementor-widget-wrap > div.toggle--img:nth-child(4)").click(
    function(event) {

    event.preventDefault();

    // switch sections
    $(".main-blog-section.engineer").removeClass('show');
    $(".main-blog-section.design").addClass('show');

    // handle "active" image
    $(this).addClass("active");
    $(".main-blog-section.design .main-blog--inner-section .elementor-row > .elementor-column:not(:first-child) .elementor-widget-wrap > div.toggle--img:not(:nth-child(4))").removeClass('active');

  });

  // toggle "button" functionality
  $(".toggle-section .toggle--button-trigger").click(
    function(event) {

    event.preventDefault();

    // switch on/off
    $(".lg-size.toggle--button-trigger, .md-size.toggle--button-trigger").toggleClass('align-right');
    // switch sections
    $(".main-blog-section.engineer, .main-blog-section.design").toggleClass('show');

  });

  // handle "category" navigation
  $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:first-child .elementor-button").click(function(event) {
    event.preventDefault();
    // button switch
    $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:first-child").addClass('active');
    $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:not(:first-child)").removeClass('active');
    // change "category"
    $(".main-blog-section .elementor-row .elementor-widget-wrap > section:nth-child(3)").addClass('show');
    $(".main-blog-section .elementor-row .elementor-widget-wrap > section:not(:nth-child(3))").removeClass('show');
  });

  $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:nth-child(2) .elementor-button").click(function(event) {
    event.preventDefault();

    $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:nth-child(2)").addClass('active');
    $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:not(:nth-child(2))").removeClass('active');
  
    $(".main-blog-section .elementor-row .elementor-widget-wrap > section:nth-child(4)").addClass('show');
    $(".main-blog-section .elementor-row .elementor-widget-wrap > section:not(:nth-child(4))").removeClass('show');
  });

  $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:nth-child(3) .elementor-button").click(function(event) {
    event.preventDefault();

    $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:nth-child(3)").addClass('active');
    $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:not(:nth-child(3))").removeClass('active');
  
    $(".main-blog-section .elementor-row .elementor-widget-wrap > section:nth-child(5)").addClass('show');
    $(".main-blog-section .elementor-row .elementor-widget-wrap > section:not(:nth-child(5))").removeClass('show');
  });

  $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:nth-child(4) .elementor-button").click(function(event) {
    event.preventDefault();

    $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:nth-child(4)").addClass('active');
    $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:not(:nth-child(4))").removeClass('active');
  
    $(".main-blog-section .elementor-row .elementor-widget-wrap > section:nth-child(6)").addClass('show');
    $(".main-blog-section .elementor-row .elementor-widget-wrap > section:not(:nth-child(6))").removeClass('show');
  });

  $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:last-child .elementor-button").click(function(event) {
    event.preventDefault();

    $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:last-child").addClass('active');
    $(".main-blog-section .btn--nav .button--grid .elementor-widget-button:not(:last-child)").removeClass('active');
  
    $(".main-blog-section .elementor-row .elementor-widget-wrap > section:last-child").addClass('show');
    $(".main-blog-section .elementor-row .elementor-widget-wrap > section:not(:last-child").removeClass('show');
  });

});




