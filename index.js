const dropZone = document.querySelector(".drop-zone"); //done to listen to the event

//listening to the event "drag" when somethingis dragged then the event is fired//

dropZone.addEventListener("dragover", (e) => {
  console.log("dragging");
  dropZone.classList("dragged"); //adding the side transtion of the icons
});
