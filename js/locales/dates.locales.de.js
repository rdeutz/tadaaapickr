/**
 * German translation for Date locales
 */
;(function($) {

	var code = "de",
		translations = {
			defaults: {dateFormat: "dd.mm.yyyy", firstDayOfWeek: 1},
			days:      ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
			daysShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam", "Son"],
			daysMin:   ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
			months:    ["Janurar", "Feburar", "März", "April", "Mai", "Juni",
						"Juli", "August", "September", "Oktober", "November", "Dezember"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
		};

	$.each([Date.locales, $.fn.datepicker.Calendar.locales], function(i, locale) {
		if (locale) locale[code] = translations;
	});

})(jQuery);
