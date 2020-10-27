class Dom {
	constructor(selector) {
		this.$el = typeof selector === 'string' ?
		document.querySelector(selector) :
		selector
	}
	html(html) {
		if (typeof html === 'string') {
			this.$el.innerHTML =html
			return this
		}
		return this.$el.outerHTML.trim()
	}
	clear() {
		this.html('')
		return this
	}

	on(eventType, callback) {
		this.$el.addEventListener(eventType, callback)
	}
	off(eventType, callback) {
		this.$el.removeEventListener(eventType, callback)
	}

	append(node) {
		if (Element.prototype.append) {
			if (node instanceof Dom) {
				node = node.$el
			}
			this.$el.append(node)
		} else {
			this.$el.appndChild(node)
		}
		return this
	}

	get data() {
		return this.$el.dataset
	}

	closest(selector) {
		return $(this.$el.closest(selector))
	}
	getCoords() {
		return this.$el.getBoundingClientRect()
	}
	findAll(selector) {
		return this.$el.querySelectorAll(selector)
	}
	css(style = {}) {
		Object.keys(style).forEach(key => this.$el.style[key] = style[key])
	}
}
$('div').html('<h1>Test</h1>').clear()

export function $(selector) {
	return new Dom(selector)
}

$.create = (tagName, classes = '') => {
	const el = document.createElement(tagName)
	if (classes) {
		el.classList.add(classes)
	}
	return $(el)
}
