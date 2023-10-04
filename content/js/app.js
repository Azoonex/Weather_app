let inputElem = document.querySelector('input')

let apiData = {
    apivalue : 'https://api.openweathermap.org/data/2.5/weather?q=',
    key : 'b13184330722ef732379edfc8584e857'
}

const fetchData = ()=>{
    let valueInput = inputElem.value

    fetch(`${apiData.apivalue}${valueInput}&&appid=${apiData.key}`)
        .then(res => res.json())
            .then(data => {
                console.log(data)
                shoData(data)
            })
}

const shoData = (data) => {
    let cityElement = document.querySelector('.city');
    cityElement.innerHTML = `${data.name}, ${data.sys.country}`;

    let dateElem = document.querySelector('.date')
    dateElem.innerHTML = showDate()

    let tempElemnt = document.querySelector('.temp');
    tempElemnt.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`

    let tempElem = document.querySelector('.hi-low')
    tempElem.innerHTML = `${Math.floor(data.main.temp_min)}°c / ${Math.floor(data.main.temp_max)} °c`

    let weatherElem = document.querySelector('.weather')
    weatherElem.innerHTML = `${data.weather[0].main}`

}

function showDate(){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()
    let day = days[now.getDay()]
    let dayNumber = now.getDate()
    let month = months[now.getMonth()]
    let your = now.getFullYear()
    return `${day} ${dayNumber} ${month} ${your}`
}




inputElem.addEventListener('keypress', (event)=>{
    if(event.keyCode === 13){
        fetchData()
    }
})


    // let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



    
// ------------------> https://github.com/abasSolver/Weather_app <-------------------------

