window.addEventListener('DOMContentLoaded', (e) => {
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