// This JavaScript file is only meant to allow 
// live demonstration of alternate color schemes.
// It is not otherwise part of the theme

windowo.addEventListener('DOMContentLoaded', (e) => {
		const urlParams = new URLSearchParams(window.location.search)
		const theme = urlParams.get('color')

		if (theme === 'obradinn') {
			document.documentElement.style.setProperty("--bg", "#333319") 
			document.documentElement.style.setProperty("--base", "#e5ffff") 
		} 

		if (theme === 'ibm') {
			document.documentElement.style.setProperty("--bg", "#2e2f36") 
			document.documentElement.style.setProperty("--base", "#ebe5ce") 
		} 

	})