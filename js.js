const apiKey = "9529f4ada247e19f88d601d42240890d"
const searchF = document.querySelector("#search-f")
const searchBtn = document.querySelector("#search-btn")
const weather = document.querySelector(".mycard")


const getWeather = async (city) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
	const response = await fetch(url)
	const data = await response.json()
	console.log(data)
	return showWeather(data)
}

const showWeather = (data) => {
	document.querySelector(".card-header").innerHTML = "Weather of " +data.name

	document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` 
	document.querySelector(".icon-des").innerHTML = data.weather[0].description

	document.querySelector(".temp").innerHTML = data.main.temp + "°c"
	document.querySelector(".feels-like").innerHTML = `Feels like ${data.main.feels_like}°c`


	document.querySelector(".wind-speed").innerHTML = ` Wind: ${data.wind.speed}km/h`

	document.querySelector(".pressure").innerHTML = ` Pressure: ${data.main.pressure}mb`

	document.querySelector(".humidity").innerHTML = `Humidity: ${data.main.humidity}%`

}
getWeather("delhi")
searchBtn.addEventListener("click", (e) => {
	if (searchF.value === "") {
		alert("please enter a city!")
	} else {
		e.preventDefault()
		getWeather(searchF.value)
	}
})

// const secondsToMin=(s)=>{
// 	let min = s/60
// 	let h = min /60
// 	console.log(min, h)
// }

// secondsToMin(383839)

