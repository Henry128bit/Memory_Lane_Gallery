const track = document.querySelector('.container');

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
}

window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
console.log(mouseDelta, maxDelta, percentage);

    if (percentage <= 0 && percentage >= -100 ) {
        track.style.transform = `translate(${percentage}%, -50%)`;
    } else {
        // track.dataset.percentage = nextPercentage;
    }
}



// window.onmousedown = e => {
//     track.dataset.moudeDownAt = e.clientX;
// }

// window.onmousemove = e => {
//     if (track.dataset.moudeDownAt === '0') return

//     const mouseDelta = parseFloat(track.dataset.moudeDownAt) - e.clientX,
//           maxDelta = window.innerWidth / 2;

//     const percentage = (mouseDelta / maxDelta) * 100,
//           nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

//     track.dataset.percentage = nextPercentage;

//     track.style.transform = `translate(-${nextPercentage}%, -50%)`;
// }

// window.mouseup = () => {
//     track.dataset.moudeDownAt = "0";
//     track.dataset.prevPercentage = track.dataset.percentage;
// }