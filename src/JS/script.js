const track = document.querySelector('.container');

// wheel
const page = document.querySelector('.page');
let x = 0;

const handleOnDown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
    if (track.dataset.mouseDownAt === "0") return

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -90);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });

    for(const image of track.getElementsByClassName("img")) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% 50%`
        }, { duration: 1200, fill: "forwards" });
      }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);


// wheel

page.addEventListener('wheel', function(event) {

    if (event.deltaY > 0) {
        x = Math.max(Math.min((x -= 4), 0), -90);
    } else if (event.deltaY < 0) {
        x = Math.max(Math.min((x += 4), 0), -90);
    }

    console.log(x);
    track.animate({
        transform: `translate(${x}%, -50%)`
      }, { duration: 1200, fill: "forwards" });

    for(const image of track.getElementsByClassName("img")) {
        image.animate({
          objectPosition: `${100 + x}% 50%`
        }, { duration: 1200, fill: "forwards" });
      }
});