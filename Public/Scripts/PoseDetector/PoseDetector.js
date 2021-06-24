// PoseDetector.js
// Version: 1.0.0
// Event: Lens Initialized
// Description: Provides an API to save or detect upper body poses using ObjectTraking component.
// Usage:
// 1. Assign all traked markers and the PoseDatabase.js script.
// 2. Set the threshold, which defines the maximum allowed
//    sum of differences between all corresponding angles.
//    The greater this number the more loose will be pose matching,
//    and the lower this number to more precise pose will be required
//    to a matching one to see them as same.


//@input Component.ObjectTracking head
//@input Component.ObjectTracking neck
//@input Component.ObjectTracking rightShoulder
//@input Component.ObjectTracking leftShoulder
//@input Component.ObjectTracking rightElbow
//@input Component.ObjectTracking leftElbow
//@input Component.ObjectTracking rightHand
//@input Component.ObjectTracking leftHand
//@input Component.ScriptComponent dataBase
//@input float threshold = 0.5


const trackers = [
    script.rightShoulder,
    script.leftShoulder,
    script.rightElbow,
    script.leftElbow,
    script.head,
    script.neck,
];
const transforms = [
    script.rightShoulder.getSceneObject().getFirstComponent("Component.ScreenTransform"),
    script.leftShoulder.getSceneObject().getFirstComponent("Component.ScreenTransform"),
    script.rightElbow.getSceneObject().getFirstComponent("Component.ScreenTransform"),
    script.leftElbow.getSceneObject().getFirstComponent("Component.ScreenTransform"),
    script.rightHand.getSceneObject().getFirstComponent("Component.ScreenTransform"),
    script.leftHand.getSceneObject().getFirstComponent("Component.ScreenTransform"),
    script.head.getSceneObject().getFirstComponent("Component.ScreenTransform"),
    script.neck.getSceneObject().getFirstComponent("Component.ScreenTransform"),
];
var poseName = "NONE";
var tracker = null;
var foundEmitted = false;
var lostEmitted = false;
var poseEmitted = false;
var poseLostEmitted = false;


// Set of functions to be called on the correcponding event.
const bodyFoundCallbacks = [];
const bodyLostCallbacks = [];
const poseDetectedCallbacks = [];
const poseLostCallbacks = [];
script.api.addCallback = function(CallbackName, fun) {
    switch (CallbackName) {
        case "onBodyFound":
            bodyFoundCallbacks.push(fun);
            break;
        case "onBodyLost":
            bodyLostCallbacks.push(fun);
            break;
        case "onPoseDetected":
            poseDetectedCallbacks.push(fun);
            break;
       case "onPoseLost":
          poseLostCallbacks.push(fun);
          break;
       default:
            print("Unknown Callback!");
    }
};


// Defines if body is in frame.
function isTracking() {
    for (var i in trackers) {
        if (!trackers[i].isTracking()) {
            return false;
        }
    }
    return true;
}


// Converts object tracking markers data into list of points (vectors)
function transformsToPoints() {
    var points = [];
    for (var i in transforms) {
        points.push(transforms[i].anchors.getCenter());
    }
    return points;
}


// Converts a list of points into a pose print.
// A pose print is a JS object that hilds 8 angles to represent a pose.
function pointsToPrint(points) {
    // Get shoulder line
    var lShVec = new vec2(points[0].x, points[0].y);
    var rShVec = new vec2(points[1].x, points[1].y);
    var shPoint = lShVec.add(rShVec).uniformScale(0.5);
    var shVec = lShVec.sub(rShVec);

    // Get perpendicular
    var perp = new vec2(-1 * shVec.y, shVec.x).normalize();
    var angles = [];

    for (var i in points) {
        // Get distance from shoulder point
        var vec = shPoint.sub(new vec2(points[i].x, points[i].y)).normalize();
        if (vec.length == 0) {
            print("Warning: zero length vector detected!");
            continue;
        }

        // Get angle between the point vector and the perpendicular
        var angle = Math.acos(vec.dot(perp));

        // Push values
        angles.push(angle);
    }

    // Normalize print
    var max = -1;
    for (var i in angles) {
        if (angles[i] > max) {
            max = angles[i];
        }
    }
    for (var i in angles) {
        angles[i] = angles[i] / max;
    }

    // Return print
    return {
        name: "NAME_THIS_POSE",
        angles: angles,
    };
}


// Looks to a database and returns a pose closest to the given pose print
function printToPose(posePrint) {
    if (posePrint.angles.length != transforms.length) {
        print("Error: Unable to match shape - wrong angles length!");
        return { key: "NONE" };
    }

    var diffs = [];
    for (var i in script.dataBase.api.posePrints) {
        diffs.push({
            diff: matchPrint(posePrint, script.dataBase.api.posePrints[i]),
            key: script.dataBase.api.posePrints[i].name
        });
    }

    diffs.sort(compare);
    if (isNaN(diffs[0].diff) || diffs[0].diff > script.threshold) {
        // print("Unable to match shape - threshold test not passed! " + diffs[0].diff)
        return { key: "NONE" };
    }

    // print("Thresold: " + diffs[0].diff)
    return diffs[0];
}


function compare(a, b) {
    return a.diff - b.diff;
}


// Returns a cummulative difference between the given pose and print
function matchPrint(shape, dbPrint) {
    var angleDiff = 0;
    for (var i in transforms) {
        angleDiff += Math.abs(shape.angles[i] - dbPrint.angles[i]);
    }
    return angleDiff;
}


// Pose detector function. Runs on every frame.
function update() {
    if (!isTracking()) {
        if (!lostEmitted) {
            for (var i in bodyLostCallbacks) {
                bodyLostCallbacks[i]();
            }
            lostEmitted = true;
            foundEmitted = false;
        }
        return;
    } else {
        if (!foundEmitted) {
            for (var i in bodyFoundCallbacks) {
                bodyFoundCallbacks[i]();
            }
            foundEmitted = true;
            lostEmitted = false;
            return;
        }
    }

    var points = transformsToPoints();
    var _print = pointsToPrint(points);
    var pose = printToPose(_print);
    if (pose.key != "NONE") {
        if (pose.key == poseName) {
            return;
        }
        poseName = pose.key;
        if (!poseEmitted) {
            for (var i in poseDetectedCallbacks) {
                poseDetectedCallbacks[i](poseName);
            }
            poseEmitted = true;
         }
         poseLostEmitted = false;
    } else {
        poseName = "NONE";
        if (!poseLostEmitted) {
           for (var i in poseLostCallbacks) {
              poseLostCallbacks[i]();
           }
           poseLostEmitted = true;
        }
        poseEmitted = false;
    }
}


// Returns current pose on the screen.
script.api.getCurrentPose = function() {
    var points = transformsToPoints();
    var shapePrint = pointsToPrint(points);
    return shapePrint;
};


// Activates the pose detector.
script.api.activate = function() {
    if (tracker != null) {
        print("Unable to activate Tracker: tracker is not null!");
        return;
    }

    if (!script.dataBase) {
        print("Database not set!");
        return;
    }

    lostEmitted = false;
    foundEmitted = false;
    tracker = script.createEvent("UpdateEvent");
    tracker.bind(update);

    print("Matcher activated!");
};