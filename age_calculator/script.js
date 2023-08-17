$(document).ready(function() {
    const currentDate = new Date()

    $(".calculate").on("click", function() {
        const birthDate =new Date($("#birthdate").val())
        
        
        if (birthDate != "Invalid Date") {
            if (birthDate.getTime() > currentDate.getTime()) {
                $(".appended").remove()
                $(".input-area").append("<h5 class='appended'>You cannot be born in the future. Try again?</h5>")
            } else {
                $(".appended").remove()

                const milliseconds = (currentDate.getTime()- birthDate.getTime())
                const seconds = milliseconds/1000
                const minutes = seconds/60
                const hours = minutes/60
                const days = hours/24
                const weeks = days/7
                const years = days/365.25
                const months = years*12
        
                $(".age").text(Math.floor(years))
                $("#yrdsp").text(years.toFixed(2))        
                $("#mthdsp").text(months.toFixed(2))        
                $("#wkdsp").text(weeks.toFixed(2))        
                $("#dydsp").text(days.toFixed(2))        
                $("#hrdsp").text(hours.toFixed(2))        
                $("#mndsp").text(minutes.toFixed(2))        
                $("#scdsp").text(seconds.toFixed(2))
                $("#msdsp").text(milliseconds)        
                
                $(".content-area").removeClass("hidden")

                if (Math.floor(years) == 1) {
                    $(".plural").hide()                  
                }

            }
        }
    })
})