// CurrentPoseIcon.js
// Version: 1.0.0
// Event: Lens Initialized
// Description: Sends a custom trigger when a body pose detected.


//@input Component.Script poseDetector
//@input Component.Image image

var bodyIn = false;
var countTracker = null;

function init() {
   script.poseDetector.api.addCallback("onBodyFound", onBodyFound);
   script.poseDetector.api.addCallback("onBodyLost", onBodyLost);
   script.poseDetector.api.addCallback("onPoseDetected", onPoseDetected);
   script.poseDetector.api.activate();
}

function onBodyFound() {
   bodyIn = true;
   script.image.enabled = true;
   print("Body found!");
}


function onBodyLost() {
   bodyIn = false;
   script.image.enabled = false;
   print("Body lost!");
}


function onPoseDetected(poseName) {
   print("Pose detected: " + poseName);
   global.scBehaviorSystem.sendCustomTrigger(poseName);
}


init();