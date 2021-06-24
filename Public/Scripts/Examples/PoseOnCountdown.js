// CountdownPrintData.js
// Version: 1.0.0
// Event: Lens Initialized
// Description: Prints a snippet of current pose on the screen after a few seconds delay.


//@input Component.Script poseDetector
//@input Component.Text counter
//@input Component.Text hint
//@input SceneObject bodyLostHint
//@input SceneObject textHint


var bodyIn = false;
var delay = 6;
var snapshotTime = -1;
var countTracker = null;
var tapper = null;
var active = false;


function init() {
   script.poseDetector.api.addCallback("onBodyFound", onBodyFound);
   script.poseDetector.api.addCallback("onBodyLost", onBodyLost);
   script.poseDetector.api.activate();

   script.counter.enabled = false;
   script.bodyLostHint.enabled = true;
   script.textHint.enabled = false;

   tapper = script.createEvent("TapEvent");
   tapper.bind(onTap);
}


function onTap() {
   if (!countTracker) {
      countTracker = script.createEvent("UpdateEvent");
      countTracker.bind(update);
   }

   script.hint.enabled = false;

   restart();
}


function restart() {
   snapshotTime = getTime() + delay;
   active = true;
   script.counter.enabled = true;
}


function onBodyFound() {
   script.counter.enabled = false;
   script.bodyLostHint.enabled = false;
   script.textHint.enabled = true;

   bodyIn = true;

   if (!active) {
      return;
   }

   restart();
   print("Body found!");
}


function onBodyLost() {
   script.counter.enabled = false;
   script.bodyLostHint.enabled = true;
   script.textHint.enabled = false;
   
   bodyIn = false;

   if (!active) {
      return;
   }

   print("Body lost!");
}


function update() {
   if (!bodyIn) {
      return;
   }

   var timeLeft = Math.floor(snapshotTime - getTime());
   if (timeLeft > 0) {
      script.counter.text = timeLeft.toString();
      return;
   }

   active = true;

   takeSnapshot();
}


function takeSnapshot() {
   script.removeEvent(countTracker);
   countTracker = null;

   script.counter.text = "Done!";

   var pose = script.poseDetector.api.getCurrentPose();
   print("Please copy and paste the following line into PoseDatabase.js file and remove the time stamp from it.");
   print(JSON.stringify(pose));
}


init();