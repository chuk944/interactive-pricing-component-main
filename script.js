






const start = () => {
    var r = document.querySelector(':root');
    let range = document.getElementById("vol").value;
    let toggle = document.getElementById('switch');
    let total = 0;
    console.log(range);   
    let newRange = range +"%";
    
    // Slide Bar Tracking
    r.style.setProperty('--sliderBar', newRange);

    // Main Selection

    // 10k Pageview
    
    if (range < 20) {
        range = 10;
        document.getElementById("pageview").innerHTML = "10k pageviews";
        total = 8.00;
        total = total.toFixed(2);
        if (toggle.checked == true) {
            total = total - (total * .25);
            total = total.toFixed(2);
        }
        document.getElementById('monthCharge').innerHTML = '$' + total;
    }

    // 50k Pageview

    else if (range >=20 && range < 40) {
        range = 50;
        document.getElementById("pageview").innerHTML = "50k pageviews";
        total = 12.00;
        total = total.toFixed(2);
        if (toggle.checked == true) {
            total = total - (total * .25);
            total = total.toFixed(2);
        }
        document.getElementById('monthCharge').innerHTML = '$' + total;


    }
    // 100k Pageview

    else if (range >=40 && range < 60) {
        range = 100;
        document.getElementById("pageview").innerHTML = "100k pageviews";
        total = 16.00;
        total = total.toFixed(2);
        if (toggle.checked == true) {
            total = total - (total * .25);
            total = total.toFixed(2);
        }
        document.getElementById('monthCharge').innerHTML = '$' + total;
    }

    // 500k Pageview
    else if (range >=60 && range < 80) {
        range = 500;
        document.getElementById("pageview").innerHTML = "500k pageviews";
        total = 24.00;
        total = total.toFixed(2);
        if (toggle.checked == true) {
            total = total - (total * .25);
            total = total.toFixed(2);
        }
        document.getElementById('monthCharge').innerHTML = '$' + total;
    }
    // 1m Pageview
    else  {
        range = 1000;
        document.getElementById("pageview").innerHTML = "1m pageviews";
        total = 36.00
        total = total.toFixed(2);
        if (toggle.checked == true) {
            total = total - (total * .25);
            total = total.toFixed(2);
        }
        document.getElementById('monthCharge').innerHTML = '$' + total;
    }
    

    
}

