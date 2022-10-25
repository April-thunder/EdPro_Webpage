// Скрипт слайдера

const swiper = new Swiper('.swiper', {
  // Optional parameters
  spaceBetween: 60,

  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Скрипт модального окна

$(document).ready(function(){

	//Функция, отключающая скролла
	function disableScroll()
	{
		$('html, body').css("overflow","hidden")
		$('html, body').css("width","100%")
			return false;
	}
	
	//Функция, включающая скролл
	function enableScroll()
	{
		$('html, body').css("overflow","initial")
			return false;
	}

	//Вызов всплывающего окна, при этом отключается скролл

	$('.btn, .btn-link').click(function(){
		$('.popup-container').fadeIn(600, disableScroll);
	});

	//Отключается модальное окно при клике по крестику, включается скролл
	$('.close-icon').click(function(event){
		if(event.target == this){
			$(this).fadeOut(600, enableScroll);
	};
	});

	// Закрытие модального при клике по крестику, включается скролл
	$('.close-icon').click(function() { 
		$('.popup-container').fadeOut(600, enableScroll);
		$('form')[0].reset(); // Очистка полей формы при ее закрытии
	
	});

})
