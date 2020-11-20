function weatherCall(){
    event.preventDefault();

var city = $("#searchTerm").val();
var queryURL= "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=43f88cf4c22e52ae2848c5fb7e859150&units=imperial";

// weather API
$.ajax({
    url:queryURL,
    method: "GET"
}).then(function(response) {
    
    console.log(response);

    var lat=response.coord.lat
    var lon=response.coord.lon
    var queryUvi= "http://api.openweathermap.org/data/2.5/uvi?appid=43f88cf4c22e52ae2848c5fb7e859150&lat="+lat+"&lon="+lon
    // UVI API => pass coordinates from weather API to UVI API
    $.ajax({
        url:queryUvi,
        method: "GET"
    }).then(function(response){
        console.log(response)
    });
var fiveDay = "http://api.openweathermap.org/data/2.5/forecast?q=austin&appid=YOUR_API_KEY&units=imperial"
    // 5 day forcast 
    $.ajax({
        fiveDay,
        method: "GET"
    }).then(function(response){

    });
});
}
$("#searchButton").on("click", weatherCall);