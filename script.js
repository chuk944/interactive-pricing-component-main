






function start() {
    
    let range = document.getElementById("vol").value;
    console.log(range);
    
    if (range < 5) {
        range = 10;
        document.getElementById("pageview").innerHTML = "10k pageviews";
    }

    else if (range >=5 && range < 20) {
        range = 50;
        document.getElementById("pageview").innerHTML = "50k pageviews";
    }

    else if (range >=20 && range < 51) {
        range = 100;
        document.getElementById("pageview").innerHTML = "100k pageviews";
    }

    else if (range >=51 && range < 80) {
        range = 500;
        document.getElementById("pageview").innerHTML = "500k pageviews";
    }

    else  {
        range = 1000;
        document.getElementById("pageview").innerHTML = "1m pageviews";
    }
    

    console.log(range);
}