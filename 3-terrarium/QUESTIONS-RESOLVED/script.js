/*The solution to draggable elements was inspired by w3schools solution on creating a [Draggable HTML Element](https://www.w3schools.com/howto/howto_js_draggable.asp).*/

dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));


function dragElement1(ev) {
    let offsetX;
    let offsetY;


    onDragStart = function (ev) {
        console.dir(ev.target.getBoundingClientRect())
        const rect = ev.target.getBoundingClientRect();

        offsetX = ev.clientX - rect.x;
        offsetY = ev.clientY - rect.y;
    };

    drop_handler = function (ev) {
        ev.preventDefault();

        const left = parseInt(id2.style.left);
        const top = parseInt(id2.style.top);

        id1.style.position = 'absolute';
        id1.style.left = ev.clientX - left - offsetX + 'px';
        id1.style.top = ev.clientY - top - offsetY + 'px';
       
    };

    dragover_handler = function (ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    };

    // <div id="id1" draggable="true" ondragstart="onDragStart(event)" style="border:2px solid green; cursor:pointer;width:100px;height:50px;">Dragged Div</div>


    // <div id="id2" style="position:absolute;left:200px;top:50px;border:2px solid red; cursor:pointer;width:200px;height:200px;" ondrop="drop_handler(event)" ondragover="dragover_handler(event)">Drop Div
    // </div>
}

/*"A closure is the combination of a function bundled together (enclosed) 
with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function’s scope 
from an inner function." Create a closure so that you can track the dragged element*/

function dragElement(terrariumElement) {
    //set 4 positions for positioning on the screen
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        // get the initial mouse cursor position for pos3 and pos4
        pos3 = e.clientX;
        pos4 = e.clientY;
        // when the mouse moves, start the drag
        document.onpointermove = elementDrag;
        // when the mouse is lifted, stop the drag
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        // calculate the new cursor position
        // pos1 = where the Xmouse WAS - where it IS
        pos1 = pos3 - e.clientX;
        // pos2 = where the Ymouse WAS - where it IS
        pos2 = pos4 - e.clientY;
        //reset pos3 to current location of Xmouse
        pos3 = e.clientX;
        //reset pos4 to current location of Ymouse
        pos4 = e.clientY;
        console.log(show(pos1), show(pos2), show(pos3), show(pos4));
        // new from stackoverflow 
        terrariumElement.style.position = 'absolute';
        // set the element's new position:
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }

    function stopElementDrag() {
        // stop calculating when mouse is released
        document.onpointerup = null;
        document.onpointermove = null;
    }
}
function show(num) {
    return parseInt(num);
}