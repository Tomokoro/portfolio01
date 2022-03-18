
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});

$(window).on('scroll', function () {
  if (50 < jQuery(this).scrollTop()) {
    $('.js-header').addClass('change');
    $('.pc-nav__item a').addClass('change');
    $('.js-logo').addClass('change');
    $('.js-logo2').addClass('change');
    $('.header__hamburger span').addClass('change');

  } else {
    $('.js-header').removeClass('change');
    $('.pc-nav__item a').removeClass('change');
    $('.js-logo').removeClass('change');
    $('.js-logo2').removeClass('change');
    $('.header__hamburger span').removeClass('change');

  }
});
// ハンバーガーボタンの動き
$('.header__hamburger').on('click', function() {
  $(this).toggleClass('active');
  $('.header__sp-nav').toggleClass('open');
  $('.header__inner').toggleClass('change-color');
  return false;
});

let swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
}
new Swiper('.swiper', swipeOption);



let tabs = $(".news-contents"); // tabのクラスを全て取得し、変数tabsに配列で定義
  $(".news-contents").on("click", function() { // tabをクリックしたらイベント発火
    $(this).addClass("active"); // クリックした箇所にactiveクラスを追加
    const index = tabs.index(this); // クリックした箇所がタブの何番目か判定し、定数indexとして定義
    $(".news__contents").removeClass("show").eq(index).addClass("show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
  })

  $('.news__tab-item').click(function() {
    var index = $('.news__tab-item').index(this);
    $('.news__tab-item, .news__contents').removeClass('active');
    $(this).addClass('active');
    $('.news__contents').eq(index).addClass('active');
  });

  $(function () {
    $('.js-open-modal').click(function () {
      $('.modal__bg, .modal').fadeIn();
      return false;
    });
    $('.js-close-modal, .modal__bg').click(function () {
      $('.modal__bg, .modal').fadeOut();
      return false;
    });
  });

const config = {
  mode: "range",
  minDate: "today",
  maxDate: new Date().fp_incr(90) // 今から90日後
}
flatpickr('#flatpickr', config);