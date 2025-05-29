function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        const containerWidth = document.querySelector('.content').clientWidth;
        const containerHeight = document.querySelector('.content').clientHeight;
    
        // Calculate the boundary limits to prevent overflow
        const maxLeft = containerWidth - elmnt.offsetWidth;
        const maxTop = containerHeight - elmnt.offsetHeight;
    
        // Limit the position within the container boundaries
        const newLeft = Math.max(0, Math.min(elmnt.offsetLeft - pos1, maxLeft));
        const newTop = Math.max(0, Math.min(elmnt.offsetTop - pos2, maxTop));

        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // Set the element's new position
        elmnt.style.left = newLeft + "px";
        elmnt.style.top = newTop + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
}