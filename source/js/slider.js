$('.program__list').slick({
  responsive: [{
    breakpoint: 836,
    settings: {
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      arrows: false,
      focusOnSelect: true
    }
  },
  {
    breakpoint: 10000,
    settings: {
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      variableWidth: true,
      arrows: false
    }
  }]
});