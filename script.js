let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
const numClosedDoors = 3;
doorImage1.onclick = () => { doorImage1.src = botDoorPath };
doorImage2.onclick = () => { doorImage2.src = beachDoorPath };
doorImage3.onclick = () => { doorImage3.src = spaceDoorPath };
let openDoor1, openDoor2, openDoor3;
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random * numClosedDoors);
    if (choreDoor == 0) {
        openDoor1 = botDoorPath;
    }
    if (choreDoor == 1) {
        openDoor2 = botDoorPath;
    }
    if (choreDoor == 2) {
        openDoor3 = botDoorPath;
    }
}