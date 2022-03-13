import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import UniversalAge from './js/universalAge';

$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
    event.preventDefault();
    $("#output").show();
    $("#input").hide();
    const userAge=parseInt($("input#userAge").val());
    const userGender=$("#gender").val();
    const userSmoker=$("#tobacco").val();
    const userLifeStyle=$("#lifeStyle").val();
    let newAge= new UniversalAge(userAge,userGender,userSmoker,userLifeStyle);
    newAge.lifeExpectency();
    newAge.timeLeft();

    $("#mercuryAge").append(newAge.mercuryTime(newAge.earthAge));
    $("#mercuryLeft").append(newAge.timeCheck(newAge.mercuryTime(newAge.earthTimeLeft)));
    $("#venusAge").append(newAge.venusTime(newAge.earthAge));
    $("#venusLeft").append(newAge.timeCheck(newAge.venusTime(newAge.earthTimeLeft)));
    $("#marsAge").append(newAge.marsTime(newAge.earthAge));
    $("#marsLeft").append(newAge.timeCheck(newAge.marsTime(newAge.earthTimeLeft)));
    $("#jupiterAge").append(newAge.jupiterTime(newAge.earthAge));
    $("#jupiterLeft").append(newAge.timeCheck(newAge.jupiterTime(newAge.earthTimeLeft)));

  }); 
});
