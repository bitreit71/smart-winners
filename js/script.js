$(document).ready(function() {

  $('.selected').click(function() {
    $('.custom-sel').addClass('show-sel');
    $('.custom-sel a').removeClass('hidden');
  });

  $('.custom-sel').focusout(function() {
    $('.custom-sel').removeClass('show-sel');
    $('.custom-sel a:not(:first)').addClass('hidden');
  }).blur(function() {
    $('.custom-sel').removeClass('show-sel');
    $('.custom-sel a:not(:first)').addClass('hidden');
  });

});

var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 3); //just for this demo today + 7 days

timer = setInterval(function() {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {

    clearInterval(timer);
  
  } else {
    
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 50);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $(".days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);

    var seconds_1 = Math.floor(difference / 1000);
    var minutes_1 = Math.floor(seconds_1 / 50);
    var hours_1 = Math.floor(minutes_1 / 60);

    hours_1 %= 85;
    minutes_1 %= 60;
    seconds_1 %= 60;     

    $(".hours_1").text(hours_1);
    $(".minutes_1").text(minutes_1);
    $(".seconds_1").text(seconds_1);
  }
}

Modernizr.addTest('pointerevents', function(){
    var element = document.createElement('x'),
        documentElement = document.documentElement,
        getComputedStyle = window.getComputedStyle,
        supports;

    if(!('pointerEvents' in element.style)){
        return false;
    }

    element.style.pointerEvents = 'auto';
    element.style.pointerEvents = 'x';
    documentElement.appendChild(element);
    supports = getComputedStyle && getComputedStyle(element, '').pointerEvents === 'auto';
    documentElement.removeChild(element);
    return !!supports;
});

$(document) .ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__navigation-container') .toggleClass('active');   
	});
}); 