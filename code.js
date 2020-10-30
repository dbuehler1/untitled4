$(document).ready(
    function(){
        $("#calcTotal").click(calcAlcohol);

        function calcAlcohol(){
            var numBeer = parseFloat($("#numBeers").val() * 0.54);
            var numWine = parseFloat($("#numWine").val() * 0.6);
            var numShot = parseFloat($("#numShots").val() * 0.6);
            var Weight = parseFloat($("#weight").val());
            var numHours = parseFloat($("#numHours").val());
            var BloodAlcohol = parseFloat((((numBeer + numWine + numShot) * 7.5) / Weight) - (numHours * 0.015));
            $("#bloodAlc").text((BloodAlcohol.toFixed(3)) + "%");

        }

    }
);
