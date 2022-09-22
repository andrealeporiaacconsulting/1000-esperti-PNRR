var rgModal = document.getElementById('RegionChartModal');

var regionsEl = document.getElementsByClassName("regionBlockChart");

var rgSpan = document.getElementsByClassName("region_close")[0];

function showDetails(region) {
    var regionCode = region.getAttribute("data-region");
    var istatCodeEl = document.getElementById("region_moda-istat");
    rgModal.style.display = "block";
    istatCodeEl.innerHTML = regionCode;
}

rgSpan.onclick = function() {
    rgModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == ebModal) {
        rgModal.style.display = "none";
    }
}