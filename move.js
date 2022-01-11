$(function() {
    $(".menu_button").click(function() {
      // cssでテキスト上に背景色をon/off
      $(".menu_sm_slide").toggleClass("open");
      $(".menu_button_line1").toggleClass("open_line1");
      $(".menu_button_line2").toggleClass("open_line2");
      $(".menu_button_line3").toggleClass("open_line3");
    });
    $(".content_button1").click(function() {
      $(".content_info_wrap1").toggleClass("contact_open1");
      $(".content_price1").toggleClass("contact_open1");
      $(".content_text").toggleClass("contact_open2");
      $(".button_text1").toggleClass("contact_open3");
      $(".button_text2").toggleClass("contact_open2");
    });
    $(".content_button2").click(function() {
      $(".content_info_wrap2").toggleClass("contact_open1");
      $(".content_price2").toggleClass("contact_open1");
      $(".content_text").toggleClass("contact_open2");
      $(".button_text1").toggleClass("contact_open3");
      $(".button_text2").toggleClass("contact_open2");
    });
    $(".content_button3").click(function() {
      $(".content_info_wrap3").toggleClass("contact_open1");
      $(".content_price3").toggleClass("contact_open1");
      $(".content_text").toggleClass("contact_open2");
      $(".button_text1").toggleClass("contact_open3");
      $(".button_text2").toggleClass("contact_open2");
    });

    function fadeAnime(){

      //動きの指定
        $('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
          var elemPos = $(this).offset().top-10;//要素より、50px上の
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll >= elemPos - windowHeight){
          $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
          }else{
          $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
          }
          });
      
      }
      
    $('#page-link a[href*="#"]').click(function () {
      var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
      var pos = $(elmHash).offset().top;  //idの上部の距離を取得
      $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
      return false;
    });

    $('#page-top').click(function () {
      $('body,html').animate({
          scrollTop: 0//ページトップまでスクロール
      }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
      return false;//リンク自体の無効化
  });
  
  });