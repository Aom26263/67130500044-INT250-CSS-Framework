function temperature() {
    const celsius = document.getElementById("celsius").value
    const f = (celsius * 9/5) + 32

    document.getElementById("fahrenheit").value = f
}

function weight() {
    const kg = document.getElementById("kilo").value;
    const pounds = kg * 2.2;

    document.getElementById("pounds").value = pounds;
}

function distance() {
    const km = document.getElementById("km").value;
    const m = km * 0.62137;
    
    document.getElementById("miles").value = m;
}