async function weather(){
    const cityname=document.querySelector('#search input').value;
    const weatherIcon=document.querySelector(".weather-icon")
    console.log(cityname);
    const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=d732528ed08e3d9c908b4f3fc567eb11`;
    const res=await fetch(url);
    //console.log(res);
    var data =await res.json();
    console.log(data);
    if (data.cod=='404') {
        error.style.display="block";
        main.style.display="none";
    } else {
        temp.innerHTML=Math.round(data.main.temp)+"°C";
        document.getElementById('city').innerHTML=data.name;
        document.getElementById('humidity').innerHTML=data.main.humidity+"%";
        document.getElementById('wind').innerHTML=data.wind.speed+"km/h";
        error.style.display="none";
        main.style.display="block";

        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="img/clouds.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="img/drizzle.png"
        }
        else if(data.weather[0].main=="Haze"){
            weatherIcon.src="img/haze.png"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="img/mist.png"
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="img/rain.png"
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src="img/snow.png"
        }
    }
}
