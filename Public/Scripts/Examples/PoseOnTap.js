// TapPrintData.js
// Version: 1.0.0
// Event: Lens Initialized
// Description: Prints a snippet of current pose on the screen.


//@input Component.Script poseDetector
//@input SceneObject bodyLostHint
//@input SceneObject textHint

var bodyIn = false;


function init() {
   script.poseDetector.api.addCallback("onBodyFound", onBodyFound);
   script.poseDetector.api.addCallback("onBodyLost", onBodyLost);
   script.poseDetector.api.activate();

   var tapper = script.createEvent("TapEvent");
   tapper.bind(onTap);

   script.bodyLostHint.enabled = true;
}


function onBodyFound() {
   bodyIn = true;

   script.bodyLostHint.enabled = false;
   script.textHint.enabled = true;

   print("Body found!");
}


function onBodyLost() {
   bodyIn = false;

   script.bodyLostHint.enabled = true;
   script.textHint.enabled = false;

   print("Body lost!");
}


function onTap() {
   if (!bodyIn) {
      print("Body is not in frame!");
      return;
   }

   var pose = script.poseDetector.api.getCurrentPose();
   print("Please copy and paste the following line into PoseDatabase.js file and, set name property and remove the time stamp from it.");
   print(JSON.stringify(pose));
}


init();