// JumpingJack.js
// Version: 1.0.0
// Event: Lens Initialized
// Description: Counts Jamping Jack poses.


//@input Component.Script poseDetector
//@input Component.Text counter
//@input SceneObject bodyLostHint


var counter = 0;
var ready = false;


function init() {
   script.poseDetector.api.addCallback("onBodyFound", onBodyFound);
   script.poseDetector.api.addCallback("onBodyLost", onBodyLost);
   script.poseDetector.api.addCallback("onPoseDetected", onPoseDetected);
   script.poseDetector.api.activate();

   script.bodyLostHint.enabled = false;
}


function onBodyFound() {
   bodyIn = true;

   script.bodyLostHint.enabled = false;
   script.counter.enabled = true;

   print("Body found!");
}


function onBodyLost() {
   bodyIn = false;

   script.bodyLostHint.enabled = true;
   script.counter.enabled = false;

   print("Body lost!");
}


function onPoseDetected(poseName) {
   print("Pose detected: " + poseName);
   
   if (poseName == "BEND_ARMS_DOWN") {
      ready = true;
   }

   if (poseName == "BEND_ARMS_UP" && ready) {
      counter += 1;
      script.counter.text = counter.toString();
      ready = false;
   }
}


init();