/**
 * Start clock
 */
function initClock() {
	renderClock();
	setInterval(renderClock, 1000);
}

/**
 * Render clock
 */
function renderClock() {
	var clock = document.getElementById('time');
	var date  = document.getElementById('date');
	var time  = getCurrentTime(new Date());
	var sep   = flashSeperator(time['seconds']);

	date.innerHTML = getCurrentday(time['day']) + ' ' + time['date'] + ' ' +  getCurrentMonth(time['month']) + ' ' + time['year'];
	clock.innerHTML = time['hours'] + sep +  time['minutes'];
}

/**
 * Flash seperator 
 * @param integer - seconds
 * @return string
 */
function flashSeperator(seconds) {
	var sepClass = '';

	if (seconds % 2 === 1) {
		sepClass = ' class="trans"';
	}

	return '<span' + sepClass + '">:</span>';
}

/**
 * Parse the time
 * @param date object - current time 
 * @return date array
 */
function getCurrentTime(date) {
	var time = [];

	time['seconds'] = date.getSeconds();
	time['minutes'] = date.getMinutes(),
	time['hours']   = date.getHours();
	time['month']   = date.getMonth();
	time['date']    = date.getDate();	
	time['day']     = date.getDay();	
	time['year']    = date.getFullYear();

	if (time['hours'] < 10) {
		time['hours'] = '0' + time['hours'];
	}
	if (time['minutes'] < 10) {
		time['minutes'] = '0' + time['minutes'];
	}

	return time;
}

/**
 * Get current Month
 * @param integer - month number
 * @return string
 */
function getCurrentMonth(monthNumber) {
	var months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

	return months[monthNumber];
}

/**
 * Get current Month
 * @param integer - month number
 * @return string
 */
 function getCurrentday(dayNumber) {
	var days = ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo'];

	return days[dayNumber - 1];
}

initClock();

var klokie = new Date();
var uren = klokie.getHours();
var bgColor = document.getElementById('main');
var dagTijd = document.getElementById('dagTijd');
var diff = document.getElementById('diff');
var tijdvak = document.getElementById('tijdvak');
var nacht = [6, 5, 4, 3 ,2, 1];

if (uren >= 0 && uren < 6) {
	bgColor.style.background = 'linear-gradient(#000000, #434343)';
	dagTijd.innerHTML = 'nacht';
	diff.innerHTML = 'Over ' + nacht[uren] + ' uren';
	tijdvak.innerHTML = 'ochtend';
} else if (uren >= 6 && uren < 12) {
	bgColor.style.background = 'linear-gradient(#0b486b, #f56217)';
	dagTijd.innerHTML = 'ochtend';
	diff.innerHTML = 'Over ' + nacht[uren - 6] + ' uren';
	tijdvak.innerHTML = 'middag';
} else if (uren >= 12 && uren < 18) {
	bgColor.style.background = 'linear-gradient(#56ccf2, #2f80ed)';
	dagTijd.innerHTML = 'middag';
	diff.innerHTML = 'Over ' + nacht[uren - 12] + ' uren';
	tijdvak.innerHTML = 'avond';
} else if (uren >= 18) {
	bgColor.style.background = 'linear-gradient(#0f2027, #203a43, #2c5364)';
	dagTijd.innerHTML = 'avond';
	diff.innerHTML = 'Over ' + nacht[uren - 18] + ' uren';
	tijdvak.innerHTML = 'nacht';
}

switch (uren) {
	case 5:
    	diff.innerHTML = 'Over ' + nacht[uren] + ' uur';
		tijdvak.innerHTML = 'ochtend';
    break;
	case 11:
    	diff.innerHTML = 'Over ' + nacht[uren - 6] + ' uur';
		tijdvak.innerHTML = 'middag';
    break;
	case 17:
    	diff.innerHTML = 'Over ' + nacht[uren - 12] + ' uur';
		tijdvak.innerHTML = 'avond';
    break;
	case 23:
    	diff.innerHTML = 'Over ' + nacht[uren - 18] + ' uur';
		tijdvak.innerHTML = 'nacht';
    break;
}