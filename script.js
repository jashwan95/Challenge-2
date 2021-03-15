/**
 * Start clock
 */
 function initClock() {

	// init
	renderClock();

	// run every second
	setInterval(renderClock, 1000);
}

/**
 * Render clock
 */
function renderClock() {

	// get HTML elements
	var clock = document.getElementById('time');
	var date  = document.getElementById('date');

	// time logic
	var time  = getCurrentTime(new Date());
	var sep   = flashSeperator(time['seconds']);

	// display date
	date.innerHTML = time['day'] + ' ' +  getCurrentMonth(time['month']);

	// display time
	clock.innerHTML = time['hours'] + sep +  time['minutes'];
}

/**
 * Flash seperator 
 * @param integer - seconds
 * @return string
 */
function flashSeperator(seconds) {
	var sepClass = '';

	// toggle class
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

	// fill array
	time['seconds'] = date.getSeconds();
	time['minutes'] = date.getMinutes(),
	time['hours']   = date.getHours();
	time['month']   = date.getMonth();
	time['day']     = date.getDate();

	// hours: add leading zero
	if (time['hours'] < 10) {
		time['hours'] = '0' + time['hours'];
	}

	// minutes: add leading zero
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
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	return months[monthNumber];
}

// start
initClock();

var klokie = new Date();

var uren = klokie.getHours();
if (uren >= 0 && uren < 6) {
	document.getElementById('main').style.background = 'linear-gradient(#0b486b, #f56217)';
} else if (uren >= 6 && uren < 12) {
	document.getElementById('main').style.background = 'linear-gradient(#56ccf2, #2f80ed)';
} else if (uren >= 12 && uren < 18) {
	document.getElementById('main').style.background = 'linear-gradient(#0b486b, #f56217)';
} else if (uren >= 18) {
	document.getElementById('main').style.background = 'linear-gradient(#232526, #414345)';
}






