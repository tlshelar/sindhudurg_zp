/* Function which shows the dates by week name starts here */

function showdatebyweek(year, wn, dayNb) {
	var j10 = new Date(year, 0, 10, 12, 0, 0), j4 = new Date(year, 0, 4, 12, 0,
			0), mon1 = j4.getTime() - j10.getDay() * 86400000;
	return new Date(mon1 + ((wn - 1) * 7 + dayNb) * 86400000);
};

var dateFormat = function() {
	var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g, timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, timezoneClip = /[^-+\dA-Z]/g, pad = function(
			val, len) {
		val = String(val);
		len = len || 2;
		while (val.length < len)
			val = "0" + val;
		return val;
	};

	// Regexes and supporting functions are cached through closure
	return function(date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask
		// prefix)
		if (arguments.length == 1
				&& Object.prototype.toString.call(date) == "[object String]"
				&& !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date))
			throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var _ = utc ? "getUTC" : "get", d = date[_ + "Date"](), D = date[_
				+ "Day"](), m = date[_ + "Month"](), y = date[_ + "FullYear"](), H = date[_
				+ "Hours"](), M = date[_ + "Minutes"](), s = date[_ + "Seconds"]
				(), L = date[_ + "Milliseconds"](), o = utc ? 0 : date
				.getTimezoneOffset(), flags = {
			d : d,
			dd : pad(d),
			ddd : dF.i18n.dayNames[D],
			dddd : dF.i18n.dayNames[D + 7],
			m : m + 1,
			mm : pad(m + 1),
			mmm : dF.i18n.monthNames[m],
			mmmm : dF.i18n.monthNames[m + 12],
			yy : String(y).slice(2),
			yyyy : y,
			h : H % 12 || 12,
			hh : pad(H % 12 || 12),
			H : H,
			HH : pad(H),
			M : M,
			MM : pad(M),
			s : s,
			ss : pad(s),
			l : pad(L, 3),
			L : pad(L > 99 ? Math.round(L / 10) : L),
			t : H < 12 ? "a" : "p",
			tt : H < 12 ? "am" : "pm",
			T : H < 12 ? "A" : "P",
			TT : H < 12 ? "AM" : "PM",
			Z : utc ? "UTC" : (String(date).match(timezone) || [ "" ]).pop()
					.replace(timezoneClip, ""),
			o : (o > 0 ? "-" : "+")
					+ pad(
							Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o)
									% 60, 4),
			S : [ "th", "st", "nd", "rd" ][d % 10 > 3 ? 0
					: (d % 100 - d % 10 != 10) * d % 10]
		};

		return mask.replace(token, function($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default" : "ddd mmm dd yyyy HH:MM:ss",
	shortDate : "m/d/yy",
	mediumDate : "mmm d, yyyy",
	longDate : "mmmm d, yyyy",
	fullDate : "dddd, mmmm d, yyyy",
	shortTime : "h:MM TT",
	mediumTime : "h:MM:ss TT",
	longTime : "h:MM:ss TT Z",
	isoDate : "yyyy-mm-dd",
	isoTime : "HH:MM:ss",
	isoDateTime : "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime : "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames : [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday",
			"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
	monthNames : [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
			"Sep", "Oct", "Nov", "Dec", "January", "February", "March",
			"April", "May", "June", "July", "August", "September", "October",
			"November", "December" ]
};

// For convenience...
Date.prototype.format = function(mask, utc) {
	return dateFormat(this, mask, utc);
};

/* Function which shows the dates by week name ends here */


/* Validations for number and alpahbets */
$(document).ready(function(){
	
	/* 1. Validations for only enter numbers */
	
	$(".allnum").keydown(function(event) {
		
		// Allow: backspace, delete, tab, escape, and enter
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
			 // Allow: Ctrl+A
			(event.keyCode == 65 && event.ctrlKey === true) || 
			 // Allow: home, end, left, right
			(event.keyCode >= 35 && event.keyCode <= 39)) {
				 // let it happen, don't do anything
				 return;
		}
		else {
			// Ensure that it is a number and stop the keypress
			if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
				event.preventDefault(); 
			}   
		}
	});
		
	var previousKeyCode=0;
	$(".alldouble").keydown(function(event) {
		//190 for . operator
		//do not allow repeated . operator
		if(previousKeyCode==event.keyCode ){
			event.preventDefault(); 
		}
		/*changed by mayuris to check if shift key is pressed with 190 i.e  'shift+.' to avoid '>' character*/
		if(!event.shiftKey && (event.keyCode == 190 || event.keyCode == 110)){
			previousKeyCode=event.keyCode;
			 return;
		}
		previousKeyCode=0;
		
		// Allow: backspace, delete, tab, escape, and enter
		//changed by mayuris :removed event.keyCode == 48 condition to prevent ')' character i.e 'shift+0' event
		if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
			 // Allow: Ctrl+A
			(event.keyCode == 65 && event.ctrlKey === true) || 
			 // Allow: home, end, left, right
			(event.keyCode >= 35 && event.keyCode <= 39)) {
				 // let it happen, don't do anything
				 return;
		}
		else {
			// Ensure that it is a number and stop the keypress
			if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
				event.preventDefault(); 
			}   
		}
	});
	
	
	/* 2. Validations for alpha characters */
	
	$(".allalphabets").keydown(function(event) {
		
		// Allow: backspace, delete, tab, escape, and enter
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||  event.keyCode == 32 ||
			 // Allow: Ctrl+A
			(event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 65 && event.keyCode <= 91 ) ||
			 // Allow: home, end, left, right
			(event.keyCode >= 35 && event.keyCode <= 39 )) {
				 // let it happen, don't do anything
				 return;
		}
		else {
			// Ensure that it is a number and stop the keypress
			if (event.shiftKey || (event.keyCode < 65 || event.keyCode > 90)) {
				event.preventDefault(); 
			}   
		}
	});	
	
	/*validation for alphanumeric text*/
	$('.alphanumeric').keydown(function(event){
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||  event.keyCode == 32 ||
				 // Allow: Ctrl+A
				(event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 65 && event.keyCode <= 91 ) ||
				 // Allow: home, end, left, right
				(event.keyCode >= 35 && event.keyCode <= 39 )) {
					 // let it happen, don't do anything
					 return;
			}
		else{
			/*check for symbols*/
			if(event.shiftKey || event.keyCode==16 || (event.keyCode >185 && event.keyCode<193) || (event.keyCode >218 && event.keyCode<223) || (event.keyCode >105 && event.keyCode<112 && event.keyCode!=108)){
				 //stop printing
				event.preventDefault(); 
			}
		}
	});
	
	$('.nospace').keydown(function(event){
		if (event.keyCode != 32 ){				 
					 return;
			}
		else{
				event.preventDefault(); 			
		}
	});
	
	/**
	 * @author Pratik Chaudhari
	 * Following script prevents user from entering more than one decimal point in floating point numbers. 
	 */
	$('.singleDecimal').keydown(
			
			function(event)
			{
				/*//alert(event.keyCode );
				var value = this.value + String.fromCharCode(event.keyCode);
	            alert(value);*/
				var textEntered = $(this).val(); 
				for(var i = 0; i < textEntered.length; i++)
				{
					if(textEntered[i] == '.' && (event.keyCode == 110 || event.keyCode == 190))
					{
						event.preventDefault();
						break;
					}
				}
				
			}
				
		
		);
	
	$('.twoDigits').keydown(

			function(event)
			{
				var textEntered = $(this).val();

				checkUserInputAndAllowOrBlock(textEntered, 2,2);

			});
	
	$('.threeDigits').keydown(

			function(event)
			{
				var textEntered = $(this).val();

				checkUserInputAndAllowOrBlock(textEntered, 3,2);

			});
	
	$('.fourDigits').keydown(

			function(event)
			{
				var textEntered = $(this).val();

				checkUserInputAndAllowOrBlock(textEntered, 4,2);

			});
	
	
	
	function checkUserInputAndAllowOrBlock(textEntered,noOfDigitsBeforeDecimalPoint,noOfDigitsAfterDecimalPoint)
	{
		
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||  event.keyCode == 32 ||
				 // Allow: Ctrl+A
				(event.keyCode == 65 && event.ctrlKey === true) ||
				 // Allow: home, end, left, right
				(event.keyCode >= 35 && event.keyCode <= 39 )) {
					 // let it happen, don't do anything
					 return;
			}
		else
		if(textEntered.length >= noOfDigitsBeforeDecimalPoint)
		{
			if(textEntered.indexOf('.') != -1)
			{
				var temp = textEntered.split('.');
				
				if(temp[1].length == noOfDigitsAfterDecimalPoint)
				{
					event.preventDefault();
					return;
				}
				return;
			}
			
			if(event.keyCode == 110)
			{
				return;
			}
			
			if ((event.shiftKey || (event.keyCode < 65 || event.keyCode > 90))) {
				event.preventDefault(); 
			}
		}
	}
	
});
