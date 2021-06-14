function isOlderEdgeOrIE() {
    return (
        window.navigator.userAgent.indexOf("MSIE ") > -1 ||
        !!navigator.userAgent.match(/Trident.*rv\:11\./) ||
        window.navigator.userAgent.indexOf("Edge") > -1
    );
}

function valueTotalRatio(value, min, max) {
    return ((value - min) / (max - min)).toFixed(2);
}

function updateRangeEl(rangeEl) {
    let ratio = valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);
}

function initRangeEl() {
    let rangeEl = document.querySelector('input[type=range]');
    let textEl = document.querySelector('.mark-item');

    if (isOlderEdgeOrIE()) {
        rangeEl.style.height = "20px";
        rangeEl.addEventListener("change", function(e) {
            textEl.value = e.target.value;
        });
        rangeEl.addEventListener("input", function(e) {
            textEl.value = e.target.value;
        });
    } else {
        updateRangeEl(rangeEl);
        rangeEl.addEventListener("input", function(e) {
            updateRangeEl(e.target);
            textEl.value = e.target.value;
        });
    }
}

initRangeEl();