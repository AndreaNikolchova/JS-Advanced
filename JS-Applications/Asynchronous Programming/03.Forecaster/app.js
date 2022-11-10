async function attachEvents() {
    let button = document.getElementById('submit');
    button.addEventListener('click',async()=>{
        try{

            let locationInput = document.getElementById('location');
            let locationUrl = `http://localhost:3030/jsonstore/forecaster/locations`;
            let locationCode = '';
            
            let locationsPromises = await fetch(locationUrl);
            let locations = await locationsPromises.json();
            for(let i = 0; i<locations.length; i++){
                if(locations[i].name === locationInput.value){
                    locationCode = locations[i].code;
                }
            }
            
                let urlForTodayForecast = `http://localhost:3030/jsonstore/forecaster/today/${locationCode}`;
                let forecastTodayPromise = await fetch(urlForTodayForecast);
                let todayForecast = await forecastTodayPromise.json();
        
                let divForecast = document.getElementById('forecast');
                divForecast.style.display = 'visible';
                
                let divCurrent  =  document.getElementById('current');
                
                let divForecasts = document.createElement('div');
                divForecasts.className = 'forecasts';
                divCurrent.appendChild(divForecasts);
        
                    let spanSymbol =  document.createElement('span');
                    spanSymbol.className = 'condition symbol';
                    switch(todayForecast.forecast.condition){
                        case 'Sunny': spanSymbol.innerHTML = `&#x2600`; break;
                        case 'Partly sunny': spanSymbol.innerHTML = `&#x26C5`;break;
                        case 'Overcast': spanSymbol.innerHTML = `&#x2601`; break;
                        case 'Rain': spanSymbol.innerHTML = `&#x2614`; break;
                
                    }
                    divForecasts.appendChild(spanSymbol);
                     
                    let spanConditionAll = document.createElement('span');
                    spanConditionAll.className = 'condition';
        
                    let spanLocation = document.createElement('span');
                    spanLocation.className = 'forecast-data';
                    spanLocation.textContent = todayForecast.name;
        
                    let spanDegrees = document.createElement('span');
                    spanDegrees.className = 'forecast-data';
                    spanDegrees.innerHTML = todayForecast.forecast.low + '&#176' + '/' + todayForecast.forecast.high + '&#176'
        
                    let spanCondition = document.createElement('span');
                    spanCondition.className = 'forecast-data';
                    spanCondition.textContent = todayForecast.forecast.condition;
        
                    spanConditionAll.appendChild(spanLocation);
                    spanConditionAll.appendChild(spanDegrees);
                    spanConditionAll.appendChild(spanCondition);
                    divForecasts.appendChild(spanConditionAll);
    
            let urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`;
            let upcomingPromise = await fetch(urlUpcoming);
            let upcomingForecast = await upcomingPromise.json();
            let divUpcoming = document.getElementById('upcoming');
    
            let divForecastInfo = document.createElement('div');
            divForecastInfo.className = 'forecast - info';
            divUpcoming.appendChild(divForecastInfo);
            for(let i of upcomingForecast.forecast){
                let spanUpcoming = document.createElement('span');
                spanUpcoming.className = 'upcoming';
                
                let spanSymbol =  document.createElement('span');
                spanSymbol.className = 'symbol';
                switch(i.condition){
                    case 'Sunny': spanSymbol.innerHTML = `&#x2600`; break;
                    case 'Partly sunny': spanSymbol.innerHTML = `&#x26C5`;break;
                    case 'Overcast': spanSymbol.innerHTML = `&#x2601`; break;
                    case 'Rain': spanSymbol.innerHTML = `&#x2614`; break;
                }
                
                let spanDegrees = document.createElement('span');
                spanDegrees.className = 'forecast-data';
                spanDegrees.innerHTML = i.low + '&#176' + '/' + i.high + '&#176'
                
                let spanCondition = document.createElement('span');
                spanCondition.className = 'forecast-data';
                spanCondition.textContent = i.condition;
    
                spanUpcoming.appendChild(spanSymbol);
                spanUpcoming.appendChild(spanDegrees);
                spanUpcoming.appendChild(spanCondition);
    
                
                divForecastInfo.appendChild(spanUpcoming);
            }
        }
        catch(e){
            let divForecast = document.getElementById('forecast');
          divForecast.textContent = 'Error';
        }
        
});
    
    

}

attachEvents();