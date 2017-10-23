jQuery(document).ready(function() {
  // Стартовая позиция
  var slider_index = 0;
  // Контайнер с картнками
  var img = $(".slider__box > img");
  // Родительский контейнер
  var slider_container = $(".slider__container");
  // Общее количество каринок (сколько раз будет работать слайдер = )
  var slider_count = $(".slider__box > img").length;
  // Применили к родителю
  slider_container.width(img.width());
  //
  function sliderFunc(new_slider_index) {
    if (new_slider_index < 0 || new_slider_index > (slider_count - 1)) return;
    slider_index = new_slider_index;
    $(".slider__box").animate({
      "margin-left": (-100) * slider_index + "%"
    }, 500)
  }

  $(".slider__nav--prev").on("click", function() {
    sliderFunc(slider_index - 1);
  })
  $(".slider__nav--next").on("click", function() {
    sliderFunc(slider_index + 1);
  })
})
