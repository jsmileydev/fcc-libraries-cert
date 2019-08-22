
		$(document).ready(function() {
			var minutes = 25;
			var seconds = 0;
			var timer = minutes * 60;
			var session = 25;
			var brk = 5;
			var paused = true;
			var isSession = true;
			var timerInt;

			var timeLeft = document.getElementById("time-left");
			var startStop = document.getElementById("start_stop");
			var reset = document.getElementById("reset");
			var seshLength = document.getElementById("session-length");
			var brkLength = document.getElementById("break-length");
			var seshIncr = document.getElementById("session-increment");
			var seshDecr = document.getElementById("session-decrement");
			var brkIncr = document.getElementById("break-increment");
			var brkDecr = document.getElementById("break-decrement");
			var alarm = document.getElementById('beep');

			//Click to increase/decrease session or break, only changes in session are displayed
			$(seshIncr).click(function() {
				if (session < 60 && paused) {
					session += 1;
					$(seshLength).text(session);
					timer = session * 60;
					clockify();
				}
			});
			$(seshDecr).click(function() {
				if (session > 1 && paused) {
					session -= 1;
					$(seshLength).text(session);
					timer = session * 60;
					clockify();
				}
			});
			$(brkIncr).click(function() {
				if (brk < 60 && paused) {
					brk += 1;
					$(brkLength).text(brk);
				}
			});
			$(brkDecr).click(function() {
				if (brk > 1 && paused) {
					brk -= 1;
					$(brkLength).text(brk);
				}
			});

			//Click to start/stop/reset

			$(startStop).click(function() {
				if (timer > 0 && paused) {
					startClock();
				} else {
					stopClock();
				}
			});

			function startClock() {
				paused = false;
				timerInt = setInterval(function() {
					timer--;
					//Switch from session to break & back, and play alarm
					if (timer < 0 && isSession) {
						isSession = false;
						timer = brk * 60;
						$('#timer-label').text('Break');
						alarm.play();
					} else if (timer < 0 && !isSession) {
						isSession = true;
						timer = session * 60;
						$('#timer-label').text('Session');
						alarm.play();
					}
					clockify();
				}, 1000);
			}

			function stopClock() {
				paused = true;
				window.clearInterval(timerInt);
			}

			//Reset session, break, timer to default, and stop alarm
			$(reset).click(function() {
				stopClock();
				isSession = true;
				session = 25;
				brk = 5;
				$(seshLength).text(session);
				$(brkLength).text(brk);
				$('#timer-label').text('Session');
				alarm.pause();
				alarm.currentTime = 0;
				timer = session * 60;
				clockify();
			});

			//Functions to convert whole timer to minutes & seconds, add zero to beginning of single digits
			function clockify() {
				minutes = Math.floor(timer / 60);
				seconds = timer % 60;
				$(timeLeft).text(addZero(minutes) + ":" + addZero(seconds));
				console.log(timer);
			}

			function addZero(x) {
				return x < 10 ? (x = "0" + x) : x;
			}
		});