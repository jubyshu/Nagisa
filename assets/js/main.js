$("#back-top").hide();
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
      $("#back-top").fadeIn();
    } else {
      $("#back-top").fadeOut();
    }
  });
  $("#back-top a").click(function() {
    $("body, html").animate(
      {
        scrollTop: 0
      },
      800
    );
    return false;
  });
});

let toc = document.querySelector(".post-toc");
function tocShow() {
  let clientHeight = document.documentElement.clientHeight;
  let clientWidth = document.documentElement.clientWidth;
  let tocWrapper = document.querySelector(".content-wrapper__inner");
  let leftMargin =
    (clientWidth - tocWrapper.clientWidth) / 2 - toc.clientWidth - 50;
  if (toc.clientHeight < clientHeight * 0.6 && leftMargin >= 50) {
    toc.style.visibility = "visible";
  } else {
    toc.style.visibility = "hidden";
  }
}
if (!!toc) {
  window.addEventListener("resize", tocShow, false);
  tocShow();
}

function tocScroll() {
  let alis = $(".post :header");
  let toc_alis = $(".post-toc").find("a");
  let scroll_height = $(window).scrollTop();
  for (let i = 0; i < alis.length; i++) {
    let a_height = $(alis[i]).offset().top;
    if (a_height < scroll_height) {
      toc_alis.removeClass("active");
      $(toc_alis[i]).addClass("active");
    }
  }
}
$(function() {
  $(window).bind("scroll", tocScroll);
});

$(document).ready(function() {
  let coll = document.querySelectorAll('.collapsible');
  for (let i = 0; i < coll.length; i++) {
    let firstcoll = coll[0].nextElementSibling;
    firstcoll.style.display = 'block';
    coll[i].addEventListener('click', function() {
      let collcontent = this.nextElementSibling;
      if (collcontent.style.display === 'block') {
        collcontent.style.display = 'none';
      } else {
        collcontent.style.display = 'block';
      }
    });
  }
})

if ($("div.gitlab-embed-snippets")) {
  $("div.gitlab-embed-snippets").attr("id", "gitlab-gist");
}
