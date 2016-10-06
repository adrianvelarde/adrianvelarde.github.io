var countdown = function(endDt, elements) {
	var seconds = 1000,
		minutes = seconds *  60,
		hours = minutes * 60,
		days = hours * 24,
		end = new Date(endDt),
		timer,

		calculate = function(){
			var now = new Date();
			var timeLeft = end.getTime() - now.getTime();
			var data;

			if(isNaN(end)){
				console.log('Invalid date/time');
				return;
			}

			if(timeLeft <= 0)
			{ clearInterval(timer); }
			else
			{
				if(!timer)
				{ timer = setInterval(calculate, seconds); }
			}

			data = {
				'days' : Math.floor(timeLeft / days),
				'hours' : Math.floor((timeLeft % days) / hours),
				'minutes' : Math.floor((timeLeft % hours) / minutes),
				'seconds' : Math.floor((timeLeft % minutes) / seconds),
			};
			//console.log(data);

			if(elements.length){
				for(e in elements){
					var e = elements[e];
					if(data[e] > 99 && data[e] < 1000)
					{
						data[e] = ('00' + data[e]).slice(-3);
					}
					else{
						data[e] = ('00' + data[e]).slice(-2);
					}
					//console.log(data[e]);
					document.getElementById(e).innerHTML = data[e];
				}
			}

			//console.log(data);
		};

	calculate();
}