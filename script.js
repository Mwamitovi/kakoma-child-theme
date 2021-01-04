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
      
});