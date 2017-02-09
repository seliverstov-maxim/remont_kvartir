var selectors = {
  open_request_form_btn: '*[data-role="open-request-form-btn"]',
  form_closers: '*[data-role="close-request-form-btn"], *[data-role="close-request-form-area"]',
  request_form: '*[data-role="request-form"] form',
  request_form_wrapper: '*[data-role="request-form"]'
}

$(function(){
  $(document).on('click', selectors.open_request_form_btn, function(e) {
    var btn = $(e.currentTarget);
    var top = $(document).scrollTop() || 0;
    $(selectors.request_form_wrapper).find('.popup_form').css('top', top + 100);
    $(selectors.request_form_wrapper).fadeIn();
  })

  $(document).on('click', selectors.form_closers, function() {
    $(selectors.request_form_wrapper).fadeOut();
    return false;
  })

  $(document).on('submit', selectors.request_form, function(e){
    $(selectors.request_form_wrapper).fadeOut();
  })

  $('input[type="tel"]').inputmask({"mask": "+7(999) 999 99-99"});
});