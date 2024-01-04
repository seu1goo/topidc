(function ($) {
  $(function () {
    var win = $(window);

    $('header').each(function () {
      if (win.width() > 770) {
        $('.gnb > li').on('mouseenter', function () {
          $(this).find('.sub').stop().show();
        });
        $('.gnb > li').on('mouseleave', function () {
          $(this).find('.sub').stop().hide();
        });
      } else if (win.width() > 770) {
        $('.gnb > li').on('click', function () {
          $(this).find('.sub').stop().show();
        });
        $('.gnb > li').on('mouseleave', function () {
          $(this).find('.sub').stop().hide();
        });
      } else if (win.width() < 769) {
        $('.mobBtn').on('click', function () {
          $('nav').animate({
            right: '0'
          }, 800);
        });
        $('.mobClose').on('click', function () {
          $('nav').animate({
            right: '-100%'
          }, 800);
        });
        $('.gnb > li').on('click', function () {
          $(this).find('.sub').addClass('active');
          $(this).siblings().find('.sub').removeClass('active');
        });
      };

      win.on('scroll', function () {
        if (win.width() >= 769) {
          if (win.scrollTop() > 0) {
            $('header').addClass('on');
          } else {
            $('header').removeClass('on');
          }
          return false;
        } else if (win.width() < 769) {
          if (win.scrollTop() > 0) {
            $('header').addClass('mob_on');
          } else {
            $('header').removeClass('mob_on');
          }
        }
      });
    });
    //header

    $('#mainVisual').each(function () {
      $('.visual').eq(0).siblings('.visual').fadeOut();

      var slideI = 0;
      setInterval(function () {
        if (slideI < 4) {
          slideI++;
        } else {
          slideI = 0;
        }
        $('.visual').eq(slideI).siblings('.visual').fadeOut(1000);
        $('.visual').eq(slideI).fadeIn(1000);
      }, 7000);

      if (win.width() > 1025) {
        $('.nextBtn').on('click', function () {
          $('html, body').stop().animate({
            scrollTop: 850
          }, 500);
        });
      } else if (win.width() > 769) {
        $('.nextBtn').on('click', function () {
          $('html, body').stop().animate({
            scrollTop: 1280
          }, 500);
        });
      } else if (win.width() > 641) {
        $('.nextBtn').on('click', function () {
          $('html, body').stop().animate({
            scrollTop: 980
          }, 500);
        });
      } else if (win.width() < 640) {
        $('.nextBtn').on('click', function () {
          $('html, body').stop().animate({
            scrollTop: 650
          }, 500);
        });
      };
    });
    //mainVisual

    $('#servicing').each(function () {
      var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    });
    //servicing

    $('#subVisual').each(function () {
      $('.nextBtn').on('click', function () {
        $('html, body').stop().animate({
          scrollTop: 490
        }, 400)
      });
    });
    //subVisual

    $('.cdnDetail').each(function () {
      if (win.width() < 641) {
        $('.mediaDetail').find('img').attr({
          src: '../_img/sub_cdn_media_mob.png'
        });
        $('.conDetail').find('img').attr({
          src: '../_img/sub_cdn_contents_mob.png'
        });
        $('.caDetail').find('img').attr({
          src: '../_img/sub_cdn_caching_mob.png'
        });
      } else {
        $('.mediaDetail').find('img').attr({
          src: '../_img/sub_cdn_media.png'
        });
        $('.conDetail').find('img').attr({
          src: '../_img/sub_cdn_contents.png'
        });
        $('.caDetail').find('img').attr({
          src: '../_img/sub_cdn_caching.png'
        });
      }
    })
    //cdn

    $('#sub_service').each(function () {
      var tabBtn = $('.tabBtn > li');
      var tabCon = $('.tabCon > div');

      tabBtn.on('click', function (e) {
        e.preventDefault();

        var target = $(this);
        var index = target.index();

        tabBtn.removeClass('active');
        target.addClass('active');
        tabCon.css({
          display: 'none'
        });
        tabCon.eq(index).css({
          display: 'block'
        });
      });

      var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        observer: true,
        observeParents: true,
      });
    });
    //service

    $('#sub_hosting').each(function () {
      var tabBtn = $('.serverBtn > li');
      var tabCon = $('.serverpro');

      tabCon.hide().eq(0).show();
      tabBtn.click(function (e) {
        e.preventDefault();

        var target = $(this);
        var index = target.index();

        tabBtn.removeClass('active');
        target.addClass('active');
        tabCon.css({
          display: 'none'
        });
        tabCon.eq(index).css({
          display: 'block'
        });
      });
    });
    //hosting

    $('#sub_website').each(function () {
      var swiper = new Swiper('.swiper-container', {
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        loop: true,
      });
    });
    //website

    $('#sub_faq').each(function () {
      var tabBtn = $('.faqBtn > li');
      var tabCon = $('.faqCon > ul');

      tabCon.hide().eq(0).show();
      tabBtn.click(function (e) {
        e.preventDefault();

        var target = $(this);
        var index = target.index();

        tabBtn.removeClass('active');
        target.addClass('active');
        tabCon.css({
          display: 'none'
        });
        tabCon.eq(index).css({
          display: 'block'
        });
      });

      var faqItem = $('.faqCon > ul > li');
      faqItem.addClass('hide');
      faqItem.find('.answerArea').hide();

      $('.faqCon > ul > li > .qusetionArea > a').click(function () {
        var onFaqItem = $(this).parents('.faqCon > ul > li:first');

        if (onFaqItem.hasClass('hide')) {
          faqItem.addClass('hide').removeClass('active');
          faqItem.find('.answerArea').slideUp(300);
          onFaqItem.removeClass('hide').addClass('active');
          onFaqItem.find('.answerArea').slideDown(300);
        } else {
          onFaqItem.removeClass('active').addClass('hide');
          onFaqItem.find('.answerArea').slideUp(300);
        }
        return false;
      });
    });
    //sub_faq

    $('#sub_notice').each(function () {
      var notiItem = $('.noticeArea > ul > li');
      notiItem.addClass('hide');
      notiItem.find('.noticeTxt').hide();

      $('.noticeArea > ul > li > .noticeTit > a').click(function () {
        var onNotiItem = $(this).parents('.noticeArea > ul > li:first');

        if (onNotiItem.hasClass('hide')) {
          notiItem.addClass('hide').removeClass('active');
          notiItem.find('.noticeTxt').slideUp(300);
          onNotiItem.removeClass('hide').addClass('active');
          onNotiItem.find('.noticeTxt').slideDown(300);
        } else {
          onNotiItem.removeClass('active').addClass('hide');
          onNotiItem.find('.noticeTxt').slideUp(300);
        }
        return false;
      });
    })
    //sub_notice

    $('#counseling .privacyBtn').on('click', function () {
      $('#personalPop').show();
    })

    $('#sub_counseling .privacyBtn').on('click', function () {
      $('#personalPop').show();
    })

    $('.popClose').on('click', function () {
      $('#personalPop').hide();
    })
    //privacyBtn

    $('#topBtn').each(function () {
      var top = $(this);

      win.on('scroll', function () {
        if (win.scrollTop() < 600) {
          top.stop().animate({
            right: '-15%'
          });
        } else {
          top.stop().animate({
            right: '3%'
          }, 300);
        }
      });

      top.on('click', function () {
        $('html,body').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    });
    //topBtn
  });
})(jQuery);