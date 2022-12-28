const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const newYear = new Date("January 1, 2023 00:00:00");

// Create Update Timer Function

function updateCountdown() {
	const currentTime = new Date();
	const diff = newYear - currentTime;
	
	const d = Math.floor(diff / 1000 / 60 / 60 / 24);
	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff / 1000) % 60;
	days.textContent = d;
	hours.textContent = h < 10 ? "0" + h : h;
	minutes.textContent = m < 10 ? "0" + m : m;
	seconds.textContent = s < 10 ? "0" + s : s;
}

setInterval(updateCountdown, 1000)
