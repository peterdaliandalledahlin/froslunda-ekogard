import App from './App';

const app = async () => {
  document.getElementById('root').appendChild(await App());
  
  $(function() {

    //START BACK TO TOP BTN
    let btn = $('#backtotopbutton');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
    //END BACK TO TOP BTN

    //START CLOSE MOBILE MENU ON CLICK
    $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
    });
    //END CLOSE MOBILE MENU ON CLICK

    //START LOAD MODAL
    $(window).on('load',function(){
       $('#joinaltunagarden').modal('show');
    });
    //END LOAD MODAL

  });//END DOCUMENT READY

};
// Load app
app();