document.addEventListener('DOMContentLoaded', e => setInterval(startClock, 1000))

const startClock = () => {

	const date = new Date()

	let hour = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds(),
		hDeg = ((hour / 12) * 360) + ((minutes / 60) * 6) + 90,
		mDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90,
		sDeg = ((seconds / 60) * 360) + 90,
		hEl = getDOMElement('.hand__h'),
		mEl = getDOMElement('.hand__m'),
		sEl = getDOMElement('.hand__s'),
		tEl = getDOMElement('.time'),
		dEl = getDOMElement('.date'),
		options = {
			time: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				hour12: false
			},
			date: {
				year: "numeric",
				month: "numeric",
				day: "numeric"
			}
		}

	tEl.innerText = formatDateTime(options.time, date)
	dEl.innerText = formatDateTime(options.date, date)
	animateDOMElement(hEl, hDeg)
	animateDOMElement(mEl, mDeg)
	animateDOMElement(sEl, sDeg)
}

const getDOMElement = el => document.querySelector(el),
	  animateDOMElement = (el, val) => el.style.rotate = `${val}deg`,
	  formatDateTime = (opt, d) => new Intl.DateTimeFormat("en-GB", opt).format(d)

