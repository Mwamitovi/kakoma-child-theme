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

});




