async function fetchData() {
    const res=await fetch ("https://openexchangerates.org/api/latest.json?app_id=YOUR_API_KEY");
    const record=await res.json();
    document.getElementById("PKR").innerHTML=record.rates["PKR"];
    document.getElementById("USD").innerHTML=record.rates["USD"];
    document.getElementById("GBP").innerHTML=record.rates["GBP"];
    document.getElementById("AED").innerHTML=record.rates["AED"];
    // document.getElementById("areaName").innerHTML=record.data[0].areaName;
    // document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
    // document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
}
fetchData();
