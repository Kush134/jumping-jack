interface ComponentNameMap {
   "Component.Animation": Animation;
   "Component.AnimationMixer": AnimationMixer;
   "Component.AudioChainComponent": AudioEffectComponent;
   "Component.AudioPlayer": AudioComponent;
   "Component.AudioTriggerComponent": AudioTriggerComponent;
   "Component.BaseMeshVisual": BaseMeshVisual;
   "Component.BillboardVisual": BillboardVisual;
   "Component.BlendShapes": BlendShapes;
   "Component.Camera": Camera;
   "Component.ClearDepth": ClearDepth;
   "Component.ClientInterfaceComponent": ClientInterfaceComponent;
   "Component.Data": DataComponent;
   "Component.DataStoreComponent": DataStoreComponent;
   "Component.DepthSetter": DepthSetter;
   "Component.DeviceLocationTrackingComponent": DeviceLocationTrackingComponent;
   "Component.Eye": Eye;
   "Component.EyeColorVisual": EyeColorVisual;
   "Component.FaceInsetVisual": FaceInsetVisual;
   "Component.FaceStretchVisual": FaceStretchVisual;
   "Component.FaceSubVisual": FaceMaskVisual;
   "Component.Gyroscope": Gyroscope;
   "Component.HairSimulationColliderComponent": HairSimulationColliderComponent;
   "Component.HairVisual": HairVisual;
   "Component.Head": Head;
   "Component.Hints": HintsComponent;
   "Component.Inpainting": Inpainting;
   "Component.LightSource": LightSource;
   "Component.LiquifyVisual": LiquifyVisual;
   "Component.LookAtComponent": LookAtComponent;
   "Component.MLComponent": MLComponent;
   "Component.ManipulateComponent": ManipulateComponent;
   "Component.MarkerTrackingComponent": MarkerTrackingComponent;
   "Component.MaterialMeshVisual": MaterialMeshVisual;
   "Component.MeshVisual": RenderMeshVisual;
   "Component.ObjectDetector": ObjectDetector;
   "Component.ObjectTracker2D": ObjectTracking;
   "Component.ParticlesVisual": ParticlesVisual;
   "Component.PinToMeshComponent": PinToMeshComponent;
   "Component.PostEffectVisual": PostEffectVisual;
   "Component.PrefabInstantiator": PrefabInstantiator;
   "Component.Reconstruction": Reconstruction;
   "Component.RectangleSetter": RectangleSetter;
   "Component.Restriction": RestrictionComponent;
   "Component.RetouchVisual": RetouchVisual;
   "Component.Rotator": Rotator;
   "Component.ScreenRegionComponent": ScreenRegionComponent;
   "Component.ScreenTransform": ScreenTransform;
   "Component.Script": ScriptComponent;
   "Component.SkeletonTracking": SkeletonTracking;
   "Component.Skin": Skin;
   "Component.Snap3D": Snap3D;
   "Component.SplineComponent": SplineComponent;
   "Component.SpriteAligner": SpriteAligner;
   "Component.SpriteVisual": SpriteVisual;
   "Component.SpriteVisualV2": Image;
   "Component.StreamPlayerComponent": StreamPlayerComponent;
   "Component.Surface": Surface;
   "Component.Text": Text;
   "Component.TextVisual": Label;
   "Component.Touch": TouchComponent;
   "Component.VertexCache": VertexCache;
   "Component.VideoRecorderComponent": VideoRecorderComponent;
   "Component.Visual": Visual;
   "Component.WorldTracking": DeviceTracking;
}

interface EventNameMap {
   "BrowsLoweredEvent": BrowsLoweredEvent;
   "BrowsRaisedEvent": BrowsRaisedEvent;
   "BrowsReturnedToNormalEvent": BrowsReturnedToNormalEvent;
   "BrowsWereJustFrownedEvent": BrowsLoweredEvent;
   "BrowsWereJustRaisedEvent": BrowsRaisedEvent;
   "BrowsWereJustReturnedToNormalEvent": BrowsReturnedToNormalEvent;
   "CameraBackEvent": CameraBackEvent;
   "CameraFrontEvent": CameraFrontEvent;
   "ClientInterfaceActionTakenEvent": ClientInterfaceActionTakenEvent;
   "ClientInterfacePlayButtonTriggerEvent": ClientInterfacePlayButtonTriggerEvent;
   "ComponentDisabledEvent": ComponentDisabledEvent;
   "ComponentEnabledEvent": ComponentEnabledEvent;
   "ComponentEvent": ComponentEvent;
   "DelayedCallbackEvent": DelayedCallbackEvent;
   "EmotionChangedEvent": EmotionChangedEvent;
   "ExternalEvent": ExternalEvent;
   "FaceFoundEvent": FaceFoundEvent;
   "FaceLostEvent": FaceLostEvent;
   "FaceTrackingEvent": FaceTrackingEvent;
   "KissFinishedEvent": KissFinishedEvent;
   "KissJustFinishedEvent": KissFinishedEvent;
   "KissJustStartedEvent": KissStartedEvent;
   "KissStartedEvent": KissStartedEvent;
   "LateUpdateEvent": LateUpdateEvent;
   "LongPressEndEvent": LongPressEndEvent;
   "LongPressStartEvent": LongPressStartEvent;
   "ManipulateEndEvent": ManipulateEndEvent;
   "ManipulateStartEvent": ManipulateStartEvent;
   "MouthClosedEvent": MouthClosedEvent;
   "MouthOpenedEvent": MouthOpenedEvent;
   "MouthWasJustClosedEvent": MouthClosedEvent;
   "MouthWasJustOpenedEvent": MouthOpenedEvent;
   "ObjectTrackingEndEvent": ObjectTrackingEndEvent;
   "ObjectTrackingEvent": ObjectTrackingEvent;
   "ObjectTrackingStartEvent": ObjectTrackingStartEvent;
   "OnLoopStartedEvent": OnTimeStartEvent;
   "OnTimeStartEvent": OnTimeStartEvent;
   "PanGestureEndEvent": PanGestureEndEvent;
   "PanGestureMoveEvent": PanGestureMoveEvent;
   "PanGestureStartEvent": PanGestureStartEvent;
   "SceneEvent.BrowsWereJustFrownedEvent": BrowsLoweredEvent;
   "SceneEvent.BrowsWereJustRaisedEvent": BrowsRaisedEvent;
   "SceneEvent.BrowsWereJustReturnedToNormalEvent": BrowsReturnedToNormalEvent;
   "SceneEvent.KissJustFinishedEvent": KissFinishedEvent;
   "SceneEvent.KissJustStartedEvent": KissStartedEvent;
   "SceneEvent.MouthWasJustClosedEvent": MouthClosedEvent;
   "SceneEvent.MouthWasJustOpenedEvent": MouthOpenedEvent;
   "SceneEvent.OnLoopStartedEvent": OnTimeStartEvent;
   "SceneEvent.SmileJustFinishedEvent": SmileFinishedEvent;
   "SceneEvent.SmileJustStartedEvent": SmileStartedEvent;
   "SceneEvent.SnappableSessionReadyEvent": SnappablesSessionReadyEvent;
   "SceneEvent.SurfaceTrackingResetEvent": SurfaceTrackingResetEvent;
   "SceneObjectEvent": SceneObjectEvent;
   "SmileFinishedEvent": SmileFinishedEvent;
   "SmileJustFinishedEvent": SmileFinishedEvent;
   "SmileJustStartedEvent": SmileStartedEvent;
   "SmileStartedEvent": SmileStartedEvent;
   "SnapImageCaptureEvent": SnapImageCaptureEvent;
   "SnapRecordStartEvent": SnapRecordStartEvent;
   "SnapRecordStopEvent": SnapRecordStopEvent;
   "SnapcodeFoundEvent": SnapcodeFoundEvent;
   "SnappableSessionReadyEvent": SnappablesSessionReadyEvent;
   "SnappablesSessionInitFailedEvent": SnappablesSessionInitFailedEvent;
   "SnappablesSessionReadyEvent": SnappablesSessionReadyEvent;
   "SurfaceTrackingResetEvent": SurfaceTrackingResetEvent;
   "TapEvent": TapEvent;
   "TouchEndEvent": TouchEndEvent;
   "TouchMoveEvent": TouchMoveEvent;
   "TouchStartEvent": TouchStartEvent;
   "TurnOffEvent": TurnOffEvent;
   "TurnOnEvent": TurnOnEvent;
   "UpdateEvent": UpdateEvent;
   "WorldTrackingModeChangedEvent": WorldTrackingModeChangedEvent;
   "WorldTrackingResetEvent": SurfaceTrackingResetEvent;
}

/**
* @description Returns the time in seconds since the lens was started.
*/
declare function getTime(): number

/**
* @description Returns the time difference in seconds between the current frame and previous frame.
*/
declare function getDeltaTime(): number

/**
* @description Prints out a message to the Logger window.
*/
declare function print(message: Object): void

/**
* @description Returns the version number of the engine running the lens.
*/
declare function getCoreVersion(): number

declare function getScenariumVersion(): number

declare function getFileVersion(): number

/**
* @description Returns true if the passed in object is null or destroyed. Useful as a safe way to check if a SceneObject or Component has been destroyed.
*/
declare function isNull(reference: Object): boolean

declare function startProfilingSession(): void

declare function endProfilingSession(): void

declare function startProfilingScope(scopeName: string): void

declare function endProfilingScope(scopeName: string): void

declare function beginMeasure(name: string): void

declare function endMeasure(name: string): number

/**
* @deprecated
*/
declare function toEuler(arg1: quat): vec3

/**
* @deprecated
*/
declare function quatFromAngleAxis(arg1: number, arg2: vec3): quat

/**
* @deprecated
*/
declare function fromEuler(eulerAngles: vec3): quat

/**
* @deprecated
*/
declare function slerp(x: quat, y: quat, t: number): quat

/**
* @deprecated
*/
declare function mat2Add(arg1: mat2, arg2: mat2): mat2

/**
* @deprecated
*/
declare function mat2Sub(arg1: mat2, arg2: mat2): mat2

/**
* @deprecated
*/
declare function mat2Mul(arg1: mat2, arg2: mat2): mat2

/**
* @deprecated
*/
declare function mat2Div(arg1: mat2, arg2: mat2): mat2

/**
* @deprecated

* @description Returns the result of adding `arg1` and `arg2`.
*/
declare function mat3Add(arg1: mat3, arg2: mat3): mat3

/**
* @deprecated

* @description Returns the result of subtracting `arg2` from `arg1`.
*/
declare function mat3Sub(arg1: mat3, arg2: mat3): mat3

/**
* @deprecated
*/
declare function mat3Mul(arg1: mat3, arg2: mat3): mat3

/**
* @deprecated
*/
declare function mat3Div(arg1: mat3, arg2: mat3): mat3

/**
* @deprecated

* @description Returns the inverse mat3 of `arg1`.
*/
declare function inverseMat3(arg1: mat3): mat3

/**
* @deprecated

* @description Returns the determinant of `arg1`.
*/
declare function determinantMat3(arg1: mat3): number

/**
* @deprecated
*/
declare function transposeMat3(arg1: mat3): mat3

/**
* @deprecated
*/
declare function matrixCompMultMat3(arg1: mat3, arg2: mat3): mat3

/**
* @deprecated
*/
declare function outerProductMat3(arg1: vec3, arg2: vec3): mat3

/**
* @deprecated
*/
declare function mat4Add(arg1: mat4, arg2: mat4): mat4

/**
* @deprecated

* @description Returns the result of subtracting `arg2` from `arg1`.
*/
declare function mat4Sub(arg1: mat4, arg2: mat4): mat4

/**
* @deprecated
*/
declare function mat4Mul(arg1: mat4, arg2: mat4): mat4

/**
* @deprecated
*/
declare function mat4Div(arg1: mat4, arg2: mat4): mat4

/**
* @deprecated

* @description Returns the inverse mat4 of `arg1`.
*/
declare function inverseMat4(arg1: mat4): mat4

/**
* @deprecated

* @description Returns the determinant of `arg1`.
*/
declare function determinantMat4(arg1: mat4): number

/**
* @deprecated
*/
declare function transposeMat4(arg1: mat4): mat4

/**
* @deprecated
*/
declare function matrixCompMultMat4(arg1: mat4, arg2: mat4): mat4

/**
* @deprecated
*/
declare function outerProductMat4(arg1: vec4, arg2: vec4): mat4

/**
* @deprecated
*/
declare function eulerAngleX(arg1: number): mat4

/**
* @deprecated
*/
declare function eulerAngleY(arg1: number): mat4

/**
* @deprecated
*/
declare function eulerAngleZ(arg1: number): mat4

/**
* @deprecated
*/
declare function eulerAngleYXZ(x: vec3): mat4

/**
* @deprecated
*/
declare function yawPitchRoll(yaw: vec3): mat4

/**
* @deprecated
*/
declare function extractEulerAngleXYZ(mat: mat4): vec3

declare namespace global {
   let assetSystem: AssetSystem

   /**
   * @description Returns the global [ScriptScene](/api/classes/ScriptScene) object, which offers information and controls for the current scene.
   */
   let scene: ScriptScene

   /**
   * @description Returns the global [TouchDataProvider](/api/classes/TouchDataProvider), which controls how the Lens handles touch events.
   */
   let touchSystem: TouchDataProvider

   let analyticsSystem: AnalyticsSystem

   /**
   * @description Returns the global [PersistentStorageSystem](/api/classes/PersistentStorageSystem), which allows data to persist between Lens sessions.
   */
   let persistentStorageSystem: PersistentStorageSystem

   let launchParams: GeneralDataStore

   let userInfoSystem: UserInfoSystem

   let deviceInfoSystem: DeviceInfoSystem

   /**
   * @description Returns the global [LocalizationSystem](/api/classes/LocalizationSystem), which helps convert times, dates, and other units to user friendly strings.
   */
   let localizationSystem: LocalizationSystem

   let clientInterfaceSystem: ClientInterfaceSystem

   let lensDataSystem: LensDataSystem

   let snappablesSystem: SnappablesSystem

   let snapRecordingSystem: SnapRecordingSystem

   let uriSystem: UriSystem

   let sceneIntelligenceSystem: SceneIntelligenceSystem

   let multiplayerSystem: MultiplayerSystem

   let hapticFeedbackSystem: HapticFeedbackSystem

   let friendSystem: FriendSystem

   let bitmojiSystem: BitmojiSystem

   let experimentSystem: ExperimentSystem

   let sceneConfig: SceneConfig

   let drawingSystem2D: DrawingSystem2D

   let debugRenderSystem: DebugRender

   let objectTrackingSystem: ObjectTrackingSystem

   /**
   * @deprecated
   */
   let objectTracker2DSystem: ObjectTrackingSystem

   let serializationSystem: SerializationSystem

   let textInputSystem: TextInputSystem

   let freezeFrameSystem: FreezeFrameSystem

   let glyphLoader: GlyphLoader

   /**
   * @description Returns the global [UserContextSystem](/api/classes/UserContextSystem), which provides information about the user such as display name, birthday, and even current weather.
   */
   let userContextSystem: UserContextSystem

   let coreVersionChecks: CoreVersionChecks

}

/**
* @description The base class for data accessible through [DataComponent](/api/classes/DataComponent).
*/
interface AbstractData extends ScriptObject {
}

/**
* @description Interface for sending Blizzard analytics events. Accessible from [DataComponent](/api/classes/DataComponent).
*/
interface AnalyticsSystem extends ScriptObject {
   /**
   * @description Set an analytics event with name `name` to value `value`.
   */
   setEventValue(name: string, value: string): void

}

/**
* @description Controls an animated texture resource. Can be accessed from [Texture.control](/api/classes/Texture#control-textureprovider) on an animated texture.
* See also: [2D Animation Guide](/guides/2d/2d-animation).
*/
interface AnimatedTextureFileProvider extends TextureProvider {
   /**
   * @description Returns whether the animation is currently playing.
   */
   isPlaying(): boolean

   /**
   * @description Returns whether the animation is currently paused.
   */
   isPaused(): boolean

   /**
   * @description Returns whether the animation is finished playing.
   */
   isFinished(): boolean

   /**
   * @description Plays the animation `loops` times, starting with an offset of `offset` seconds.
   */
   play(loops: number, offset: number): void

   /**
   * @description Stops the animation.
   */
   stop(): void

   /**
   * @description Pauses the animation.
   */
   pause(): void

   /**
   * @description Resumes a paused animation from the frame that was last played.
   */
   resume(): void

   /**
   * @description Start playing the animation from frame `frameIndex`, `loops` times.
   */
   playFromFrame(frameIndex: number, loops: number): void

   /**
   * @description Pauses the animation at frame `frameIndex`.
   */
   pauseAtFrame(frameIndex: number): void

   /**
   * @description Returns the number of frames in the animation.
   */
   getFramesCount(): number

   /**
   * @description Returns the index of the frame that is currently playing.
   */
   getCurrentPlayingFrame(): number

   /**
   * @description Returns how long the animation is in seconds.
   */
   getDuration(): number

   /**
   * @description Sets the callback function to be called whenever the animation stops playing.
   */
   setOnFinish(eventCallback: (animatedTexture: AnimatedTextureFileProvider) => void): void

   clone(): AnimatedTextureFileProvider

   getAllAnimationGroups(): string[]

   getAnimationGroupFilenames(groupName: string): string[]

   useFrameByName(name: string): void

   /**
   * @description Whether the animation plays in reverse.
   */
   isReversed: boolean

   /**
   * @description If enabled, the animation will alternate between normal and reverse each time it loops.
   */
   isPingPong: boolean

   /**
   * @description Returns whether the animation was set to automatically play and loop.
   */
   isAutoplay: boolean

   /**
   * @description The animation track used to control the frame animation.
   */
   track: IntStepAnimationTrackKeyFramed

   animationGroup: string

   duration: number

}

/**
* @description Used by [AnimationMixer](/api/classes/AnimationMixer) to animate a single object in the hierarchy.
* These are automatically added to SceneObjects when importing animated FBX files.
* See also: [Playing 3D Animation Guide](/guides/scripting/playing-3d-animation), [AnimationMixer](/api/classes/AnimationMixer), [AnimationLayer](/api/classes/AnimationLayer).
*/
interface Animation extends Component {
   /**
   * @description Returns the AnimationLayer under the name `layerName`.
   */
   getAnimationLayerByName(layerName: string): AnimationLayer

   /**
   * @description Adds an AnimationLayer under the name `layerName`.
   */
   setAnimationLayerByName(layerName: string, animationLayer: AnimationLayer): void

   /**
   * @description Removes the AnimationLayer under the name `layerName`.
   */
   removeAnimationLayerByName(layerName: string): void

}

/**
* @description Used by [AnimationMixerLayer](/api/classes/AnimationMixerLayer) for setting animation looping behavior.
*/
declare namespace AnimationClip {
   enum PostInfinity {
      /**
      * @description The animation will restart from the beginning each time it loops.
      */
      Cycle,
      /**
      * @description The animation will switch between normal and reverse playback each time it loops.
      */
      Oscillate
   }

}
/**
* @description Used by [AnimationMixerLayer](/api/classes/AnimationMixerLayer) for setting animation clip range type.
*/
declare namespace AnimationClip {
   enum RangeType {
      /**
      * @description Range is specified by start and end time, in seconds
      */
      Time,
      /**
      * @description Range is specified by start and end frame numbers
      */
      Frames
   }

}
/**
* @description Configures an animation layer for a single [SceneObject](/api/classes/SceneObject).
* Gives access to position, rotation, scale and blend shape animation tracks.
* See also: [Playing 3D Animation Guide](/guides/scripting/playing-3d-animation), [AnimationMixer](/api/classes/AnimationMixer), [Animation](/api/classes/Animation).
*/
interface AnimationLayer extends Asset {
   /**
   * @description Sets or adds a [FloatAnimationTrack](/api/classes/FloatAnimationTrack) to this AnimationLayer's blend shapes.
   */
   setBlendShapeTrack(shapeName: string, track: FloatAnimationTrack): void

   /**
   * @description Returns a [FloatAnimationTrack](/api/classes/FloatAnimationTrack) from this AnimationLayer's blend shapes.
   */
   getBlendShapeTrack(shapeName: string): FloatAnimationTrack

   /**
   * @description The [Vec3AnimationTrack](/api/classes/Vec3AnimationTrack) controlling position in this AnimationLayer.
   */
   position: Vec3AnimationTrack

   /**
   * @description The [QuaternionAnimationTrack](/api/classes/QuaternionAnimationTrack) controlling rotation in this AnimationLayer.
   */
   rotation: QuaternionAnimationTrack

   /**
   * @description The [Vec3AnimationTrack](/api/classes/Vec3AnimationTrack) controlling scale in this AnimationLayer.
   */
   scale: Vec3AnimationTrack

   /**
   * @description The [IntAnimationTrack](/api/classes/IntAnimationTrack) controlling visibility in this AnimationLayer.
   */
   visibility: IntAnimationTrack

}

/**
* @description Controls playback of animations on the attached [SceneObject](/api/classes/SceneObject) and its child objects.
* Please refer to the [Playing 3D Animation Guide](/guides/scripting/playing-3d-animation) for setting up and playing animations.
*/
interface AnimationMixer extends Component {
   /**
   * @description Rebuild the animation hierarchy by finding all [Animation](/api/classes/Animation) components in the SceneObject and its children.
   */
   resetAnimations(): void

   /**
   * @description Starts playing animation layers named `name`, or all layers if `name` is empty. The animation will start with an offset of `offset` seconds. The animation will play `cycles` times, or loop forever if `cycles` is -1.
   */
   start(name: string, offset: number, cycles: number): void

   /**
   * @description Starts playing animation layers named `name`, or all layers if `name` is empty. The animation will start with an offset of `offset` seconds. The animation will play `cycles` times, or loop forever if `cycles` is -1. `eventCallback` will be called after any animation layer finishes playing.
   */
   startWithCallback(name: string, offset: number, cycles: number, eventCallback: (name: string, animationMixer: AnimationMixer) => void): void

   /**
   * @description Stops any animation layer with name `name`, or all layers if `name` is empty.
   */
   stop(name: string): void

   /**
   * @description Pauses animation layers named `name`, or all layers if `name` is empty.
   */
   pause(name: string): void

   /**
   * @description Resumes any paused animation layer with name `name`, or all layers if `name` is empty.
   */
   resume(name: string): void

   forceUpdate(): void

   /**
   * @deprecated
   
   * @description Sets the weight of any layers with name `name`.
   */
   setWeight(name: string, weight: number): void

   /**
   * @description Returns the current time (in seconds) of the layer named `name`.
   */
   getLayerTime(name: string): number

   /**
   * @description Makes a copy of the layer `name` and stores it as `newName`.
   */
   cloneLayer(name: string, newName: string): AnimationMixerLayer

   /**
   * @description Adds a new AnimationMixerLayer to this AnimationMixer.
   */
   createClip(name: string): AnimationMixerLayer

   /**
   * @description Returns a list of all AnimationMixerLayers controlled by the AnimationMixer.
   */
   getLayers(): AnimationMixerLayer[]

   /**
   * @description Returns the AnimationMixerLayer with the name `name`.
   */
   getLayer(name: string): AnimationMixerLayer

   /**
   * @description Returns a list of names of AnimationLayers in this AnimationMixer.
   */
   getAnimationLayerNames(): string[]

   /**
   * @description A multiplying value for the speed of all animations being controlled by the AnimationMixer.
   * For example, a value of 2.0 will double animation speed, while a value of 0.5 will cut the speed in half.
   */
   speedRatio: number

   /**
   * @description Whether this AnimationMixer is set to automatically play animations on start.
   */
   autoplay: boolean

}

/**
* @description Controls animation playback for a single animation layer.
* See also: [AnimationMixer](/api/classes/AnimationMixer).
*/
interface AnimationMixerLayer extends ScriptObject {
   /**
   * @description Starts playing the animation with an offset of `offsetArg` seconds.
   * The animation will play `cycles` times, or loop forever if `cycles` is -1.
   */
   start(offset: number, cycles: number): void

   /**
   * @description Starts the animation with an offset of `offsetArg` seconds.
   * The animation will play `cycles` times, or loop forever if `cycles` is -1.
   * `eventCallback` will be called after the animation finishes.
   */
   startWithCallback(offset: number, cycles: number, eventCallback: (name: string, animationMixer: AnimationMixer) => void): void

   /**
   * @description Stops the animation from playing and jumps to the animation's end.
   */
   stop(): void

   /**
   * @description Pauses the animation.
   */
   pause(): void

   /**
   * @description Resumes the animation if it has been paused.
   */
   resume(): void

   /**
   * @description Returns whether the animation is currently playing.
   */
   isPlaying(): boolean

   /**
   * @description Returns the length of the animation in seconds.
   */
   getDuration(): number

   /**
   * @description Returns the current playback position of the animation in seconds.
   */
   getTime(): number

   /**
   * @description Returns a copy of this AnimationMixerLayer, with the name changed to `newName`.
   */
   clone(newName: string): AnimationMixerLayer

   /**
   * @description The name of the AnimationMixerLayer.
   */
   name: string

   /**
   * @deprecated
   */
   layer: string

   /**
   * @description The name of the animation layer being used for this animation.
   */
   animationLayerName: string

   /**
   * @description The weight of this animation layer. Range is from [0-1], 0 being no animation strength and 1 being full animation strength.
   */
   weight: number

   /**
   * @description A multiplying value for the speed of this animation.
   * For example, a value of 2.0 will double animation speed, while a value of 0.5 will cut the speed in half.
   */
   speedRatio: number

   /**
   * @description The starting point for this animation clip.
   * If `rangeType` is set to `Time`, this is the point to start at in seconds.
   * If `rangeType` is set to `Frames`, this is the frame number to start at.
   */
   from: number

   /**
   * @description The ending point for this animation clip.
   * If `rangeType` is set to `Time`, this is the point to end at in seconds.
   * If `rangeType` is set to `Frames`, this is the frame number to end at.
   */
   to: number

   /**
   * @description The framerate (frames per second) of the animation.
   */
   fps: number

   /**
   * @description The range type used for defining the animation clip.
   * If set to `AnimationClip.RangeType.Time`, `to` and `from` represent times in seconds.
   * If set to `AnimationClip.RangeType.Frames`, `to` and `from` represent frame numbers.
   */
   rangeType: AnimationClip.RangeType

   /**
   * @description The number of times this animation will play. If -1, the animation will loop forever.
   */
   cycles: number

   /**
   * @description Defines the animation's looping behavior.
   * If set to `AnimationClip.PostInfinity.Cycle`, the animation will restart from the beginning each time it loops.
   * If set to `AnimationClip.PostInfinity.Oscillate`, the animation will switch between normal and reverse playback each time it loops.
   * This is set to `Cycle` by default.
   */
   postInfinity: AnimationClip.PostInfinity

   /**
   * @description If true, the animation will play play in reverse.
   */
   reversed: boolean

   /**
   * @description If true, the animation will stop having an effect.
   */
   disabled: boolean

}

/**
* @description The base class for animation tracks.
*/
interface AnimationTrack extends ScriptObject {
}

interface AnyData {
   getString(): string

   getInt(): number

   getFloat(): number

   getDouble(): number

   getBool(): boolean

}

/**
* @description Base class for all assets used in the engine.
*/
interface Asset extends SerializableWithUID {
   /**
   * @description The name of the Asset in Lens Studio.
   */
   name: string

}

interface AssetSystem extends IAssetSystem {
   getAsset(key: string): Asset

   setAsset(key: string, asset: Asset): void

   hasAsset(key: string): boolean

   removeAsset(key: string): void

   unpackAssetPrefab(key: string, asset: Asset): Asset

   downloadAsset(onDownloaded: (id: string, path: string, asset: Asset) => void, onFailed: (id: string) => void, id: string): void

   downloadAssetFromUrl(onDownloaded: (id: string, path: string, asset: Asset) => void, onFailed: (id: string) => void, url: string): void

   downloadUserGeneratedAsset(onDownloaded: (id: string, path: string, asset: Asset) => void, onFailed: (id: string) => void, hexEncryptionKey: string, hexEncryptionIv: string, id: string): void

   createAsset(typeName: string): Asset

   downloadFriendmojiAsset(onDownloaded: (id: string, path: string, asset: Asset) => void, onFailed: (id: string) => void, id: string, avatarId: string): void

   downloadDeviceDependentAsset(onDownloaded: (id: string, path: string, asset: Asset) => void, onFailed: (id: string) => void, id: string): void

   createPrefabFromAsset(asset: Asset): Prefab

   createPrefabFromSceneObject(sceneObject: SceneObject): Prefab

   getSystemFont(fontName: string): Font

   getDefaultSystemFont(): Font

   createProceduralTexture(width: number, height: number, colorSpace: Colorspace): Texture

}

/**
* @description Used by [Head.setAttachmentPointType()](/api/classes/Head) to specify the type of attachment used with a Head binding.
*/
declare enum AttachmentPointType {
   HeadCenter,
   CandideCenter,
   TriangleBarycentric,
   FaceMeshCenter
}

declare enum AudioAnalysisEvent {
   DBLevelThresholdReached,
   SpeechStarted,
   KeywordDetected
}

/**
* @description Used to play audio in a Lens.
* You can assign an [AudioTrackAsset](/api/classes/AudioTrackAsset) to play through script or through the AudioComponent's inspector in Lens Studio.
* See the [Playing Audio](/guides/audio) guide for more information.
*/
interface AudioComponent extends Component {
   /**
   * @description Plays the current sound `loops` number of times.  If `loops` is -1, the sound will repeat forever.
   */
   play(loops: number): void

   /**
   * @description Stops the current sound if already playing.
   */
   stop(fade: boolean): void

   /**
   * @description Pauses the sound.
   */
   pause(): boolean

   /**
   * @description Resumes a paused sound.
   */
   resume(): boolean

   /**
   * @description Returns whether the AudioComponent is currently playing sound.
   */
   isPlaying(): boolean

   /**
   * @description Returns whether the sound is currently paused.
   */
   isPaused(): boolean

   /**
   * @description Sets the callback function to be called whenever this sound stops playing.
   */
   setOnFinish(eventCallback: (audioComponent: AudioComponent) => void): void

   /**
   * @description The audio asset currently assigned to play.
   */
   audioTrack: AudioTrackAsset

   /**
   * @description A volume multiplier for any sounds played by this AudioComponent.
   */
   volume: number

   /**
   * @description The length (in seconds) of the current sound assigned to play.
   */
   duration: number

   /**
   * @description Length (in seconds) of a volume fade in applied to the beginning of sound playback.
   */
   fadeInTime: number

   /**
   * @description The current playback time in seconds
   */
   position: number

   /**
   * @description Length (in seconds) of a volume fade out applied to the end of sound playback.
   */
   fadeOutTime: number

}

/**
* @description Configures an audio effect for [AudioEffectComponent](/api/classes/AudioEffectComponent).
*/
interface AudioEffectAsset extends Asset {
}

/**
* @description Used to add an audio effect to a Lens.
* When present in the scene, it will automatically apply the selected audio effect to recordings made with the Lens.
* See the [Audio Effect](/guides/audio-effect) guide for more information.
*/
interface AudioEffectComponent extends Component {
   setParameter(parameterId: string, value: number): void

   getParameter(parameterId: string): number

   /**
   * @deprecated
   */
   enablePreset(presetName: string): void

   audioEffect: AudioEffectAsset

}

/**
* @description Provider for [AudioEffectAsset](/api/classes/AudioEffectAsset).
*/
interface AudioEffectProvider extends Provider {
}

/**
* @description Represents an audio file asset.
* See also: [AudioComponent](/api/classes/AudioComponent).
*/
interface AudioTrackAsset extends Asset {
}

interface AudioTriggerComponent extends Component {
   addEvent(event: AudioAnalysisEvent, value: number, callback: () => any, keyword: string): void

   clearEvents(): void

   addKeyword(keyword: string, threshold: number): void

   modelPath: BinAsset

}

/**
* @description Settings for rendering the background on a [Text](/api/classes/Text) component.
* Accessible through the [Text](/api/classes/Text) component's `backgroundSettings` property.
*/
interface BackgroundSettings extends ScriptObject {
   /**
   * @description If enabled, the background will be rendered.
   */
   enabled: boolean

   /**
   * @description Settings for how the inside of the background is drawn.
   */
   fill: TextFill

   /**
   * @description Controls how far in each direction the background should extend away from the text.
   */
   margins: Rect

}

/**
* @description The base class for all mesh rendering components.
* Comparable to the former class "MeshVisual", which was split into the classes:
* [BaseMeshVisual](/api/classes/BaseMeshVisual),
* [MaterialMeshVisual](/api/classes/MaterialMeshVisual),
* and [RenderMeshVisual](/api/classes/RenderMeshVisual).
*/
interface BaseMeshVisual extends Visual {
   /**
   * @description Projects screen positions from `camera`'s view onto the mesh's UVs.
   * If the MeshVisual's material uses the same texture as the camera input, the MeshVisual will look identical to the part of the screen it covers.
   */
   snap(camera: Camera): void

   /**
   * @deprecated
   
   * @description Returns the [RenderMesh](/api/classes/RenderMesh) for this BaseMeshVisual.
   */
   getRenderMesh(): RenderMesh

   /**
   * @deprecated
   
   * @description Sets the [RenderMesh](/api/classes/RenderMesh) asset used for rendering.
   */
   setRenderMesh(mesh: RenderMesh): void

   /**
   * @deprecated
   
   * @description Returns the name of the [RenderMesh](/api/classes/RenderMesh) for this BaseMeshVisual.
   */
   getRenderMeshName(): string

   /**
   * @deprecated
   
   * @description Sets the [Skin](/api/classes/Skin) used for rendering.
   */
   setSkin(skin: Skin): void

   /**
   * @deprecated
   
   * @description Sets the BlendShape for this BaseMeshVisual.
   */
   setBlendShape(blendShape: BlendShapes): void

   /**
   * @deprecated
   
   * @description Returns the number of Materials on the BaseMeshVisual.
   */
   getMaterialsCount(): number

   /**
   * @deprecated
   
   * @description Returns the Material at index `index`.
   */
   getMaterial(index: number): Material

   /**
   * @deprecated
   
   * @description Adds a Material to the BaseMeshVisual.
   */
   addMaterial(material: Material): void

   /**
   * @deprecated
   
   * @description Clears all Materials from the BaseMeshVisual.
   */
   clearMaterials(): void

   /**
   * @description None = 0, Caster = 1, Receiver = 2
   */
   meshShadowMode: number

   shadowColor: vec4

   /**
   * @description Density of shadows cast by this MeshVisual.
   */
   shadowDensity: number

   /**
   * @description When a [ScreenTransform](/api/classes/ScreenTransform) is attached to the same SceneObject, this controls how the mesh will be stretched relative to the ScreenTransform's boundaries.
   */
   stretchMode: StretchMode

   /**
   * @description When a [ScreenTransform](/api/classes/ScreenTransform) is attached to the same SceneObject, this controls how the mesh will be positioned vertically depending on `stretchMode`.
   */
   verticalAlignment: VerticalAlignment

   /**
   * @description When a [ScreenTransform](/api/classes/ScreenTransform) is attached to the same SceneObject, this controls how the mesh will be positioned horizontally depending on `stretchMode`.
   */
   horizontalAlignment: HorizontalAlignment

   /**
   * @description When a [ScreenTransform](/api/classes/ScreenTransform) is present on this SceneObject,
   * and `extentsTarget` is a child of this SceneObject, `extentsTarget` will be repositioned to match the exact
   * area this MeshVisual is being rendered. Very useful for [Image](/api/classes/Image) and [Text](/api/classes/Text) components.
   */
   extentsTarget: ScreenTransform

   /**
   * @deprecated
   
   * @description The RenderMesh asset this MeshVisual will render.
   */
   mesh: RenderMesh

   /**
   * @deprecated
   
   * @description Returns the BlendShapes used by this BaseMeshVisual.
   */
   blendShape: BlendShapes

   /**
   * @deprecated
   
   * @description Returns the first Material.
   */
   mainMaterial: Material

   /**
   * @deprecated
   
   * @description Returns the `mainPass` of the `mainMaterial`.
   */
   mainPass: Pass

}

interface BaseMultiplayerSessionOptions extends ScriptObject {
   experienceId: string

   host: string

   onConnected: (session: MultiplayerSession) => void

   onDisconnected: (session: MultiplayerSession, disconnectInfo: string) => void

   onMessageReceived: (session: MultiplayerSession, userId: string, message: string) => void

   onUserJoinedSession: (session: MultiplayerSession, userId: string) => void

   onUserLeftSession: (session: MultiplayerSession, userId: string) => void

   onError: (session: MultiplayerSession, code: string, description: string) => void

}

interface BaseNeuralFaceEffectTextureProvider extends TextureProvider {
   setTypedArray(name: string, feature: Float32Array): void

   setTexture(name: string, feature: Texture): void

   setLoadingFinishedCallback(callback: () => void): void

   model: BinAsset

   input: Texture

   paused: boolean

   asyncLoad: boolean

}

interface BasePlaceholder extends ScriptObject {
   name: string

   shape: vec3

}

/**
* @description Provides basic information about a transformation.
* See also: [DeviceTracking](/api/classes/DeviceTracking)
*/
interface BasicTransform extends ScriptObject {
   /**
   * @description Returns the world matrix of the BasicTransform.
   */
   getMatrix(): mat4

   /**
   * @description Returns the inverted world matrix of the BasicTransform.
   */
   getInvertedMatrix(): mat4

   /**
   * @description Returns the world position of the BasicTransform.
   */
   getPosition(): vec3

   /**
   * @description Returns the world rotation of the BasicTransform.
   */
   getRotation(): quat

   /**
   * @description Returns the world scale of the BasicTransform.
   */
   getScale(): vec3

}

interface BillboardVisual extends MaterialMeshVisual {
   pivot: vec2

   flipX: boolean

   flipY: boolean

   fillMode: TextureStretchMode

}

/**
* @description File based asset.
*/
interface BinAsset extends Asset {
   readText(): string

   control: BinFileProvider

}

interface BinFileProvider extends Provider {
}

interface BitmapGlyph extends Glyph {
   createTexture(): Texture

}

interface Bitmoji3D extends AbstractData {
   getMetadata(): string

   getRequestStatus(): string

   setMetadataCallback(eventCallback: (metadata: string) => void): void

   getMetadataById(userId: string): string

   getFriendUserIds(): string[]

}

interface BitmojiAliasIds {
}
declare namespace BitmojiAliasIds {
   let CurrentUserAvatarId: number

   let DefaultFriendAvatarId: number


}
interface BitmojiSystem extends ScriptObject {
   initialize(): void

   isBitmojiAvailable(bitmojiAliasId: number): boolean

   getSelfieId(): string

   loadBitmoji(bitmojiId: string, bitmojiAliasId: number, callback: (texture: Texture) => void): void

   loadFriendmoji(bitmojiId: string, friendAliasId: number, callback: (texture: Texture) => void): void

   redirectToBitmojiApp: boolean

}

interface BitmojiTextureProvider extends TextureProvider {
   stickerId: string

   userAliasId: number

   friendAliasId: number

   defaultTexture: Texture

}

/**
* @description Controls blend shapes connected to imported animation content.
*/
interface BlendShapes extends Component {
   /**
   * @description Sets the weight of blend shape `name`.
   */
   setBlendShape(name: string, weight: number): void

   /**
   * @description Returns the weight of blend shape `name`.
   */
   getBlendShape(name: string): number

   unsetBlendShape(name: string): void

   /**
   * @description Returns whether this BlendShapesVisual has a blend shape named `name`.
   */
   hasBlendShape(name: string): boolean

   /**
   * @description Removes all blend shapes from the BlendShapesVisual.
   */
   clearBlendShapes(): void

   /**
   * @deprecated
   */
   isNormalBlended(): boolean

   blendNormals: boolean

}

declare class BoundingBox {
   constructor(arg1: number, arg2: number, arg3: number, arg4: number)

   getSize(): vec2

   xMin: number

   yMin: number

   xMax: number

   yMax: number

}

/**
* @description Triggered when eyebrows are lowered on the tracked face.
*/
interface BrowsLoweredEvent extends FaceTrackingEvent {
}

/**
* @description Triggered when eyebrows are raised on the tracked face.
*/
interface BrowsRaisedEvent extends FaceTrackingEvent {
}

/**
* @description Triggered when eyebrows are returned to normal on the tracked face.
*/
interface BrowsReturnedToNormalEvent extends FaceTrackingEvent {
}

/**
* @description Renders the scene to a Render Target texture.
* A Camera will only render a SceneObject if the SceneObject's render layer is enabled on the Camera.
* For more information, see the [Camera and Layers](/guides/general/camera) guide.
*/
interface Camera extends Component {
   /**
   * @description For orthographic cameras, returns the camera size as (width, height).
   */
   getOrthographicSize(): vec2

   /**
   * @description Converts the world space position `worldSpacePoint` to a screen space position.
   * Screen positions are represented in the range ([0-1], [0-1]), (0,0) being the top-left of the screen and (1,1) being the bottom-right.
   */
   worldSpaceToScreenSpace(worldSpacePoint: vec3): vec2

   /**
   * @description Converts a screen space position to a world space position, given an absolute depth.
   * The screen space position should be provided as a `vec2` in the range ([0-1], [0-1]),
   * (0,0) being the top-left of the screen and (1,1) being the bottom-right.
   * The returned world space position will be the point `absoluteDepth` units away from the Camera's
   * `near` plane at the point specified in screen space.
   */
   screenSpaceToWorldSpace(normalizedScreenSpacePoint: vec2, absoluteDepth: number): vec3

   /**
   * @description Converts a world space position to a raw screen space position.
   * The screen space position will be returned as a `vec3` with `x`,`y` representing normalized screen space,
   * and `z` representing a raw depth value not directly convertible to world units.
   * This returned value will mostly be useful for passing into `unproject()`.
   */
   project(worldSpacePoint: vec3): vec3

   /**
   * @description Converts a raw screen space position to a world space position.
   * `clipSpacePoint` should be a `vec3` returned from a previous `project()` call, since the
   * `z` value represents a raw depth value not directly convertible to world units.
   */
   unproject(clipSpacePoint: vec3): vec3

   /**
   * @deprecated
   
   * @description Adds layer `id` to the list of layers the Camera will render.
   */
   addRenderLayer(id: number): void

   /**
   * @deprecated
   
   * @description Removes layer `id` from the list of layers the Camera will render.
   */
   removeRenderLayer(id: number): void

   /**
   * @deprecated
   
   * @description Returns a list of 32 numbers, one for every render layer. Values will either be 0 or 1, 0 meaning the Camera won't render the layer and 1 meaning it will.
   */
   getAllRenderLayers(): number[]

   /**
   * @deprecated
   
   * @description Returns whether rendering layer `id` is enabled for the Camera.
   */
   checkRenderLayer(id: number): boolean

   /**
   * @description The distance of the far clipping plane.
   */
   far: number

   /**
   * @description The distance of the near clipping plane.
   */
   near: number

   /**
   * @description The Camera's field of view in radians.
   */
   fov: number

   /**
   * @description The orthographic size of the camera.
   */
   size: number

   /**
   * @description The aspect ratio of the camera (width/height).
   */
   aspect: number

   /**
   * @description Read-only property describing which type of rendering the camera uses.
   */
   type: Camera.Type

   /**
   * @description The sorting order the Camera renders in. Every frame, Cameras render in ascending order determined by their `renderOrder` properties.
   */
   renderOrder: number

   /**
   * @description Controls the set of layers this Camera will render.
   */
   renderLayer: LayerSet

   /**
   * @description A texture controlling which parts of the output texture the camera will draw to.
   * The "red" value of each pixel determines how strongly the camera will draw to that part of the image.
   * For example, a completely black section will cause the camera to not draw there at all. A completely
   * white (or red) section will cause the camera to draw normally. Colors in between, like gray, will be semitransparent.
   */
   maskTexture: Texture

   /**
   * @description Controls which Camera settings will be overridden by physical device properties.
   * For example, this can be used to override the `fov` property to match the device camera's actual field of view.
   */
   devicePropertyUsage: Camera.DeviceProperty

   /**
   * @description Determines the way depth is handled on this Camera. Changing this can help sort objects at different distance ranges.
   */
   depthBufferMode: Camera.DepthBufferMode

   /**
   * @description The RenderTarget this Camera will draw to.
   */
   renderTarget: Texture

   /**
   * @description When `enableClearColor` is true, this texture is used to clear this Camera's `renderTarget` before drawing.
   * If this texture is null, `clearColor` will be used instead.
   */
   inputTexture: Texture

   /**
   * @description When `enableClearColor` is true and `inputTexture` is null, this color is used to clear this Camera's `renderTarget` before drawing to it.
   */
   clearColor: vec4

   /**
   * @description If enabled, this Camera will clear the color on its `renderTarget` before drawing to it.
   * `inputTexture` will be used to clear it unless it is null, in which case `clearColor` is used instead.
   */
   enableClearColor: boolean

   /**
   * @description If enabled, this Camera will clear the depth buffer on its `renderTarget` before drawing to it.
   */
   enableClearDepth: boolean

   /**
   * @deprecated
   
   * @description If true, the camera FOV will be overridden to match the device's physical camera FOV.
   */
   isPhysical: boolean

   cameraMaskChannel: Camera.CameraMaskChannel

   renderTargetMipmapLevel: number

   supportedColorRenderTargetCount: number

   colorRenderTargets: Camera.ColorRenderTarget[]

}
declare namespace Camera {
   export function createColorRenderTarget(): Camera.ColorRenderTarget


}
declare namespace Camera {
   interface BaseRenderTarget extends ScriptObject {
      inputTexture: Texture

      maskTexture: Texture

      targetTexture: Texture

   }

}
declare namespace Camera {
   enum CameraMaskChannel {
      UseR,
      UseRGBA,
      UseA
   }

}
declare namespace Camera {
   interface ColorRenderTarget extends Camera.BaseRenderTarget {
      clearColor: vec4

      maskChannel: Camera.CameraMaskChannel

   }

}
/**
* @description Used in [Camera's](/api/classes/Camera) `depthBufferMode` property.
* Each mode is suited for handling objects at a certain distance range.
* For more information on depth modes, see the [Camera and Layers](/guides/general/camera) guide.
*/
declare namespace Camera {
   enum DepthBufferMode {
      /**
      * @description Gives higher depth precision on nearby objects, so is better suited for scenes near to the camera.
      */
      Regular,
      /**
      * @description Gives higher depth precision on far away objects, so is better suited for scenes far away from the camera.
      */
      Logarithmic
   }

}
/**
* @description Used in [Camera's](/api/classes/Camera) `devicePropertyUsage` property.
* Specifies which camera properties should be overridden by device properties.
*/
declare namespace Camera {
   enum DeviceProperty {
      /**
      * @description No Camera properties are overridden with device properties.
      */
      None,
      /**
      * @description Overrides the Camera's `aspect` property to use the device's aspect ratio instead.
      */
      Aspect,
      /**
      * @description Overrides the Camera's `fov` property to use the device's field of view instead.
      */
      Fov,
      /**
      * @description Overrides both `aspect` and `fov` with the device's properties.
      */
      All
   }

}
/**
* @description Returned from [Camera's](/api/classes/Camera) `type` property.
*/
declare namespace Camera {
   enum Type {
      /**
      * @description Simulates how perspective and depth perception work in the real world. Useful for rendering objects in 3D space.
      */
      Perspective,
      /**
      * @description Does not simulate perspective distortion. Useful for 2D effects like Images and Text.
      */
      Orthographic
   }

}
/**
* @description Triggered when the device's back facing camera becomes active.
*/
interface CameraBackEvent extends SceneEvent {
}

/**
* @description Triggered when the device's front facing camera becomes active.
*/
interface CameraFrontEvent extends SceneEvent {
}

/**
* @description Clears depth in the drawing order.
*/
interface ClearDepth extends Visual {
   clearColor: vec4

   colorMask: vec4b

   depthMask: boolean

   clearDepth: number

}

declare enum ClientInterfaceAction {
   EnableHighlight,
   DisableHighlight,
   Trigger,
   Hide,
   Show
}

interface ClientInterfaceActionTakenEvent extends SceneEvent {
}

interface ClientInterfaceComponent extends Component {
   showClientInterface(interfaceControl: string, headerId: string, descriptionId: string): boolean

   hideClientInterface(interfaceType: string): boolean

   isClientInterfaceActive(interfaceControl: string): boolean

   performAction(interfaceType: string, action: string): boolean

}

declare enum ClientInterfaceElement {
   ToggleCameraButton,
   ImagePicker,
   Modal,
   Hint,
   LinkBitmojiCallToAction,
   SnapButton,
   PlayButton,
   All,
   ExitFullScreenButton,
   LensAttachmentButton
}

interface ClientInterfacePlayButtonTriggerEvent extends SceneEvent {
}

interface ClientInterfaceSystem extends ScriptObject {
   /**
   * @deprecated
   */
   enableExternalImageApi(): void

   perform(interfaceElement: ClientInterfaceElement, action: ClientInterfaceAction): boolean

   isInterfaceElementVisible(interfaceElement: ClientInterfaceElement): boolean

   showInterfaceElementWithText(interfaceElement: ClientInterfaceElement, headerId: string, descriptionId: string): boolean

   hideInterfaceElement(interfaceElement: ClientInterfaceElement): boolean

   getSystemInterfaceElementSize(interfaceElement: SystemInterfaceElement): vec2

   setScreenDimmingEnabled(enabled: boolean): boolean

   /**
   * @deprecated
   */
   performAction(interfaceControl: string, action: string): boolean

   /**
   * @deprecated
   */
   isInterfaceControlVisible(interfaceControl: string): boolean

}

declare enum Colorspace {
   RGBA,
   RGBAFloat,
   RG,
   RGFloat,
   R,
   /**
   * @deprecated
   */
   Red,
   RedFloat
}

declare enum CompassAccuracy {
   NoContact,
   High,
   Medium,
   Low,
   Unreliable
}

/**
* @description The base class for all components.  Components are attached to [SceneObjects](/api/classes/SceneObject).
*/
interface Component extends SerializableWithUID {
   /**
   * @description Returns the SceneObject the component is attached to.
   */
   getSceneObject(): SceneObject

   /**
   * @description Returns the Transform this component is attached to.
   */
   getTransform(): Transform

   /**
   * @description Destroys the component.
   */
   destroy(): void

   /**
   * @description If disabled, the Component will stop enacting its behavior.
   */
   enabled: boolean

   /**
   * @description The name of the Component.
   */
   name: string

   updatePriority: number

}

interface ComponentDisabledEvent extends ComponentEvent {
}

interface ComponentEnabledEvent extends ComponentEvent {
}

interface ComponentEvent extends SceneEvent {
   getDeltaTime(): number

}

declare enum CompressionQuality {
   MaximumCompression,
   LowQuality,
   IntermediateQuality,
   HighQuality,
   MaximumQuality
}

interface CoreVersionChecks extends ScriptObject {
   forceFixedPinToMeshInternalTransformBehavior(): void

   forceFixedMeshSnapInternalTransformBehavior(): void

   forceWorldSpaceRectForText(): void

}

interface CropTextureProvider extends TextureProvider {
   inputTexture: Texture

}

/**
* @description Used with [Pass's](/api/classes/Pass) `cullMode` property.
* Determines which faces of a surface are culled (not rendered).
*/
declare enum CullMode {
   /**
   * @description Front facing surfaces are not rendered.
   */
   Front,
   /**
   * @description Back facing surfaces are not rendered.
   */
   Back,
   /**
   * @description Neither front facing nor back facing surfaces are rendered.
   */
   FrontAndBack
}

/**
* @deprecated

* @description Provides access to external data. Do not add multiple data components to the same scene, since they will interfere with each other. Instead, always have a single data component.
*/
interface DataComponent extends Component {
   /**
   * @description Allows you to access the data provider for the specified input. Possible inputs are:
   
   * Input | Return Type
   * --- | ---
   * "UserData"     | [`GeneralDataStore`](/api/classes/GeneralDataStore)
   * "Location" | [`Location`](/api/classes/Location)
   * "Bitmoji3D" | [`Bitmoji3D`](/api/classes/Bitmoji3D)
   * "SceneRecognition" | [`SceneRecognition`](/api/classes/SceneRecognition)
   * "Segmentation" | [`SegmentationSystem`](/api/classes/SegmentationSystem)
   * "DeviceMotion" | [`DeviceMotion`](/api/classes/DeviceMotion)
   */
   getData(type: string): AbstractData

   activateProvider(type: string): void

   activateProviderWithCallback(type: string, callback: (data: AbstractData) => void): void

   deactivateProvider(type: string): void

}

interface DataStoreComponent extends Component {
   store: GeneralDataStore

}

interface DataStoreWithScene extends GeneralDataStore {
   saveAsset(asset: Asset, name: string): void

   hasAsset(name: string): boolean

   getAsset(name: string, successCallback: (asset: Asset) => void, failureCallback: (error: number, description: string) => void): void

   removeAsset(name: string): void

}

interface DataStoreWrapper extends Asset {
   store: GeneralDataStore

}

/**
* @deprecated
*/
declare class DateTime {
   /**
   * @deprecated
   */
   constructor()

   /**
   * @deprecated
   */
   year: number

   /**
   * @deprecated
   */
   month: number

   /**
   * @deprecated
   */
   day: number

   /**
   * @deprecated
   */
   hour: number

   /**
   * @deprecated
   */
   minute: number

   /**
   * @deprecated
   */
   second: number

   /**
   * @deprecated
   */
   millisecond: number

}

interface DebugRender extends ScriptObject {
   reserveVerticesForTopology(vertexCount: number, topology: MeshTopology): void

   drawLine(posA: vec3, posB: vec3, color: vec4): void

   drawCircle(position: vec3, radius: number, color: vec4): void

   drawSphere(position: vec3, radius: number, color: vec4): void

   drawBrokenLine(points: vec3[], color: vec4): void

   drawBox(position: vec3, width: number, height: number, depth: number, color: vec4): void

   drawSolidTriangle(vertex1: vec3, vertex2: vec3, vertex3: vec3, color: vec4): void

   drawSolidBox(position: vec3, width: number, height: number, depth: number, color: vec4): void

   drawSolidSphere(position: vec3, radius: number, color: vec4): void

   clear(): void

   /**
   * @deprecated
   */
   reserveVertices(vertexCount: number): void

   isAutoClear: boolean

   depthTest: boolean

   depthWrite: boolean

   isBlendModeNormalAvailable: boolean

}

/**
* @description An event that gets triggered after a delay.
*/
interface DelayedCallbackEvent extends SceneEvent {
   /**
   * @description Returns the total delay time in seconds set on the event.
   */
   getDelayTime(): number

   /**
   * @description Returns the current time in seconds left in the event's delay.
   */
   getTimeLeft(): number

   /**
   * @description Calling this will cause the event to trigger in `time` seconds.
   */
   reset(time: number): void

}

interface DepthExtractionModel extends BinAsset {
}

declare class DepthMeshBuilder {
   constructor()

   build(depthmap: Texture, minDepth: number, maxDepth: number, normalizedFocalLength: vec2): RenderMesh

   meshType: DepthMeshBuilder.MeshType

   cutThreshold: number

   bilinearInterpolation: boolean

   roamErrorThreshold: number

   roamSubdivisionMaxDepth: number

   downsampleFactor: number

}

declare namespace DepthMeshBuilder {
   enum MeshType {
      Grid,
      Roam
   }

}
interface DepthProcessingOptions extends ScriptObject {
   guidedFilterEnabled: boolean

   holeFillingStrategy: DepthProcessingOptions.HoleFillingStrategy

   holeReplacementValue: number

   alignFrontFacingDepthToImage: boolean

   cropDepthToImage: boolean

}

declare namespace DepthProcessingOptions {
   enum HoleFillingStrategy {
      FixedValue,
      MinimumInWindow,
      None
   }

}
/**
* @description Writes video feed depth information to the depth buffer, which automatically sets up depth occlusion for 3D visuals.
* Only works in some cases, such as in Lenses for Spectacles 3.
* See the [Lenses for Spectacles guide](/guides/spectacles/lenses-for-spectacles/) for more information.
*/
interface DepthSetter extends PostEffectVisual {
   guidedFilterEnabled: boolean

}

/**
* @description Provides depth information of the video feed that the Lens is being applied to when available, such as in Lenses for Spectacles 3.
* Can be accessed from `mainPass.baseTex.control` of a Spectacles Depth material.

* See the [Lenses for Spectacles guide](/guides/spectacles/lenses-for-spectacles/) for more information.
*/
interface DepthTextureProvider extends TextureProvider {
   /**
   * @deprecated
   */
   setModelBinAsset(asset: BinAsset): void

   /**
   * @description Returns the depth at the screen space position "point".
   * The value returned is between 0 and 6,550, which corresponds to the distance the point is from the camera in centimeters, or world-space units.
   * If depth data is not available, -1 will be returned. Note that depth data isn't available during the very first Initialize event, before TurnOn event fires.
   */
   getDepth(point: vec2): number

   getScale(): number

   getDepthToDisparityNumerator(): number

   model: DepthExtractionModel

   depthProcessingOptions: DepthProcessingOptions

}

interface DetectedHandObject extends DetectedObject {
   getPalmPoint(): vec2

   getWristPoint(): vec2

   getPalmDirection(): vec3

   getNormDirection(): vec3

   isOpened(): boolean

   isClosed(): boolean

   isPointing(): boolean

   getHandSize(): number

}

interface DetectedObject extends ScriptObject {
   getCenter(): vec2

   getSize(): vec2

   getLabel(): string

   getId(): number

}

interface DeviceInfoSystem extends ScriptObject {
   getOS(): OS

   getTargetOS(): string

   getDeviceClass(): number

   getDeviceMotionSensorPresence(): number

   getDeviceModel(): string

   /**
   * @deprecated
   */
   getOsVersion(): string

   /**
   * @deprecated
   */
   supportsNativeTracking(): boolean

   performanceIndexes: PerformanceIndexes

}

/**
* @description Used to track a landmarker in the camera. Moves the SceneObject's transform to match the detected landmarker scene.
* See the [Landmarker guide](/templates/landmarker) for more information.
*/
interface DeviceLocationTrackingComponent extends Component {
   /**
   * @description Returns whether the location landmarker is currently being tracked.
   */
   isTracking(): boolean

   isMarkerTracking(): boolean

   location: LocationAsset

   /**
   * @description A function that gets called when location data is downloaded.
   */
   onLocationDataDownloaded: () => void

   /**
   * @description A function that gets called when location data fails to download.
   */
   onLocationDataDownloadFailed: () => void

   /**
   * @description A function that gets called when location is found.
   */
   onLocationFound: () => void

   /**
   * @description A function that gets called when location is lost. Note this will also happen when the user flips the camera.
   */
   onLocationLost: () => void

   /**
   * @description Returns the user's current LocationProximityStatus. Useful for telling if a user is close enough to the location to track it.
   */
   locationProximityStatus: LocationProximityStatus

   distanceToLocation: number

}

interface DeviceMotion extends AbstractData {
   isDeviceMotionAvailable(): boolean

   getAcceleration(): vec3

   getRotationMatrix(): mat3

   compassAligned: boolean

}

/**
* @description Moves or rotates the SceneObject to match device orientation.

* If using "Surface" tracking mode, adding this to a SceneObject enables surface tracking for the scene, and moves the
* object to a position and rotation that matches the physical camera's pose in the world. Surface tracking can also be enhanced
* with native AR by enabling the "Use Native AR" option in the Inspector panel, or through script by setting the
* component's [`surfaceOptions.enhanceWithNativeAR`](/api/classes/SurfaceOptions) property.

* If using "Rotation" tracking mode, adding this to a SceneObject will apply the device's real world rotation to the object.

* If using "World" tracking mode, adding this to a SceneObject enables native AR tracking for the scene, and moves the
* object to a position and rotation that matches the physical camera's pose in the world.

* See the [Tracking Modes](/guides/general/tracking/tracking-modes) guide for more information.

**Note:** This component was named "WorldTracking" in previous versions of Lens Studio.
*/
interface DeviceTracking extends Component {
   /**
   * @description Offsets the default position of the World Tracking surface origin by `offset`.
   * Avoid using a `y` value of zero in `offset`, because it may cause problems with tracking.
   * If used outside of `Initialized` or `TurnOnEvent`, you will need to call `resetTracking()` to apply the offset.
   * Note: calling `resetTracking()` will overwrite the `x` and `z` components of the offset.
   */
   setWorldOriginOffset(offset: vec3): void

   setOnGyroscopeInitialized(eventCallback: () => void): void

   /**
   * @deprecated
   */
   registerSceneObjectOfInterest(obj: SceneObject): void

   /**
   * @deprecated
   */
   unregisterSceneObjectOfInterest(obj: SceneObject): void

   /**
   * @description Resets the World Tracking origin to the point on the surface plane aligned with the screen position `position`.
   * Screen positions are represented in the range ([0-1], [0-1]), (0,0) being the top-left of the screen and (1,1) being the bottom-right.
   */
   resetTracking(position: vec2): void

   /**
   * @deprecated
   */
   setWallModeEnabled(enable: boolean): void

   /**
   * @deprecated
   */
   setTrackerMode(type: TrackerMode): void

   /**
   * @deprecated
   */
   setTrackerType(type: TrackerMode): void

   /**
   * @description Returns whether the DeviceTrackingMode is supported.
   */
   isDeviceTrackingModeSupported(mode: DeviceTrackingMode): boolean

   /**
   * @description Requests that a DeviceTrackingMode be used. This requested change may not happen immediately.
   */
   requestDeviceTrackingMode(val: DeviceTrackingMode): void

   /**
   * @description Returns the DeviceTrackingMode currently requested to be used.
   * This may be different from the actual DeviceTrackingMode being used.
   */
   getRequestedDeviceTrackingMode(): DeviceTrackingMode

   /**
   * @description Returns the actual DeviceTrackingMode being used. This may be different from the requested DeviceTrackingMode.
   */
   getActualDeviceTrackingMode(): DeviceTrackingMode

   getSurfaceTrackingPoint(): vec2

   getNativeARTrackingState(): NativeARTrackingState

   /**
   * @deprecated
   */
   getTransformSequence(): Transform[]

   /**
   * @description Returns an array of BasicTransform objects describing each point that the camera travels through.
   * Each item in the array matches the camera's basic transform in the corresponding frame of the video feed that the Lens is applied to.
   * Only available in some cases, such as in Lenses for Spectacles 3. When not available, it will return an empty array.
   * See the [Lenses for Spectacles guide](/guides/spectacles/lenses-for-spectacles/) for more information.
   */
   getDevicePath(): BasicTransform[]

   /**
   * @description Returns the current frame index of the video feed that the Lens is being applied to.
   * This can be used as an index to access the current BasicTransform in `getDevicePath()`.
   * Only available in some cases, such as in Lenses for Spectacles 3. When not available, it will return -1.
   * See the [Lenses for Spectacles guide](/guides/spectacles/lenses-for-spectacles/) for more information.
   */
   getDevicePathIndex(): number

   /**
   * @description Helps to improve surface tracking accuracy while the target `SceneObject` is being moved.
   */
   surfaceTrackingTarget: SceneObject

   /**
   * @description Used to access rotation tracking settings.
   */
   rotationOptions: RotationOptions

   /**
   * @description Used to access surface tracking settings.
   */
   surfaceOptions: SurfaceOptions

   worldOptions: WorldOptions

}

/**
* @description Tracking modes used by the [DeviceTracking](/api/classes/DeviceTracking) component to specify what type of tracking to use.
*/
declare enum DeviceTrackingMode {
   /**
   * @description Use gyroscope tracking (rotation only)
   */
   Rotation,
   /**
   * @description Use surface tracking (position and rotation)
   */
   Surface,
   /**
   * @description Use native tracking (position and rotation)
   */
   World
}

interface DirectMultiplayerSessionOptions extends BaseMultiplayerSessionOptions {
   sessionId: string

}
declare namespace DirectMultiplayerSessionOptions {
   export function create(): DirectMultiplayerSessionOptions


}
interface DrawingSystem2D extends ScriptObject {
   setColorCallback(callback: (color: vec4) => void): void

   setWidthCallback(callback: (width: number) => void): void

   setUndoCallback(callback: () => number): void

   setDeserializeCallback(callback: (data: string) => number): void

   setSerializeCallback(callback: () => any): void

   setSelectBrushCallback(callback: (prefab: Prefab, id: string) => void): void

   setUnicodeSymbolCallback(callback: (symbol: string) => void): void

   drawingHistoryUpdated(canDrawOnOverlay: boolean, strokeCount: number): void

   setDrawOverlayCallback(callback: (enabled: boolean) => void): void

}

/**
* @description Used in [Text's](/api/classes/Text) `dropShadowSettings` property.
* Configures how dropshadow will appear on a Text component.
*/
interface DropshadowSettings extends ScriptObject {
   /**
   * @description Whether dropshadow is enabled on the Text.
   */
   enabled: boolean

   /**
   * @description Settings for how the inside of the dropshadow is drawn.
   */
   fill: TextFill

   /**
   * @description An (x, y) offset controlling where the dropshadow is drawn relative to the Text.
   */
   offset: vec2

}

interface DynamicMeshRenderObjectProvider extends ProceduralMeshRenderObjectProvider {
}

interface EmojiTextureProvider extends TextureProvider {
   setUnicodeSymbol(uniSymbol: string): void

}

interface EmotionChangedEvent extends FaceTrackingEvent {
   getEmotionType(): EmotionType

   /**
   * @deprecated
   */
   setModelBinAsset(asset: BinAsset): void

   targetEmotionType: EmotionType

   model: FacialExpressionModel

}

declare enum EmotionType {
   Neutral,
   Happy,
   Surprised,
   Any
}

interface ExperimentSystem extends ScriptObject {
   getExperimentParameter(experimentName: string, parameterName: string): string

}

declare enum ExtendedTrackingMode {
   None,
   Gyro,
   SLAM
}

interface ExternalEvent extends SceneEvent {
   getData(): string

   getType(): string

}

interface ExtrudedMeshBuilder extends ScriptObject {
   buildMesh(): RenderMesh

   toString(): string

   curveSegmentPrecision: number

   extrudeDepth: number

   frontFaceTextureOffset: vec2

   backFaceTextureOffset: vec2

   textureStartAngle: number

   innerSideTextureOffset: number

   outerSideTextureOffset: number

   flipFrontFaceTextureHorizontally: boolean

   flipFrontFaceTextureVertically: boolean

   flipBackFaceTextureHorizontally: boolean

   flipBackFaceTextureVertically: boolean

   faceTextureSize: number

   tileOuterTexture: boolean

   tileInnerTexture: boolean

   outerRepeats: number

   innerRepeats: number

   sideTextureMode: SideTextureMode

   holeMode: HoleMode

   meshSerializationEnabled: boolean

}

/**
* @deprecated
*/
interface Eye extends Component {
   faceIndex: number

   eyeIndex: EyeIndex

}

/**
* @description Applies an eye color effect to a face.
*/
interface EyeColorVisual extends MaterialMeshVisual {
   /**
   * @description The index of the face this EyeColorVisual is attached to.
   */
   faceIndex: number

   rotationEnabled: boolean

}

declare enum EyeIndex {
   Left,
   Right
}

interface FaceCount {
}
declare namespace FaceCount {
   let Unlimited: number


}
interface FaceCropTextureProvider extends CropTextureProvider {
   faceCenterMouthWeight: number

   alignmentType: MachineLearning.AlignmentType

   textureScale: vec2

}

/**
* @description Triggered when a new face is detected and starts being tracked.
*/
interface FaceFoundEvent extends FaceTrackingEvent {
}

/**
* @description Controls the face image picker texture resource.
* Can be accessed through [Texture.control](/api/classes/Texture#control-textureprovider) on a Face Image Picker texture.
* For more information, see the [Face Image Picker Texture guide](/guides/face/face-effects/face-image-picker-texture).
*/
interface FaceImagePickerTextureProvider extends ImagePickerTextureProvider {
   /**
   * @deprecated
   */
   getFaceRect(): vec4

   /**
   * @description If enabled, the selected image will be cropped to only show the face region.
   */
   cropToFace: boolean

   /**
   * @deprecated
   */
   useFace: boolean

   /**
   * @description The FaceTextureProvider used to provide the face texture.
   */
   faceControl: FaceTextureProvider

}

/**
* @description Used with [FaceInsetVisual.faceRegion](/api/classes/FaceInsetVisual) for setting the face region to draw.
*/
declare enum FaceInsetRegion {
   /**
   * @description Targets the left eye
   */
   LeftEye,
   /**
   * @description Targets the right eye
   */
   RightEye,
   /**
   * @description Targets the mouth
   */
   Mouth,
   /**
   * @description Targets the nose
   */
   Nose,
   /**
   * @description Targets the entire face
   */
   Face
}

/**
* @description Draws a section of a tracked face.
*/
interface FaceInsetVisual extends MaterialMeshVisual {
   setBarycentricCoordinates(coordsJS: Object[]): void

   /**
   * @deprecated
   
   * @description Applies the inset effect on `region`.
   */
   setFaceRegion(region: string): void

   /**
   * @deprecated
   
   * @description Returns the face region that the inset is applied to.
   */
   getFaceRegion(): string

   /**
   * @description The index of the face this FaceInsetVisual uses.
   */
   faceIndex: number

   /**
   * @description The region of the face this FaceInsetVisual draws.
   */
   faceRegion: FaceInsetRegion

   faceRegionIndices: number[]

   /**
   * @description The x and y scaling used to draw the face region.
   * Think of scaling as meaning how many times the face region could fit into the drawing area.
   * Higher values will zoom away from the face region, and lower values will zoom into it.
   * The normal, unzoomed scaling value is (1,1).
   */
   sourceScale: vec2

   pivot: vec2

   /**
   * @description The amount of alpha fading applied from the border of the face inset inward.
   * This value must be in the range 0-1.
   */
   innerBorderRadius: number

   /**
   * @description The amount of alpha fading applied from the border of the face inset outward.
   * This value must be in the range 0-1.
   */
   outerBorderRadius: number

   /**
   * @description Determines the quality of the face inset's borders.
   * A higher value means better looking borders but lower performance.
   * This value must be greater than 10 and less than 100.
   */
   subdivisionsCount: number

   /**
   * @description Flips the drawn face region horizontally if enabled.
   */
   flipX: boolean

   /**
   * @description Flips the drawn face region vertically if enabled.
   */
   flipY: boolean

}

interface FacelessTextureProvider extends TextureProvider {
   leftSmall: SkinSample

   leftMedium: SkinSample

   leftLarge: SkinSample

   rightSmall: SkinSample

   rightMedium: SkinSample

   rightLarge: SkinSample

}

/**
* @description Triggered when a face can no longer be tracked.  For example, if a face gets blocked from the camera's view, or gets too far away.
*/
interface FaceLostEvent extends FaceTrackingEvent {
}

/**
* @description Applies a face mask effect. See the [Face Mask Guide](/guides/face/face-effects/face-mask) for more information.
*/
interface FaceMaskVisual extends MaterialMeshVisual {
   hidesMaskOnMouthClosed: boolean

   swapsMaskOnMouthClosed: boolean

   customMaskOnMouthClosed: Texture

   /**
   * @description The index of the face this effect is attached to.
   */
   faceIndex: number

   /**
   * @description If "Use Orig. Face" is enabled for this FaceMaskVisual in the Inspector panel, this property
   * specifies the face index to use for drawing the mask.
   */
   originalFaceIndex: number

   teethAlpha: number

   textureCoords: number[]

   useTextureFacePosition: boolean

   maskCoords: number[]

   activeTriangleIndices: number[]

}

declare enum FaceMeshSource {
   FaceMorph,
   ARKit
}

/**
* @description Mesh provider for a Face Mesh. Accessible through the `control` property on a Face Mesh `RenderMesh`.
*/
interface FaceRenderObjectProvider extends RenderObjectProvider {
   getExpressionNames(): string[]

   getExpressionWeights(): Float32Array

   getExpressionWeightByName(expressionName: string): number

   /**
   * @description Index of the face this FaceRenderObjectProvider mirrors.
   */
   faceIndex: number

   /**
   * @description When true, the general face (not including eyes and mouth) will be included in the Face Mesh geometry.
   */
   faceGeometryEnabled: boolean

   /**
   * @description When true, eyes will be included in the Face Mesh geometry.
   */
   eyeGeometryEnabled: boolean

   /**
   * @description When true, the mouth will be included in the Face Mesh geometry.
   */
   mouthGeometryEnabled: boolean

}

/**
* @description Applies a face stretch effect.
* Face stretch features can be added to a FaceStretchVisual through the Inspector panel in Lens Studio.
* See the [Face Stretch Guide](/guides/face/face-effects/face-stretch) for more information.
*/
interface FaceStretchVisual extends BaseMeshVisual {
   /**
   * @description Sets the weight of the face stretch feature named `feature` to `intensity`.
   * The intensity must be greater than -0.5 and less than 2.
   */
   setFeatureWeight(feature: string, intensity: number): void

   /**
   * @description Returns the weight of the face stretch feature named `feature`.
   */
   getFeatureWeight(feature: string): number

   /**
   * @description The index of the face the stretch will be applied to.
   */
   faceIndex: number

}

/**
* @description TextureProvider for face textures.
* See the [Face Texture Guide](/guides/face/face-effects/face-texture) for more information.
* Can be accessed using [Texture.control](/api/classes/Texture#control-textureprovider) on a face texture asset.
*/
interface FaceTextureProvider extends TextureProvider {
   /**
   * @description The source texture being drawn.
   * This is useful for controlling which effects are visible on the face texture, based on which camera output texture is being used.
   */
   inputTexture: Texture

   /**
   * @description The x and y scale used to draw the face within the texture region.
   * A lower scale will be more zoomed in on the face, and a higher scale will be more zoomed out.
   * The default scale is (1, 1).
   */
   scale: vec2

   offset: vec2

   adjustOffsetMax: vec2

   adjustOffset: OffsetAdjustType

}

/**
* @description This is the base class for all face tracking events. This event won't actually get triggered itself, so use one of the child classes instead.
*/
interface FaceTrackingEvent extends SceneEvent {
   /**
   * @description The index of the face this event is tracking. Change this value to control which face the event tracks.
   */
   faceIndex: number

}

declare enum FaceTrackingMode {
   Fast,
   Precise
}

interface FacialExpressionModel extends BinAsset {
}

/**
* @description Provides an image marker based on an imported image file.
* For more information, see the [Marker Tracking](/guides/general/tracking/marker-tracking) guide.
*/
interface FileBasedMarkerProvider extends NaturalFeatureMarkerProvider {
}

/**
* @description A [TextureProvider](/api/classes/TextureProvider) for textures originating from files.
*/
interface FileTextureProvider extends TextureProvider {
}

/**
* @description The base class for animation tracks using float values.
*/
interface FloatAnimationTrack extends AnimationTrack {
}

/**
* @description Represents an animation track using float value keyframes.
*/
interface FloatAnimationTrackKeyFramed extends FloatAnimationTrack {
   /**
   * @description Removes all keys.
   */
   removeAllKeys(): void

   /**
   * @description Removes key at index `index`.
   */
   removeKeyAt(index: number): void

   /**
   * @description Adds a key with value `value` at time `time`.
   */
   addKey(time: number, value: number): void

}

/**
* @description Represents an animation track using vec3 value keyframes for a bezier curve.
*/
interface FloatBezierAnimationTrackKeyFramed extends FloatAnimationTrack {
   /**
   * @description Removes all keys.
   */
   removeAllKeys(): void

   /**
   * @description Removes key at index `index`.
   */
   removeKeyAt(index: number): void

   /**
   * @description Adds a key with value `value` at time `time`.
   */
   addKey(time: number, value: vec3): void

}

/**
* @description A font asset used for rendering text.
* Used by [Text](/api/classes/Text).
* For more information, see the [Text guide](/guides/2d/text).
*/
interface Font extends Asset {
   getGlyphsForText(text: string): OutlineGlyph[]

   getKerningValue(leftGlyph: Glyph, rightGlyph: Glyph): number

   getBoundingBox(): BoundingBox

   getUnitsPerEm(): number

   getAscender(): number

   getDescender(): number

   getDefaultLineSpace(): number

   getUnderlinePosition(): number

   getUnderlineThickness(): number

   getPostscriptName(): string

   getFamilyName(): string

   getStyleName(): string

}

interface FreezeFrameSystem extends ScriptObject {
   registerTurnOffCallback(callback: () => void): void

}

interface Friend extends ScriptObject {
   getUserId(): string

   getUsername(): string

   getDisplayname(): string

   getAliasId(): number

   getBitmojiSelfieId(): string

}

interface FriendSystem extends ScriptObject {
   initialize(): void

   getNumFriendsInChat(): number

   getChatFriendByIndex(index: number): Friend

   getChatFriendByUserId(userId: string): Friend

   /**
   * @deprecated
   */
   getChatFriendByUsername(username: string): Friend

   getAllFriendsInChat(): Friend[]

}

/**
* @description Class for storing and retrieving data based on keys.
* Used by [PersistentStorageSystem](/api/classes/PersistentStorageSystem).
* For more information, see the [Persistent Storage guide](/guides/scripting/persistent-storage).
*/
interface GeneralDataStore extends ScriptObject {
   /**
   * @deprecated
   */
   hasValueForKey(key: string): boolean

   /**
   * @description Returns an integer number stored under the given key, or 0 if none exists.
   */
   getInt(key: string): number

   /**
   * @description Returns a double precision floating point number stored under the given key, or 0 if none exists.
   */
   getDouble(key: string): number

   /**
   * @description Returns a boolean value stored under the given key, or false if none exists.
   */
   getBool(key: string): boolean

   /**
   * @description Returns a string value stored under the given key, or empty string if none exists.
   */
   getString(key: string): string

   /**
   * @description Stores an integer number value under the given key.
   */
   putInt(key: string, value: number): void

   /**
   * @description Stores a double precision floating point number under the given key.
   */
   putDouble(key: string, value: number): void

   /**
   * @description Stores a boolean value under the given key.
   */
   putBool(key: string, value: boolean): void

   /**
   * @description Stores a string value under the given key.
   */
   putString(key: string, value: string): void

   /**
   * @deprecated
   */
   putStringWithTimeToLive(key: string, value: string, ttl: number): void

   /**
   * @deprecated
   */
   putStringWithTimeToLiveHours(key: string, value: string, ttl: number): void

   /**
   * @deprecated
   */
   putStringWithTimeToLiveDays(key: string, value: string, ttl: number): void

   /**
   * @deprecated
   */
   removeString(key: string): string

   /**
   * @deprecated
   */
   putIntWithTimeToLive(key: string, value: number, ttl: number): void

   /**
   * @deprecated
   */
   putIntWithTimeToLiveHours(key: string, value: number, ttl: number): void

   /**
   * @deprecated
   */
   putIntWithTimeToLiveDays(key: string, value: number, ttl: number): void

   /**
   * @deprecated
   */
   removeInt(key: string): number

   /**
   * @description Returns a floating point value stored under the given key, or 0 if none exists.
   */
   getFloat(key: string): number

   /**
   * @description Stores a floating point value under the given key.
   */
   putFloat(key: string, value: number): void

   /**
   * @deprecated
   */
   putFloatWithTimeToLive(key: string, value: number, ttl: number): void

   /**
   * @deprecated
   */
   putFloatWithTimeToLiveHours(key: string, value: number, ttl: number): void

   /**
   * @deprecated
   */
   putFloatWithTimeToLiveDays(key: string, value: number, ttl: number): void

   /**
   * @deprecated
   */
   removeFloat(key: string): number

   /**
   * @deprecated
   */
   putBoolWithTimeToLive(key: string, value: boolean, ttl: number): void

   /**
   * @deprecated
   */
   putBoolWithTimeToLiveHours(key: string, value: boolean, ttl: number): void

   /**
   * @deprecated
   */
   putBoolWithTimeToLiveDays(key: string, value: boolean, ttl: number): void

   /**
   * @deprecated
   */
   removeBool(key: string): boolean

   /**
   * @deprecated
   */
   size(): number

   /**
   * @description Clears all data stored in the General Data Store.
   */
   clear(): void

   /**
   * @description Returns the maximum total size allowed, in bytes, of all data stored in this General Data Store.
   */
   getMaxSizeInBytes(): number

   /**
   * @description If `onStoreFull` has been set, this method returns the current total size, in bytes, of all data stored in this General Data Store. Otherwise, `0` is returned.
   */
   getSizeInBytes(): number

   getValueCount(): number

   /**
   * @deprecated
   */
   get(key: string): string

   /**
   * @description Returns true if a value is being stored under the given key.
   */
   has(key: string): boolean

   /**
   * @description Removes the value being stored under the given key. If no value exists under the key, nothing will happen.
   */
   remove(key: string): void

   /**
   * @description Returns a vec2 value stored under the given key, or a default vec2 if none exists.
   */
   getVec2(key: string): vec2

   /**
   * @description Stores a vec2 value under the given key.
   */
   putVec2(key: string, value: vec2): void

   /**
   * @description Returns a vec3 value stored under the given key, or a default vec3 if none exists.
   */
   getVec3(key: string): vec3

   /**
   * @description Stores a vec3 value under the given key.
   */
   putVec3(key: string, value: vec3): void

   /**
   * @description Returns a vec4 value stored under the given key, or a default vec4 if none exists.
   */
   getVec4(key: string): vec4

   /**
   * @description Stores a vec4 value under the given key.
   */
   putVec4(key: string, value: vec4): void

   /**
   * @description Returns a mat2 value stored under the given key, or a default mat2 if none exists.
   */
   getMat2(key: string): mat2

   /**
   * @description Stores a mat2 value under the given key.
   */
   putMat2(key: string, value: mat2): void

   /**
   * @description Stores a mat3 value under the given key.
   */
   getMat3(key: string): mat3

   /**
   * @description Stores a mat3 value under the given key.
   */
   putMat3(key: string, value: mat3): void

   /**
   * @description Returns a mat4 value stored under the given key, or a default mat4 if none exists.
   */
   getMat4(key: string): mat4

   /**
   * @description Stores a mat4 value under the given key.
   */
   putMat4(key: string, value: mat4): void

   /**
   * @description Returns a quat value stored under the given key, or a default quat if none exists.
   */
   getQuat(key: string): quat

   /**
   * @description Stores a quat value under the given key.
   */
   putQuat(key: string, value: quat): void

   /**
   * @description Stores an integer array under the given key.
   */
   putIntArray(key: string, value: number[]): void

   /**
   * @description Returns an integer array being stored under the given key, or an empty array if none exists.
   */
   getIntArray(key: string): number[]

   /**
   * @description Stores a floating point array under the given key.
   */
   putFloatArray(key: string, value: number[]): void

   /**
   * @description Returns a floating point array being stored under the given key, or an empty array if none exists.
   */
   getFloatArray(key: string): number[]

   /**
   * @description Stores a boolean array under the given key.
   */
   putBoolArray(key: string, value: boolean[]): void

   /**
   * @description Returns a boolean array being stored under the given key, or an empty array if none exists.
   */
   getBoolArray(key: string): boolean[]

   /**
   * @description Stores a string array under the given key.
   */
   putStringArray(key: string, value: string[]): void

   /**
   * @description Returns a string array being stored under the given key, or an empty array if none exists.
   */
   getStringArray(key: string): string[]

   /**
   * @description Stores a vec2 array under the given key.
   */
   putVec2Array(key: string, value: vec2[]): void

   /**
   * @description Returns a vec2 array being stored under the given key, or an empty array if none exists.
   */
   getVec2Array(key: string): vec2[]

   /**
   * @description Stores a vec3 array under the given key.
   */
   putVec3Array(key: string, value: vec3[]): void

   /**
   * @description Returns a vec3 array being stored under the given key, or an empty array if none exists.
   */
   getVec3Array(key: string): vec3[]

   /**
   * @description Stores a vec4 array under the given key.
   */
   putVec4Array(key: string, value: vec4[]): void

   /**
   * @description Returns a vec4 array being stored under the given key, or an empty array if none exists.
   */
   getVec4Array(key: string): vec4[]

   /**
   * @description Stores a mat2 array under the given key.
   */
   putMat2Array(key: string, value: mat2[]): void

   /**
   * @description Returns a mat2 array being stored under the given key, or an empty array if none exists.
   */
   getMat2Array(key: string): mat2[]

   /**
   * @description Stores a mat3 array under the given key.
   */
   putMat3Array(key: string, value: mat3[]): void

   /**
   * @description Returns a mat3 array being stored under the given key, or an empty array if none exists.
   */
   getMat3Array(key: string): mat3[]

   /**
   * @description Stores a mat4 array under the given key.
   */
   putMat4Array(key: string, value: mat4[]): void

   /**
   * @description Returns a mat4 array being stored under the given key, or an empty array if none exists.
   */
   getMat4Array(key: string): mat4[]

   /**
   * @description Stores a quat array under the given key.
   */
   putQuatArray(key: string, value: quat[]): void

   /**
   * @description Returns a quat array being stored under the given key, or an empty array if none exists.
   */
   getQuatArray(key: string): quat[]

   /**
   * @description Callback function that gets called when the allowed storage limit has been passed.
   * The store won't be saved if it is full, so if this is called make sure to remove data until back under the limit.
   */
   onStoreFull: () => void

}

interface GeoData extends AbstractData {
   isTaxonomyAvailable(): boolean

   getTaxonomyJson(): string

   isWeatherAvailable(): boolean

   getTemperatureCelsius(): number

   getTemperatureFahrenheit(): number

   getWeatherCondition(): string

}

interface GltfAsset extends Asset {
   tryInstantiate(parent: SceneObject, material: Material): SceneObject

}

interface Glyph extends ScriptObject {
   getFont(): Font

   getCharacters(): string

   getIndex(): number

   getBoundingBox(): BoundingBox

   getAdvanceX(): number

   getAdvanceY(): number

   getMeshBuilder(): ExtrudedMeshBuilder

}

interface GlyphLoader extends ScriptObject {
   getGlyphsAndPositions(text: string, preferredFonts: Font[]): GlyphsAndPositions

}

interface GlyphMeshBuilder extends ExtrudedMeshBuilder {
   boundingBox: BoundingBox

}
declare namespace GlyphMeshBuilder {
   export function createMeshBuilder(glyph: OutlineGlyph): GlyphMeshBuilder


}
interface GlyphOutlineEdge {
   getFirstVertex(): vec2

   getFirstVertexU(): number

   getFirstNormalIndex(): number

   getSecondNormalIndex(): number

}

interface GlyphOutlineShape {
   getEdges(): GlyphOutlineEdge[]

   getNormals(): vec2[]

   getLength(): number

}

interface GlyphOutlineShapes {
   getBoundary(): GlyphOutlineShape

   getHoles(): GlyphOutlineShape[]

}

interface GlyphPosition {
   getOffset(): vec2

   getAdvance(): number

}

interface GlyphsAndPositions {
   getGlyphs(): Glyph[]

   getPositions(): GlyphPosition[]

   getStringIndices(): number[]

   getCaretSubpositions(): number[][]

}

declare class GridMeshBuilder {
   constructor()

   build(width: number, height: number): RenderMesh

}

/**
* @description This class has been **Deprecated**. Please instead use the [DeviceTracking](/api/classes/DeviceTracking) component with Tracking Mode set to Rotation.
* See the [Tracking Modes](/guides/general/tracking/tracking-modes) guide for more information.

* Applies the device's gyroscope rotation to the SceneObject it is attached to.
*/
interface Gyroscope extends Component {
   setOnGyroscopeInitialized(eventCallback: () => void): void

   /**
   * @description If enabled, the Gyroscope's rotation will be inverted.
   */
   invertRotation: boolean

   /**
   * @description If enabled, the Gyroscope's rotation will be inverted when the front facing camera is active.
   */
   invertOnFrontCamera: boolean

}

interface HairSimulationColliderAsset extends BinAsset {
}

interface HairSimulationColliderComponent extends Component {
   asset: HairSimulationColliderAsset

   offset: vec3

   scale: vec3

}

interface HairVisual extends BaseMeshVisual {
   isHardwareSupported(): boolean

   isInitialized(): boolean

   isFallbackInitialized(): boolean

   rebuildFallbackResources(): void

   resetSimulation(): void

   /**
   * @deprecated
   */
   setStrandsSceneObject(value: SceneObject): void

   clearColliders(): void

   getColliderCount(): number

   getCollider(index: number): HairSimulationColliderComponent

   addCollider(colliderComponent: HairSimulationColliderComponent): void

   removeColliderByIndex(index: number): void

   strandsSceneObject: SceneObject

   rebuildStrandPointCount: number

   hairMaterial: Material

   fallbackHairMaterial: Material

   strandWidth: number

   strandBunchAberration: number

   singleStrandInterpolationRadius: number

   singleStrandInterpolationInstanceCount: number

   multiStrandInterpolationNoise: number

   multiStrandInterpolationRadius: number

   multiStrandInterpolationInstanceCount: number

   multiStrandInterpolationCosThreshold: number

   strandNeighbourSearchType: StrandNeighbourSearchType

   stretchStiff: number

   bendStiff: number

   twistStiff: number

   collapseStiff: number

   preserveStiff: number

   damp: number

   friction: number

   gravity: vec3

   frameRate: number

   /**
   * @deprecated
   */
   timeSubs: number

   stretchLimitEnable: boolean

   headRepulsionEnable: boolean

   headRepulsionStiff: number

   headRepulsionOffset: number

   headRepulsionFriction: number

   strandCollisionEnable: boolean

   strandCollisionStiff: number

   strandCollisionRadius: number

   strandCollisionFriction: number

   windEnable: boolean

   windForce: vec3

   drawFbxStrands: boolean

   drawSimulatedStrands: boolean

   drawCollider: boolean

   isFallbackMode: boolean

   isDebugMode: boolean

}

interface HapticFeedbackSystem extends ScriptObject {
   hapticFeedback(type: HapticFeedbackType): void

}

declare enum HapticFeedbackType {
   TapticEngine,
   Vibration
}

/**
* @description Binds the SceneObject to a tracked face.
* See the [Head Attached 3D Objects Guide](/guides/face/face-effects/head-attached-3d-objects) for more information.
*/
interface Head extends Component {
   /**
   * @description Changes the attachment point type used to anchor this object to a face.
   */
   setAttachmentPointType(attachmentPointType: AttachmentPointType): void

   setAttachedBarycentricVertexIndexes(index0: number, index1: number, index2: number): void

   setAttachedBarycentricVertexWeights(weight0: number, weight1: number, weight2: number): void

   /**
   * @description Returns the total number of faces currently being tracked.
   */
   getFacesCount(): number

   getLandmark(index: number): vec2

   getLandmarks(): vec2[]

   getLandmarkCount(): number

   getSize(): vec2

   getRotation(): quat

   getPosition(index: number): vec3

   getBarycentricPos(indexWeight: vec2[]): vec3

   getPosition2d(index: number): vec2

   getBarycentricPos2d(indexWeight: vec2[]): vec2

   setNeedsExpressionWeights(): void

   setNeedsPreciseExpressionWeights(): void

   getExpressionWeight(expressionIndex: number): number

   getFaceMeshSource(): FaceMeshSource

   hasExpressionWithName(expressionName: string): boolean

   getExpressionWeightByName(expressionName: string): number

   /**
   * @description The index of the face this head is attached to.
   */
   faceIndex: number

   minFaceScale: number

   enhanceWithNativeAR: boolean

   enableDebugRendering: boolean

}

/**
* @description Used to show and hide hints to the user.
* For more information and useful helper scripts, see the [Scripting Hints Guide](/guides/scripting/scripting-hints).

* <table border="1" cellspacing=0 cellpadding=0><thead><tr><th>Hint ID</th><th>Hint Message</th></tr></thead><tbody><tr><td>&#8220;lens_hint_blow_a_kiss&#8221;</td><td>&#8220;Blow A Kiss&#8221;</td></tr><tr><td>&#8220;lens_hint_come_closer&#8221;</td><td>&#8220;Come Closer&#8221;</td></tr><tr><td>&#8220;lens_hint_do_not_smile&#8221;</td><td>&#8220;Do Not Smile&#8221;</td></tr><tr><td>&#8220;lens_hint_do_not_try_with_a_friend&#8221;</td><td>&#8220;Do Not Try With A Friend&#8221;</td></tr><tr><td>&#8220;lens_hint_find_face&#8221;</td><td>&#8220;Find Face&#8221;</td></tr><tr><td>&#8220;lens_hint_keep_raising_your_eyebrows&#8221;</td><td>&#8220;Keep Raising Your Eyebrows&#8221;</td></tr><tr><td>&#8220;lens_hint_kiss&#8221;</td><td>&#8220;Kiss&#8221;</td></tr><tr><td>&#8220;lens_hint_kiss_again&#8221;</td><td>&#8220;Kiss Again&#8221;</td></tr><tr><td>&#8220;lens_hint_look_around&#8221;</td><td>&#8220;Look Around&#8221;</td></tr><tr><td>&#8220;lens_hint_look_down&#8221;</td><td>&#8220;Look Down&#8221;</td></tr><tr><td>&#8220;lens_hint_look_left&#8221;</td><td>&#8220;Look Left&#8221;</td></tr><tr><td>&#8220;lens_hint_look_right&#8221;</td><td>&#8220;Look Right&#8221;</td></tr><tr><td>&#8220;lens_hint_look_up&#8221;</td><td>&#8220;Look Up&#8221;</td></tr><tr><td>&#8220;lens_hint_make_some_noise&#8221;</td><td>&#8220;Make Some Noise!&#8221;</td></tr><tr><td>&#8220;lens_hint_nod_your_head&#8221;</td><td>&#8220;Nod Your Head&#8221;</td></tr><tr><td>&#8220;lens_hint_now_kiss&#8221;</td><td>&#8220;Now Kiss&#8221;</td></tr><tr><td>&#8220;lens_hint_now_open_your_mouth&#8221;</td><td>&#8220;Now Open Your Mouth&#8221;</td></tr><tr><td>&#8220;lens_hint_now_raise_your_eyebrows&#8221;</td><td>&#8220;Now Raise Your Eyebrows&#8221;</td></tr><tr><td>&#8220;lens_hint_now_smile&#8221;</td><td>&#8220;Now Smile&#8221;</td></tr><tr><td>&#8220;lens_hint_open_your_mouth&#8221;</td><td>&#8220;Open Your Mouth&#8221;</td></tr><tr><td>&#8220;lens_hint_open_your_mouth_again&#8221;</td><td>&#8220;Open Your Mouth Again&#8221;</td></tr><tr><td>&#8220;lens_hint_raise_eyebrows_or_open_mouth&#8221;</td><td>&#8220;Raise Your Eyebrows / Or / Open Your Mouth&#8221;</td></tr><tr><td>&#8220;lens_hint_raise_your_eyebrows&#8221;</td><td>&#8220;Raise Your Eyebrows&#8221;</td></tr><tr><td>&#8220;lens_hint_raise_your_eyebrows_again&#8221;</td><td>&#8220;Raise Your Eyebrows Again&#8221;</td></tr><tr><td>&#8220;lens_hint_smile&#8221;</td><td>&#8220;Smile&#8221;</td></tr><tr><td>&#8220;lens_hint_smile_again&#8221;</td><td>&#8220;Smile Again&#8221;</td></tr><tr><td>&#8220;lens_hint_swap_camera&#8221;</td><td>&#8220;Swap Camera&#8221;</td></tr><tr><td>&#8220;lens_hint_tap&#8221;</td><td>&#8220;Tap!&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_a_surface&#8221;</td><td>&#8220;Tap A Surface&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_ground&#8221;</td><td>&#8220;Tap The Ground&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_ground_to_place&#8221;</td><td>&#8220;Tap Ground To Place&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_surface_to_place&#8221;</td><td>&#8220;Tap Surface To Place&#8221;</td></tr><tr><td>&#8220;lens_hint_try_friend&#8221;</td><td>&#8220;Try It With A Friend&#8221;</td></tr><tr><td>&#8220;lens_hint_try_rear_camera&#8221;</td><td>&#8220;Try It With Your Rear Camera&#8221;</td></tr><tr><td>&#8220;lens_hint_turn_around&#8221;</td><td>&#8220;Turn Around&#8221;</td></tr><tr><td>&#8220;lens_hint_walk_through_the_door&#8221;</td><td>&#8220;Walk Through The Door&#8221;</td></tr></tbody></table>
*/
interface HintsComponent extends Component {
   /**
   * @description Shows the hint with id `hintID` for a duration of `duration` seconds. Use a duration of -1 to keep the hint onscreen forever.
   */
   showHint(hintID: string, time: number): boolean

   /**
   * @description Hides the hint with id `hintID`.
   */
   hideHint(hintID: string): boolean

}

interface HistogramData extends AbstractData {
   nthPercintile(percentage: number): number

   getHistogramArray(): number[]

   getHistogramArraySize(): number

   getCdfArray(): number[]

   getCdfArraySize(): number

   cdfMin: number

   average: number

   rootMeanSquare: number

   brightness: number

}

declare enum HoleMode {
   Full,
   HolesOnly,
   NoHoles
}

/**
* @description Used by the `horizontalAlignment` property in [MeshVisual](/api/classes/MeshVisual).
* When a [ScreenTransform](/api/classes/ScreenTransform) is attached to the same SceneObject, this determines how the mesh will be positioned horizontally.
*/
declare enum HorizontalAlignment {
   /**
   * @description The mesh will be aligned to the left side.
   */
   Left,
   /**
   * @description The mesh will be centered.
   */
   Center,
   /**
   * @description The mesh will be aligned to the right side.
   */
   Right
}

/**
* @description Options for wrapping text horizontally.
* Used by [Text component's](/api/classes/Text) `horizontalOverflow` property.
*/
declare enum HorizontalOverflow {
   /**
   * @description Text will continue drawing past horizontal boundaries.
   */
   Overflow,
   /**
   * @description Text is clipped to the width of horizontal boundaries.
   */
   Truncate,
   /**
   * @description Text wraps when reaching horizontal boundaries and continues on the next line.
   */
   Wrap,
   /**
   * @description Text will shrink to fit within the horizontal boundaries.
   */
   Shrink
}

interface IAssetSystem extends ScriptObject {
}

/**
* @description The base class for parameter objects passed into event callbacks.
*/
interface IEventParameters extends ScriptObject {
}

/**
* @description A 2D visual used for drawing texture assets.
* Commonly used with [ScreenTransform](/api/classes/ScreenTransform) for drawing images on the screen.

* See the [Image guide](/guides/2d/image/) for more information.
*/
interface Image extends MaterialMeshVisual {
   /**
   * @description If enabled, the drawn image will be flipped horizontally.
   */
   flipX: boolean

   /**
   * @description If enabled, the drawn image will be flipped vertically.
   */
   flipY: boolean

   /**
   * @description The location of the Image's pivot point relative to its boundaries.
   * Where (-1, -1) is the bottom left corner, (0, 0) is the center, and (1, 1) is the top right corner of the Image.
   */
   pivot: vec2

   size: vec2

}

/**
* @description Controls an image picker texture and UI.
* Can be accessed through [Texture.control](/api/classes/Texture#control-textureprovider) on an Image Picker texture.
* For more information, see the [Image Picker Texture](/guides/2d/image-picker-texture) guide.
*/
interface ImagePickerTextureProvider extends TextureProvider {
   /**
   * @description Binds a callback function for when the user selects or changes an image from the picker.
   */
   setImageChangedCallback(callback: () => void): void

   /**
   * @description Shows the image picker UI.
   */
   showImagePicker(): void

   /**
   * @description Hides the image picker UI.
   */
   hideImagePicker(): void

   /**
   * @description If enabled, the image picker UI will be shown automatically when the Lens starts.
   */
   autoShowImagePicker: boolean

}

interface Inpainting extends PostEffectVisual {
}

interface InputBuilder extends ScriptObject {
   setName(name: string): InputBuilder

   setShape(shape: vec3): InputBuilder

   setInputTexture(texture: Texture): InputBuilder

   build(): InputPlaceholder

}

interface InputPlaceholder extends BasePlaceholder {
   texture: Texture

   data: Float32Array

}

/**
* @description The base class for animation tracks using integer values.
*/
interface IntAnimationTrack extends AnimationTrack {
}

/**
* @description Represents an animation track using stepped integer value keyframes.
*/
interface IntStepAnimationTrackKeyFramed extends IntAnimationTrack {
   /**
   * @description Removes all keys.
   */
   removeAllKeys(): void

   /**
   * @description Removes key at index `index`.
   */
   removeKeyAt(index: number): void

   /**
   * @description Adds a key with value `value` at time `time`.
   */
   addKey(time: number, value: number): void

}

/**
* @description Represents an animation track using stepped integer value keyframes.
*/
interface IntStepNoLerpAnimationTrackKeyFramed extends IntAnimationTrack {
   /**
   * @description Removes all keys.
   */
   removeAllKeys(): void

   /**
   * @description Removes key at index `index`.
   */
   removeKeyAt(index: number): void

   /**
   * @description Adds a key with value `value` at time `time`.
   */
   addKey(time: number, value: number): void

}

/**
* @description Triggered when the tracked face ends a kiss.
*/
interface KissFinishedEvent extends FaceTrackingEvent {
}

/**
* @description Triggered when the tracked face starts a kiss.
*/
interface KissStartedEvent extends FaceTrackingEvent {
}

/**
* @description Displays text in the scene.
* This is now deprecated in favor of [Text](/api/classes/Text).
* See the [Text guide](/guides/2d/text) for more information.
*/
interface Label extends SpriteVisual {
   /**
   * @deprecated
   */
   setTextInfo(text: string, font: string, size: number): void

   /**
   * @description Returns the potential width and height of the Label if it were to display the input text.
   */
   measureText(text: string): vec2

   /**
   * @description The text displayed by the Label.
   */
   text: string

   /**
   * @deprecated
   */
   fontName: string

   /**
   * @description The font used to display text.
   */
   fontAsset: Font

   /**
   * @description The font size being used.
   */
   size: number

   /**
   * @description The color used for drawing text.
   */
   textColor: vec4

   /**
   * @description If enabled, adds a dropshadow to the text.
   */
   useDropshadow: boolean

   /**
   * @deprecated
   
   * @description The horizontal and vertical offset used for dropshadow.
   */
   dropshadowOffset: vec2

   /**
   * @deprecated
   */
   dropshadowColor: vec2

   /**
   * @description The horizontal and vertical offset used for dropshadow.
   */
   shadowOffset: vec2

   /**
   * @description The color used for dropshadow.
   */
   shadowColor: vec4

   /**
   * @description If enabled, adds an outline around the text.
   */
   useOutline: boolean

   /**
   * @description The strength of the outline effect.
   */
   outlineSize: number

   /**
   * @description The color used for the outline effect.
   */
   outlineColor: vec4

}

/**
* @description This event is triggered at the end of every frame, after normal [UpdateEvents](/api/classes/UpdateEvent) trigger
* but before rendering occurs.
*/
interface LateUpdateEvent extends SceneEvent {
   /**
   * @description Returns the time elapsed (in seconds) between the current frame and previous frame.
   */
   getDeltaTime(): number

}

/**
* @description Used to describe a set of layers that an object belongs to or interacts with.

* See [SceneObject's](/api/classes/SceneObject) `layer` property, [Camera's](/api/classes/Camera) `renderLayer` property, and [LightSource's](/api/classes/LightSource) `renderLayer` property.
*/
interface LayerSet {
   /**
   * @description Returns true if all layers in the `other` LayerSet are also present in this one.
   */
   contains(other: LayerSet): boolean

   /**
   * @description Returns true if this LayerSet contains no layers.
   */
   isEmpty(): boolean

   /**
   * @description Returns a new LayerSet combining this LayerSet and `other`.
   */
   union(other: LayerSet): LayerSet

   /**
   * @description Returns a new LayerSet that only contains layers present in both this LayerSet and `other`.
   */
   intersect(other: LayerSet): LayerSet

   /**
   * @description Returns a new LayerSet that contains layers present in this LayerSet but not present in `other`.
   */
   except(other: LayerSet): LayerSet

   /**
   * @description Returns a string representation of this LayerSet.
   */
   toString(): string

}
declare namespace LayerSet {
   /**
   * @description Returns a new LayerSet based on the passed in number.
   */
   export function fromNumber(layers: number): LayerSet


}
/**
* @deprecated
*/
interface LegacyFaceMeshProvider extends RenderObjectProvider {
   faceIndex: number

   externalMesh: RenderMesh

   vertexMatchingMode: number

   vertexMatchingRadius: number

}

interface LensDataKey {
}
declare namespace LensDataKey {
   let SnapSendWithLens: string

   let StoryPostWithLens: string

   let SnapReceivedWithLens: string

   let SnapSavedWithLens: string


}
interface LensDataSystem extends ScriptObject {
   requestLensData(callback: () => void): void

   getLensData(key: string): AnyData

   isLensDataReady(): boolean

}

declare enum LensEntryPoint {
   LiveCamera,
   StoryReply,
   ChatReply,
   Restart,
   PreviewCancel,
   Map
}

/**
* @description Acts as a source of light in the scene.
* See the [Light and Shadows](/guides/3d/light-and-shadow) guide for more information about lighting.
*/
interface LightSource extends Component {
   /**
   * @deprecated
   */
   addRenderLayer(id: number): void

   /**
   * @deprecated
   */
   removeRenderLayer(id: number): void

   /**
   * @deprecated
   */
   getAllRenderLayers(): number[]

   /**
   * @deprecated
   */
   checkRenderLayer(id: number): boolean

   /**
   * @description The strength of the light on a scale of 0.0  1.0.
   */
   intensity: number

   /**
   * @description The color of the light.
   */
   color: vec3

   /**
   * @description If enabled, the LightSource will be able to cast shadows.
   */
   castsShadows: boolean

   shadowColor: vec4

   /**
   * @description The lightness and darkness value of the shadow cast by objects from this light source.
   */
   shadowDensity: number

   shadowBlurRadius: number

   shadowTextureSize: number

   /**
   * @description If enabled, the LightSource will be automatically positioned based on its orientation relative to any shadow casting meshes in the scene.
   */
   autoLightSourcePosition: boolean

   /**
   * @description If enabled, `shadowFrustumSize` will be automatically updated based on its orientation relative to any shadow casting meshes in the scene.
   */
   autoShadowFrustumSize: boolean

   autoShadowFrustumSizeExtend: number

   /**
   * @description The simulated distance of the light source from objects to calculate the softness of the shadow.
   */
   shadowFrustumSize: number

   /**
   * @description The minimum distance at which shadows will be calculated for this LightSource.
   */
   shadowFrustumNearClipPlane: number

   /**
   * @description The maximum distance at which shadows will be calculated for this LightSource.
   */
   shadowFrustumFarClipPlane: number

   /**
   * @deprecated
   */
   gaussianBlurKernelSize: number

   /**
   * @deprecated
   
   * @description Controls the strength of blurring done to shadows cast by this LightSource.
   */
   gaussianBlurSigma: number

   /**
   * @deprecated
   */
   gaussianBlurStep: number

   useEstimation: boolean

   estimationModel: BinAsset

   estimationIntensity: number

   /**
   * @description Enable if you would like the LightSource to use information from the `diffuseEnvmapTexture` for light color information.
   */
   useEnvmap: boolean

   /**
   * @description A value used to increase the intensity of light information derived from the `diffuseEnvmapTexture` exponentially.
   */
   envmapExposure: number

   /**
   * @description Controls the amount of rotation applied to the `diffuseEnvmapTexture`.
   */
   envmapRotation: number

   /**
   * @deprecated
   
   * @description A color image applied to an imaginary skybox the light source will use for color information.
   */
   diffuseEnvTexture: Texture

   /**
   * @deprecated
   */
   specularEnvTexture: Texture

   /**
   * @description A color image applied to an imaginary skybox the LightSource will use for color information.
   */
   diffuseEnvmapTexture: Texture

   /**
   * @description A color image applied to an imaginary skybox the light source will use for specular and reflection information.
   */
   specularEnvmapTexture: Texture

   /**
   * @description The set of layers this LightSource will affect.
   */
   renderLayer: LayerSet

}

/**
* @description Applies a liquify effect to anything rendered behind it.
*/
interface LiquifyVisual extends BaseMeshVisual {
   /**
   * @description The radius of the liquify effect circle.
   */
   radius: number

   /**
   * @description How strong the liquify effect is.
   */
   intensity: number

}

declare enum LoadStatus {
   Idle,
   Loading,
   Loaded
}

/**
* @description Helps convert data types to localized string representations. Accessible through `global.localizationSystem`.

* Note that formatted or localized strings may appear differently to users depending on their region.
* The example results given here are representative of a user in the United States, but may appear differently for users in other regions.
*/
interface LocalizationSystem extends ScriptObject {
   getLanguage(): string

   localize(key: string): string

   /**
   * @deprecated
   */
   getFormattedDate(date: Date): string

   /**
   * @deprecated
   */
   getFormattedDateShort(date: Date): string

   /**
   * @deprecated
   */
   getFormattedTime(date: Date): string

   /**
   * @deprecated
   */
   getFormattedDateAndTime(date: Date): string

   /**
   * @description Returns a localized string for the date of the passed in `Date` object.
   
   * Example: "Jan 1, 2019"
   */
   getDateFormatted(date: Date): string

   /**
   * @description Returns a short, localized string for the date of the passed in `Date` object.
   
   * Example: "1/1/19"
   */
   getDateShortFormatted(date: Date): string

   /**
   * @description Returns a localized string for the time of the passed in `Date` object.
   
   * Example: "12:34 AM"
   */
   getTimeFormatted(date: Date): string

   /**
   * @description Returns a localized string for the date and time of the passed in `Date` object.
   
   * Example: "Jan 1, 2019 at 12:34 AM"
   */
   getDateAndTimeFormatted(date: Date): string

   /**
   * @description Returns a localized string for the month of the passed in `Date` object.
   
   * Example: "January"
   */
   getMonth(date: Date): string

   /**
   * @description Returns a localized string for the day of the week of the passed in `Date` object.
   
   * Example: "Tuesday"
   */
   getDayOfWeek(date: Date): string

   /**
   * @description Returns a localized, formatted string representing the number of seconds passed in.
   
   * Example: "2:06" (from 126 passed in)
   */
   getFormattedSeconds(seconds: number): string

   /**
   * @description Returns a localized, formatted string representation of the number passed in.
   
   * Example: "1,234" (from 1234 passed in)
   */
   getFormattedNumber(number: number): string

   /**
   * @description Returns a localized, formatted string representation of the celsius temperature passed in.
   
   * Example: "32F" (from 0 passed in)
   */
   getFormattedTemperatureFromCelsius(temperature: number): string

   /**
   * @description Returns a localized, formatted string representation of the fahrenheit temperature passed in.
   
   * Example: "32F" (from 32 passed in)
   */
   getFormattedTemperatureFromFahrenheit(temperature: number): string

   /**
   * @description Returns a localized, formatted string representation of the distance in meters passed in.
   
   * Example: "39.4 in" (from 1 passed in)
   */
   getFormattedDistanceFromMeters(meters: number): string

   language: string

}

/**
* @description Allows you to access a user's location information.
*/
interface Location extends AbstractData {
   /**
   * @description Returns whether or not the user's location is currently available.
   */
   isLocationAvailable(): boolean

   /**
   * @description Returns whether or not the user's compass is currently available.
   */
   isCompassAvailable(): boolean

   getHeading(): number

   getHeadingAccuracy(): number

   /**
   * @description Returns the user's altitude in meters.
   */
   getAltitude(): number

   /**
   * @description Returns the user's latitude.
   */
   getLatitude(): number

   /**
   * @description Returns the user's longitude.
   */
   getLongitude(): number

   getVerticalAccuracy(): number

   getHorizontalAccuracy(): number

   /**
   * @description Returns the speed at which the user is moving in meters per second.
   */
   getSpeed(): number

   getCourse(): number

   getTimestamp(): number

   getProvider(): string

   getDistanceFrom(latitude: number, longitude: number): number

   getRotationFrom(latitude: number, longitude: number): number

   /**
   * @description Returns the local time in the user's location in ISO format.
   */
   getLocalTimeISOFormat(): string

   setLocationUpdateIntervalMillis(millis: number): void

   setDistanceFilterMeters(filter: number): void

   setDesiredAccuracy(accuracy: string): void

   /**
   * @deprecated
   
   * @description Returns whether or not the weather in the user's location is available.
   */
   isWeatherAvailable(): boolean

   /**
   * @deprecated
   
   * @description Returns the temperature in the user's location in degrees Celsius.
   */
   getTemperatureCelsius(): number

   /**
   * @deprecated
   
   * @description Returns the temperature in the user's location in degrees Fahrenheit.
   */
   getTemperatureFahrenheit(): number

   /**
   * @deprecated
   */
   getWeatherCondition(): string

}

interface LocationAsset extends Asset {
   locationId: string

}

interface LocationMarkerProvider extends NaturalFeatureMarkerProvider {
}

/**
* @description Used by [DeviceLocationTrackingComponent](/api/classes/DeviceLocationTrackingComponent) to indicate the user's distance from the landmarker location.
* See the [Landmarker guide](/templates/landmarker) for more information.
*/
declare enum LocationProximityStatus {
   /**
   * @description User's distance cannot be determined or has not been determined yet.
   */
   Unknown,
   /**
   * @description User is close enough to the landmarker location to begin tracking.
   */
   WithinRange,
   /**
   * @description User is too far away from the landmarker location to track it.
   */
   OutOfRange
}

interface LongPressEndEvent extends SceneObjectEvent {
   getLongPressPosition(): vec2

}

interface LongPressStartEvent extends SceneObjectEvent {
   getLongPressPosition(): vec2

}

/**
* @description Every frame, LookAtComponent rotates its SceneObject to face towards a target SceneObject.
*/
interface LookAtComponent extends Component {
   /**
   * @description The "aim" and "up" vectors used when determining rotation.
   * LookAtComponent will try to point the `Aim` axis of the SceneObject towards the target,
   * while keeping the `Up` axis of the SceneObject pointing towards `worldUpVector`.
   */
   aimVectors: LookAtComponent.AimVectors

   /**
   * @description The vector to be considered the "up" vector when determining rotation.
   */
   worldUpVector: LookAtComponent.WorldUpVector

   /**
   * @description The SceneObject this LookAtComponent targets.
   */
   target: SceneObject

   lookAtMode: LookAtComponent.LookAtMode

   offsetRotation: quat

}

/**
* @description The "aim" and "up" vectors used with [LookAtComponent](/api/classes/LookAtComponent) when determining rotation.
* LookAtComponent will try to point the `Aim` axis of the SceneObject towards the target,
* while keeping the `Up` axis of the SceneObject pointing towards `worldUpVector`.
*/
declare namespace LookAtComponent {
   enum AimVectors {
      /**
      * @description X Aim, Y Up
      */
      XAimYUp,
      /**
      * @description X Aim, Z Up
      */
      XAimZUp,
      /**
      * @description Y Aim, X Up
      */
      YAimXUp,
      /**
      * @description Y Aim, Z Up
      */
      YAimZUp,
      /**
      * @description Z Aim, X Up
      */
      ZAimXUp,
      /**
      * @description Z Aim, Y Up
      */
      ZAimYUp,
      /**
      * @description X Aim, -Y Up
      */
      XAimNegativeYUp,
      /**
      * @description X Aim, -Z Up
      */
      XAimNegativeZUp,
      /**
      * @description Y Aim, -X Up
      */
      YAimNegativeXUp,
      /**
      * @description Y Aim, -Z Up
      */
      YAimNegativeZUp,
      /**
      * @description Z Aim, -X Up
      */
      ZAimNegativeXUp,
      /**
      * @description Z Aim, -Y Up
      */
      ZAimNegativeYUp,
      /**
      * @description -X Aim, Y Up
      */
      NegativeXAimYUp,
      /**
      * @description -X Aim, Z Up
      */
      NegativeXAimZUp,
      /**
      * @description -Y Aim, X Up
      */
      NegativeYAimXUp,
      /**
      * @description -Y Aim, Z Up
      */
      NegativeYAimZUp,
      /**
      * @description -Z Aim, X Up
      */
      NegativeZAimXUp,
      /**
      * @description -Z Aim, Y Up
      */
      NegativeZAimYUp,
      /**
      * @description -X Aim, -Y Up
      */
      NegativeXAimNegativeYUp,
      /**
      * @description -X Aim, -Z Up
      */
      NegativeXAimNegativeZUp,
      /**
      * @description -Y Aim, -X Up
      */
      NegativeYAimNegativeXUp,
      /**
      * @description -Y Aim, -Z Up
      */
      NegativeYAimNegativeZUp,
      /**
      * @description -Z Aim, -X Up
      */
      NegativeZAimNegativeXUp,
      /**
      * @description -Z Aim, -Y Up
      */
      NegativeZAimNegativeYUp
   }

}
declare namespace LookAtComponent {
   enum LookAtMode {
      LookAtPoint,
      LookAtDirection
   }

}
/**
* @description Used with [LookAtComponent](/api/classes/LookAtComponent) to set the "up" vector when determining rotation.
*/
declare namespace LookAtComponent {
   enum WorldUpVector {
      /**
      * @description Scene's Y vector
      */
      SceneUp,
      /**
      * @description Scene's X vector
      */
      SceneX,
      /**
      * @description Scene's Y vector
      */
      SceneY,
      /**
      * @description Scene's Z vector
      */
      SceneZ,
      /**
      * @description Target object's X vector
      */
      TargetX,
      /**
      * @description Target object's Y vector
      */
      TargetY,
      /**
      * @description Target object's Z vector
      */
      TargetZ,
      /**
      * @description Current object's X vector
      */
      ObjectX,
      /**
      * @description Current object's Y vector
      */
      ObjectY,
      /**
      * @description Current object's Z vector
      */
      ObjectZ
   }

}
interface MachineLearning {
}
declare namespace MachineLearning {
   export function createInputBuilder(): InputBuilder

   export function createOutputBuilder(): OutputBuilder


}
declare namespace MachineLearning {
   enum AlignmentType {
      CelebAHQ,
      RotationSquare,
      RotationRect
   }

}
declare namespace MachineLearning {
   enum FrameTiming {
      None,
      Update,
      LateUpdate,
      OnRender
   }

}
declare namespace MachineLearning {
   enum InferenceMode {
      CPU,
      GPU,
      Accelerator,
      Auto,
      NativeCPU,
      Libdnn,
      DSP
   }

}
declare namespace MachineLearning {
   enum ModelState {
      Running,
      Loading,
      Idle,
      NotReady
   }

}
declare namespace MachineLearning {
   enum OutputMode {
      Texture,
      Data
   }

}
declare namespace MachineLearning {
   enum PlaceholderType {
      Input,
      Output
   }

}
/**
* @description Handles input information from user touch input via the [TouchComponent](/api/classes/TouchComponent) to control Scale, Rotation, and Translation of objects.
*/
interface ManipulateComponent extends Component {
   /**
   * @description Repositions the object to be within the bounds of `minDistance`, `maxDistance`.
   */
   clampWorldPosition(): void

   /**
   * @description Checks for an intersection point between the manipulation plane and a line extending
   * from the camera through the specified screen space point. The screen point is passed in as (x, y) with both values
   * ranging from ([0-1], [0-1]), (0,0) being left-top and (1,1) being right-bottom. The result is returned as a
   * [ManipulateFrameIntersectResult](/api/classes/ManipulateFrameIntersectResult) object.
   */
   intersectManipulateFrame(screenSpacePoint: vec2): ManipulateFrameIntersectResult

   /**
   * @deprecated
   */
   setCamera(camera: Camera): void

   /**
   * @description Enables or disables the specified ManipulateType for this ManipulateComponent.
   */
   enableManipulateType(type: ManipulateType, enable: boolean): void

   /**
   * @description Returns whether the specified ManipulateType is enabled for this ManipulateComponent.
   */
   isManipulateTypeEnabled(type: ManipulateType): boolean

   /**
   * @description Changes swivel behavior based on the object's height relative to the camera.
   */
   isContextualSwivel: boolean

   /**
   * @description The minimum height of the object.
   */
   minHeight: number

   /**
   * @description The maximum height of the object.
   */
   maxHeight: number

   /**
   * @description The minimum size the object can shrink to.
   */
   minScale: number

   /**
   * @description The maximum size the object can scale to.
   */
   maxScale: number

   /**
   * @description The minimum distance the object can be from the user.
   */
   minDistance: number

   /**
   * @description The maximum distance the object can travel from the user.
   */
   maxDistance: number

   /**
   * @description Multiplier for swivel rotation speed.
   * For example, a value of 0.5 will cut rotation speed in half,
   * and a value of 2.0 will double rotation speed.
   */
   rotationScale: number

}

/**
* @description This event is triggered when manipulation on the object ends.
*/
interface ManipulateEndEvent extends SceneObjectEvent {
   /**
   * @description Sets the type of manipulation this event reacts to. Possible values are: "scale", "swivel", "translatesurface", "translatesphericalwithdepthadjust".
   */
   setManipulateType(manipulateType: string): void

}

/**
* @description Result object returned from [ManipulateComponent.intersectManipulateFrame()](/api/classes/ManipulateComponent).
*/
interface ManipulateFrameIntersectResult {
   /**
   * @description If there was a valid intersection, returns the intersection point in world space.
   */
   getIntersectionPoint(): vec3

   /**
   * @description Returns whether there was a valid intersection.
   */
   isValid(): boolean

}

/**
* @description This event is triggered when manipulation on the object begins.
*/
interface ManipulateStartEvent extends SceneObjectEvent {
   /**
   * @description Sets the type of manipulation this event reacts to. Possible values are: "scale", "swivel", "translatesurface", "translatesphericalwithdepthadjust".
   */
   setManipulateType(value: string): void

}

/**
* @description Enum values specifying each type of manipulation. See [ManipulateComponent](/api/classes/ManipulateComponent).
*/
declare enum ManipulateType {
   /**
   * @description The object can be scaled by pinching with two fingers.
   */
   Scale,
   /**
   * @description The object can be rotated by swiveling with two fingers.
   */
   Swivel,
   /**
   * @description The object can be moved by touching and dragging.
   */
   Drag,
   DragVertical,
   Pan
}

/**
* @description Defines a marker to use for Marker Tracking with [MarkerTrackingComponent](/api/classes/MarkerTrackingComponent).
* For more information, see the [Marker Tracking](/guides/general/marker-tracking) guide.
*/
interface MarkerAsset extends Asset {
   /**
   * @description Returns the aspect ratio (width / height) of the texture used by the marker asset.
   */
   getAspectRatio(): number

   setExtendedTrackingFilterWeights(measurementWeights: number[], recursiveWeights: number[]): void

   setTrackingDebugConfig(json: string): void

   /**
   * @description The height of the marker asset in real-life centimeters. Used to provide accurate transformation.
   * A [MarkerTrackingComponent](/api/classes/MarkerTrackingComponent) using this MarkerAsset will be scaled so that
   * one unit in the SceneObject's local space is equal to one centimeter in real life.
   */
   height: number

   /**
   * @deprecated
   */
   allowExtendedTracking: boolean

   extendedTrackingMode: ExtendedTrackingMode

}

/**
* @description Base class for marker providers.
* For more information, see the [Marker Tracking](/guides/general/tracking/marker-tracking) guide.
*/
interface MarkerProvider extends Provider {
}

/**
* @description Used to track images in the camera. Moves the containing object's transform to match the detected image.
* For more information, see the [Marker Tracking](/guides/general/tracking/marker-tracking) guide.
*/
interface MarkerTrackingComponent extends Component {
   /**
   * @description Returns whether the marker image is currently being tracked in camera.
   */
   isTracking(): boolean

   isMarkerTracking(): boolean

   /**
   * @description The marker asset describing the tracking target.
   */
   marker: MarkerAsset

   markerIndex: number

   /**
   * @description If true, child objects of this Component's [SceneObject](/api/classes/SceneObject) will be disabled when the marker image is not being tracked.
   */
   autoEnableWhenTracking: boolean

   /**
   * @description A function that gets called when marker tracking begins.
   */
   onMarkerFound: () => void

   /**
   * @description A function that gets called when marker tracking is lost.
   */
   onMarkerLost: () => void

}

interface MaskTextureProvider extends TextureProvider {
   setKey(name: string): void

}

/**
* @description A 2x2 matrix.
*/
declare class mat2 {
   /**
   * @description Creates a new mat2, defaulting to identity values.
   */
   constructor()

   /**
   * @description Returns the result of adding the two matrices together.
   */
   add(mat: mat2): mat2

   /**
   * @description Returns the result of subtracting the two matrices.
   */
   sub(mat: mat2): mat2

   /**
   * @description Returns the result of multiplying the two matrices.
   */
   mult(mat: mat2): mat2

   /**
   * @description Returns the result of dividing the two matrices.
   */
   div(mat: mat2): mat2

   /**
   * @description Returns the determinant of the matrix.
   */
   determinant(): number

   /**
   * @description Returns the inverse of the matrix.
   */
   inverse(): mat2

   /**
   * @description Returns the transpose of this matrix.
   */
   transpose(): mat2

   /**
   * @description Returns whether the two matrices are equal.
   */
   equal(mat: mat2): boolean

   /**
   * @description Returns the result of scalar multiplying the matrix.
   */
   multiplyScalar(scalar: number): mat2

   toString(): string

   /**
   * @description Returns a string representation of the matrix.
   */
   description: string

   /**
   * @description The first column of the matrix.
   */
   column0: vec2

   /**
   * @description The second column of the matrix.
   */
   column1: vec2

}
declare namespace mat2 {
   /**
   * @description Returns the identity matrix.
   */
   export function identity(): mat2

   /**
   * @description Returns a matrix with all zero values.
   */
   export function zero(): mat2

   /**
   * @deprecated
   
   * @description Returns the result of adding the two matrices together.
   */
   export function add(arg1: mat2, arg2: mat2): mat2

   /**
   * @deprecated
   
   * @description Returns the result of subtracting the two matrices.
   */
   export function sub(arg1: mat2, arg2: mat2): mat2

   /**
   * @deprecated
   
   * @description Returns the result of multiplying the two matrices.
   */
   export function mul(arg1: mat2, arg2: mat2): mat2

   /**
   * @deprecated
   
   * @description Returns the result of dividing the two matrices.
   */
   export function div(arg1: mat2, arg2: mat2): mat2


}
/**
* @description A 3x3 matrix.
*/
declare class mat3 {
   /**
   * @description Creates a new mat3, defaulting to identity values.
   */
   constructor()

   /**
   * @description Returns the result of adding the two matrices together.
   */
   add(mat: mat3): mat3

   /**
   * @description Returns the result of subtracting the two matrices.
   */
   sub(mat: mat3): mat3

   /**
   * @description Returns the result of multiplying the two matrices.
   */
   mult(mat: mat3): mat3

   /**
   * @description Returns the result of dividing the two matrices.
   */
   div(mat: mat3): mat3

   /**
   * @description Returns the determinant of the matrix.
   */
   determinant(): number

   /**
   * @description Returns the inverse of the matrix.
   */
   inverse(): mat3

   /**
   * @description Returns the transpose of this matrix.
   */
   transpose(): mat3

   /**
   * @description Returns whether the two matrices are equal.
   */
   equal(mat: mat3): boolean

   /**
   * @description Returns the result of scalar multiplying the matrix.
   */
   multiplyScalar(scalar: number): mat3

   /**
   * @description Returns a string representation of the matrix.
   */
   toString(): string

   /**
   * @description Returns a string representation of the matrix.
   */
   description: string

   /**
   * @description The first column of the matrix.
   */
   column0: vec3

   /**
   * @description The second column of the matrix.
   */
   column1: vec3

   /**
   * @description The third column of the matrix.
   */
   column2: vec3

}
declare namespace mat3 {
   /**
   * @description Returns the identity matrix.
   */
   export function identity(): mat3

   /**
   * @description Returns a matrix with all zero values.
   */
   export function zero(): mat3

   /**
   * @description Returns a matrix representing the specified rotation.
   */
   export function makeFromRotation(arg1: quat): mat3

   /**
   * @deprecated
   
   * @description Returns the result of adding the two matrices together.
   */
   export function add(arg1: mat3, arg2: mat3): mat3

   /**
   * @deprecated
   
   * @description Returns the result of subtracting the two matrices.
   */
   export function sub(arg1: mat3, arg2: mat3): mat3

   /**
   * @deprecated
   
   * @description Returns the result of multiplying the two matrices.
   */
   export function mul(arg1: mat3, arg2: mat3): mat3

   /**
   * @deprecated
   
   * @description Returns the result of dividing the two matrices.
   */
   export function div(arg1: mat3, arg2: mat3): mat3


}
/**
* @description A 4x4 matrix.
*/
declare class mat4 {
   /**
   * @description Creates a new mat4, defaulting to identity values.
   */
   constructor()

   /**
   * @description Returns the result of adding the two matrices together.
   */
   add(mat: mat4): mat4

   /**
   * @description Returns the result of subtracting the two matrices.
   */
   sub(mat: mat4): mat4

   /**
   * @description Returns the result of multiplying the two matrices.
   */
   mult(mat: mat4): mat4

   /**
   * @description Returns the result of dividing the two matrices.
   */
   div(mat: mat4): mat4

   /**
   * @description Returns the determinant of the matrix.
   */
   determinant(): number

   /**
   * @description Returns the inverse of the matrix.
   */
   inverse(): mat4

   /**
   * @description Returns the transpose of this matrix.
   */
   transpose(): mat4

   /**
   * @description Returns whether the two matrices are equal.
   */
   equal(mat: mat4): boolean

   /**
   * @description Returns the point `point` multiplied by this matrix.
   */
   multiplyPoint(point: vec3): vec3

   /**
   * @description Returns the direction vector multiplied by this matrix.
   */
   multiplyDirection(direction: vec3): vec3

   /**
   * @description Returns the vector multiplied by this matrix.
   */
   multiplyVector(vector: vec4): vec4

   /**
   * @description Returns the result of scalar multiplying the matrix.
   */
   multiplyScalar(scalar: number): mat4

   /**
   * @description Returns an euler angle representation of this matrix's rotation, in radians.
   */
   extractEulerAngles(): vec3

   /**
   * @description Returns a string representation of the matrix.
   */
   toString(): string

   /**
   * @deprecated
   
   * @description Returns an euler angle representation of this matrix's rotation, in radians.
   */
   extractEulerXYZ(): vec3

   /**
   * @description Returns a string representation of the matrix.
   */
   description: string

   /**
   * @description The first column of the matrix.
   */
   column0: vec4

   /**
   * @description The second column of the matrix.
   */
   column1: vec4

   /**
   * @description The third column of the matrix.
   */
   column2: vec4

   /**
   * @description The fourth column of the matrix.
   */
   column3: vec4

}
declare namespace mat4 {
   /**
   * @description Returns the identity matrix.
   */
   export function identity(): mat4

   /**
   * @description Returns a matrix with all zero values.
   */
   export function zero(): mat4

   /**
   * @description Returns a new matrix with translation `translation`, rotation `rotation`, and scale `scale`.
   */
   export function compose(translation: vec3, rotation: quat, scale: vec3): mat4

   /**
   * @description Returns a new matrix using the provided vectors.
   */
   export function makeBasis(x: vec3, y: vec3, z: vec3): mat4

   /**
   * @description Returns a new matrix generated using the provided arguments.
   */
   export function lookAt(eye: vec3, center: vec3, up: vec3): mat4

   /**
   * @description Returns a new matrix generated using the provided arguments.
   */
   export function perspective(fovY: number, aspect: number, zNear: number, zFar: number): mat4

   /**
   * @description Returns a new matrix generated using the provided arguments.
   */
   export function orthographic(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): mat4

   /**
   * @description Returns a new matrix with rotation `rotation`.
   */
   export function fromRotation(rotation: quat): mat4

   /**
   * @description Returns a new matrix with scale `scale`.
   */
   export function fromScale(scale: vec3): mat4

   /**
   * @description Returns a new matrix with the translation `translation`.
   */
   export function fromTranslation(translation: vec3): mat4

   /**
   * @description Returns a new matrix with x euler angle `xAngle` (in radians).
   */
   export function fromEulerX(xAngle: number): mat4

   /**
   * @description Returns a new matrix with y euler angle `yAngle` (in radians).
   */
   export function fromEulerY(yAngle: number): mat4

   /**
   * @description Returns a new matrix with z euler angle `zAngle` (in radians).
   */
   export function fromEulerZ(zAngle: number): mat4

   /**
   * @description Returns a new matrix with the specified euler angles (in radians).
   */
   export function fromEulerAngles(euler: vec3): mat4

   /**
   * @deprecated
   
   * @description Returns the result of adding the two matrices together.
   */
   export function add(arg1: mat4, arg2: mat4): mat4

   /**
   * @deprecated
   
   * @description Returns the result of subtracting the two matrices.
   */
   export function sub(arg1: mat4, arg2: mat4): mat4

   /**
   * @deprecated
   
   * @description Returns the result of multiplying the two matrices.
   */
   export function mul(arg1: mat4, arg2: mat4): mat4

   /**
   * @deprecated
   
   * @description Returns the result of dividing the two matrices.
   */
   export function div(arg1: mat4, arg2: mat4): mat4

   /**
   * @description Returns the two matrices multiplied component-wise.
   */
   export function compMult(arg1: mat4, arg2: mat4): mat4

   /**
   * @description Returns the outer product of the two matrices.
   */
   export function outerProduct(arg1: vec4, arg2: vec4): mat4

   /**
   * @deprecated
   
   * @description Returns a new matrix with euler angles `euler` (in radians).
   */
   export function fromEulerAnglesYXZ(euler: vec3): mat4

   /**
   * @deprecated
   
   * @description Returns a new matrix with the yaw, pitch, and roll radians found in `yawPitchRoll`.
   */
   export function fromYawPitchRoll(yawPitchRoll: vec3): mat4


}
/**
* @description An asset that describes how visual objects should appear.
* Each Material is a collection of [Passes](/api/classes/Pass) which define the actual rendering passes.
* Materials are used by [MeshVisuals](/api/classes/MeshVisual) for drawing meshes in the scene.
*/
interface Material extends Asset {
   /**
   * @description Returns the number of [Passes](/api/classes/Pass) for the Material.
   */
   getPassCount(): number

   /**
   * @description Returns the [Pass](/api/classes/Pass) of the Material at index `index`.
   */
   getPass(index: number): Pass

   /**
   * @description Returns a copy of the Material.
   */
   clone(): Material

   /**
   * @description The first Pass of the Material.
   */
   mainPass: Pass

}

/**
* @description Base class for all MeshVisual components using [Materials](/api/classes/Material) to render.
* Comparable to the former class "MeshVisual", which was split into the classes:
* [BaseMeshVisual](/api/classes/BaseMeshVisual),
* [MaterialMeshVisual](/api/classes/MaterialMeshVisual),
* and [RenderMeshVisual](/api/classes/RenderMeshVisual).
*/
interface MaterialMeshVisual extends BaseMeshVisual {
   /**
   * @description Returns the number of Materials used for rendering.
   */
   getMaterialsCount(): number

   /**
   * @description Returns the Material at index `index`.
   */
   getMaterial(index: number): Material

   /**
   * @description Adds a Material to use for rendering.
   */
   addMaterial(material: Material): void

   /**
   * @description Clears all Materials.
   */
   clearMaterials(): void

   /**
   * @description Returns the first Material.
   */
   mainMaterial: Material

   /**
   * @description Returns the `mainPass` of the `mainMaterial`.
   */
   mainPass: Pass

}

interface MattingTextureProvider extends TextureProvider {
}

/**
* @description A class for generating meshes at runtime.
*/
declare class MeshBuilder {
   /**
   * @description Creates a new MeshBuilder with the specified vertex layout.
   
   * Layout is given as a list of "attribute" objects with the following properties:
   
   * __name__ - Attribute name
   * __components__ - Size of the attribute (how many float values it uses)
   * __normalized__ (optional) - Optional property declaring that the attribute should be normalized
   
   * ```js
   * var builder = new MeshBuilder([
   *     // vertex position (x,y,z)
   *     { name: "position", components: 3 },
   *     // normal vector (x,y,z)
   *     { name: "normal", components: 3, normalized: true },
   *     // texture UV (u,v)
   *     { name: "texture0", components: 2 },
   * ]);
   * ```
   */
   constructor(layout: Object[])

   /**
   * @description Returns a RenderMesh asset that can be applied to a MeshVisual's `mesh` property. This asset stays linked to the MeshBuilder that provided it, so making changes to the mesh data and calling `updateMesh()` will update the RenderMesh as well.
   */
   getMesh(): RenderMesh

   /**
   * @description Rebuilds the MeshAsset controlled by this MeshBuilder using the current mesh data.
   */
   updateMesh(): void

   /**
   * @description Checks whether the current data entered will create a valid mesh.
   */
   isValid(): boolean

   /**
   * @description Takes a list of list of vertex values according to the layout.
   */
   appendVertices(verts: number[][]): void

   /**
   * @description Similar to `appendVertices`, but takes all values in one large array.
   */
   appendVerticesInterleaved(verts: number[]): void

   appendVerticesInterleavedFromTypedArray(verts: Float32Array, usedSize: number): void

   /**
   * @description Sets data for a single vertex at vertex index `index`.
   */
   setVertexInterleaved(index: number, verts: number[]): void

   /**
   * @description Appends indices to the index list.
   */
   appendIndices(indices: number[]): void

   appendIndicesFromTypedArray(indices: Uint16Array, usedSize: number): void

   /**
   * @description Removes all indices starting at index `from` and ending before index `to`.
   */
   eraseIndices(from: number, to: number): void

   /**
   * @description Removes all vertex data starting at vertex index `from` and ending before vertex index `to`.
   */
   eraseVertices(from: number, to: number): void

   /**
   * @description Returns the number of vertices in the vertex list.
   */
   getVerticesCount(): number

   /**
   * @description Returns the number of indices in the index list.
   */
   getIndicesCount(): number

   setParameters(params: Object): void

   toString(): string

   /**
   * @description The topology type used for the mesh.
   */
   topology: MeshTopology

   /**
   * @description The index data type used by this MeshBuilder. `MeshIndexType.UInt16` is the value normally used for this.
   */
   indexType: MeshIndexType

   meshSerializationEnabled: boolean

}

/**
* @description Possible index data types used by [MeshBuilder](/api/classes/MeshTopology). `MeshIndexType.UInt16` is the value normally used.
*/
declare enum MeshIndexType {
   /**
   * @description No index data type
   */
   None,
   /**
   * @description Unsigned integer, this is the value normally used
   */
   UInt16
}

/**
* @description Mesh topology types used by [MeshBuilder](/api/classes/MeshBuilder).
*/
declare enum MeshTopology {
   /**
   * @description Draws unconnected line segments. Each group of two vertices specifies a new line segment.
   */
   Lines,
   /**
   * @description Draws connected line segments. Starting with the second vertex, a line is drawn between each vertex and the preceeding one.
   */
   LineStrip,
   /**
   * @description Draws individual points. Each vertex specifies a new point to draw.
   */
   Points,
   /**
   * @description Draws unconnected triangles. Each group of three vertices specifies a new triangle.
   */
   Triangles,
   /**
   * @description Draws connected triangles sharing one central vertex. The first vertex is the shared one, or "hub" vertex. Starting with the third vertex, each vertex forms a triangle connecting with the previous vertex and hub vertex.
   */
   TriangleFan,
   /**
   * @description Draws connected triangles in a strip. After the first two vertices, each vertex defines the third point on a new triangle extending from the previous one.
   */
   TriangleStrip
}

/**
* @description This class has been DEPRECATED starting in Lens Studio 2.3.
* The `Component.MeshVisual` typename is now an alias for [BaseMeshVisual](/api/classes/BaseMeshVisual).
* When upgrading a project to Lens Studio 2.3 or higher, any instances of the MeshVisual component will be upgraded to [RenderMeshVisual](/api/classes/RenderMeshVisual).

* This class was split into the following three classes, to better distinguish the behaviors of child classes.

* -[BaseMeshVisual](/api/classes/BaseMeshVisual): Base class for all visual classes using meshes to render
* -[MaterialMeshVisual](/api/classes/MaterialMeshVisual): Child class of BaseMeshVisual, gives access to the [Materials](/api/classes/Material) used to render
* -[RenderMeshVisual](/api/classes/RenderMeshVisual): Child class of MaterialMeshVisual, gives access to the [RenderMesh](/api/classes/RenderMesh) used to render
*/
interface MeshVisual extends Component {
}

interface MLComponent extends Component {
   getInput(name: string): InputPlaceholder

   getOutput(name: string): OutputPlaceholder

   runImmediate(sync: boolean): void

   runScheduled(recurring: boolean, startTiming: MachineLearning.FrameTiming, endTiming: MachineLearning.FrameTiming): void

   getScheduledStart(): MachineLearning.FrameTiming

   getScheduledEnd(): MachineLearning.FrameTiming

   /**
   * @deprecated
   */
   setBinModel(effectFolderAsset: BinAsset): void

   waitOnRunning(): void

   waitOnLoading(): void

   cancel(): void

   stop(): void

   isRecurring(): boolean

   build(placeholders: BasePlaceholder[]): void

   model: any

   state: MachineLearning.ModelState

   inferenceMode: MachineLearning.InferenceMode

   onLoadingFinished: () => void

   onRunningFinished: () => void

   renderOrder: number

}

/**
* @description Triggered when the tracked face's mouth closes.
*/
interface MouthClosedEvent extends FaceTrackingEvent {
}

/**
* @description Triggered when the tracked face's mouth opens.
*/
interface MouthOpenedEvent extends FaceTrackingEvent {
}

interface MultiplayerSession extends ScriptObject {
   getUserId(): string

   getServerTimestamp(): number

   isValidTimestamp(UNKNOWNNAME: number): boolean

   sendMessage(message: string): void

   sendRPC(rpcName: string, payload: string, onResponse: (response: string) => void): void

   leave(): void

}

interface MultiplayerSystem extends ScriptObject {
   createSession(options: BaseMultiplayerSessionOptions, UNKNOWNNAME: (session: MultiplayerSession) => void): void

}

declare enum NativeARTrackingState {
   Unsupported,
   NotRunning,
   NotAvailable,
   Initializing,
   LimitedExcessiveMotion,
   LimitedInsufficientFeatures,
   LimitedRelocalizing,
   Limited,
   Normal
}

interface NaturalFeatureMarkerProvider extends MarkerProvider {
}

interface NeuralFaceEffectTextureProvider extends TextureProvider {
   trackFaces(onFinished: () => void): void

   getTrackedFaceBoundingBoxes(): vec4[]

   computeResultingPlainFaceLandmarks(faceIndex: number, onFinished: (landmarks: number[]) => void): void

   registerEffect(effectName: string, effectFolder: BinAsset): void

   unregisterEffect(effectName: string): void

   applyEffect(faceIndex: number, effectName: string): void

   removeEffect(faceIndex: number): void

   process(onFinished: () => void): void

   setInput(inputTexture: Texture): void

   numberOfFacesToTrack: number

   processingMode: ProcessingMode

   faceTrackingMode: FaceTrackingMode

}

interface NeuralSnapEffectTextureProvider extends TextureProvider {
   process(onFinishedCallback: (arg1: boolean) => void): void

   minSide: number

   model: BinAsset

   input: Texture

}

interface ObjectDetector extends Component {
   isSupported(): boolean

   setModelPath(trackingDataPath: BinAsset): void

   setModelType(modelTypeStr: string): void

   clear(): void

   getObjectsCount(): number

   getObject(index: number): DetectedObject

   getHandObject(index: number): DetectedHandObject

}

/**
* @description A reusable object hierarchy stored as a resource.
* Can be instantiated through script or brought into the scene through Lens Studio.
* For more information, see the [Prefabs](/guides/general/prefabs) guide.
*/
interface ObjectPrefab extends Asset {
   /**
   * @description Creates and returns a new instance of this object hierarchy underneath the specified parent object.
   * If parent is null, the object will be created with no parent.
   */
   instantiate(parent: SceneObject): SceneObject

}

/**
* @description Used to track objects in the camera. Moves the local [ScreenTransform](/api/classes/ScreenTransform) to match the detected image.
* See the [Object Tracking guide](/guides/general/tracking/object-tracking) for more information.
*/
interface ObjectTracking extends Component {
   /**
   * @description Returns true if the object is currently being tracked on camera.
   */
   isTracking(): boolean

   /**
   * @deprecated
   */
   setModelAsset(asset: BinAsset): void

   /**
   * @description The index of the object being tracked.
   */
   objectIndex: number

   objectLabel: string

   objectRotationLabel: string

   objectAttachmentPointLabel: string

   trackedObject: TrackedObject2D

   model: ObjectTrackingAsset

   /**
   * @description If true, child objects of this Component's [SceneObject](/api/classes/SceneObject) will be disabled when the object is not being tracked.
   */
   autoEnableWhenTracking: boolean

   /**
   * @description A function that gets called when the tracked object is found.
   */
   onObjectFound: () => void

   /**
   * @description Function that gets called when the tracked object is lost.
   */
   onObjectLost: () => void

   /**
   * @deprecated
   */
   attachIndex: number

   /**
   * @deprecated
   */
   attachLabel: string

   /**
   * @deprecated
   */
   rotationVectorLabel: string

   /**
   * @deprecated
   */
   attachLandmarkLabel: string

}

interface ObjectTrackingAsset extends BinAsset {
   eventLabels: string[]

   objectLabels: string[]

   landmarkLabels: string[]

   rotationLabels: string[]

   maxNumberOfObjectsToTrack: number

}

interface ObjectTrackingEndEvent extends ObjectTrackingEvent {
}

interface ObjectTrackingEvent extends SceneEvent {
   setBinAssetModel(asset: BinAsset): void

   model: ObjectTrackingAsset

   objectIndex: number

   objectLabel: string

   eventLabel: string

}

interface ObjectTrackingStartEvent extends ObjectTrackingEvent {
}

interface ObjectTrackingSystem extends ScriptObject {
   setModelAsset(asset: BinAsset): void

   startTrackingFromPoint(point: vec2): void

   startTrackingFromPointWithSize(point: vec2, size: vec2): void

   stopTrackingObjectId(id: number): void

   onObjectFound: (object: TrackedObject2D) => void

   onObjectLost: (object: TrackedObject2D) => void

   activeTrackedObjects: TrackedObject2D[]

   config: string

}

interface ObjectTrackingTextureProvider extends TextureProvider {
   model: ObjectTrackingAsset

   objectIndex: number

   objectLabel: string

}

declare enum OffsetAdjustType {
   LegacyNoAdjust,
   AdjustOffset
}

interface OnTimeStartEvent extends SceneEvent {
}

interface OpticalFlow extends AbstractData {
   isOpticalFlowSupported(): boolean

   getGlobalFlow(): vec2

   getFlowAt(normalizedX: number, normalizedY: number): vec2

   deviceMotionCompensated: boolean

}

interface OpticalFlowTextureProvider extends TextureProvider {
   isOpticalFlowSupported(): boolean

   getGlobalFlow(): vec2

   getFlowAt(normalizedX: number, normalizedY: number): vec2

   deviceMotionCompensated: boolean

}

declare enum OS {
   Android,
   iOS,
   MacOS,
   Windows,
   Linux
}

interface OutlineGlyph extends Glyph {
   getOutlinePath(): string

   getOutlineShapes(curveSegmentPrecision: number): GlyphOutlineShapes[]

}

/**
* @description Used in [Text's](/api/classes/Text) `outlineSettings` property.
* Configures how text outlining will appear on a Text component.
*/
interface OutlineSettings extends ScriptObject {
   /**
   * @description Whether outline is enabled on the Text.
   */
   enabled: boolean

   /**
   * @description Settings for how the outline is drawn.
   */
   fill: TextFill

   /**
   * @description The strength of the outline effect, ranging from 0.0 (no outline) to 1.0 (very strong outline).
   */
   size: number

}

interface OutputBuilder extends ScriptObject {
   setName(name: string): OutputBuilder

   setShape(shape: vec3): OutputBuilder

   setOutputMode(outputMode: MachineLearning.OutputMode): OutputBuilder

   build(): OutputPlaceholder

}

interface OutputPlaceholder extends BasePlaceholder {
   texture: Texture

   data: Float32Array

   mode: MachineLearning.OutputMode

}

interface PanGestureEndEvent extends SceneObjectEvent {
   getTranslation(): vec2

   getTouches(): vec2[]

}

interface PanGestureMoveEvent extends SceneObjectEvent {
   getTranslation(): vec2

   getTouches(): vec2[]

}

interface PanGestureStartEvent extends SceneObjectEvent {
   getTranslation(): vec2

   getTouches(): vec2[]

}

interface ParticlesAsset extends Asset {
}

interface ParticlesVisual extends BaseMeshVisual {
   play(reset: boolean): void

   stop(): void

   stopEmitting(): void

   resumeEmitting(): void

   pause(): void

   particlesAsset: ParticlesAsset

   emitterName: string

   forceDepthTest: boolean

   local: boolean

   forceLooped: boolean

}

/**
* @description Controls how a mesh will get rendered. Each Pass acts as an interface for the shader it's associated with.
* Any properties on a Pass's shader will automatically become properties on that Pass.
* For example, if the shader defines a variable named `baseColor`, a script would be able to access that property as `Pass.baseColor`.
*/
interface Pass extends ScriptObject {
   /**
   * @description Returns a copy of the Pass.
   */
   clone(): Pass

   deepClone(): Pass

   /**
   * @description The name of the Pass.
   */
   name: string

   /**
   * @description Whether the material renders on both sides of a mesh face.
   */
   twoSided: boolean

   /**
   * @description Enables depth-sorting.
   */
   depthTest: boolean

   /**
   * @description Enables writing pixels to the depth buffer.
   */
   depthWrite: boolean

   /**
   * @description Controls the masking of color channels with a vec4b representing each channel with a boolean.
   */
   colorMask: vec4b

   /**
   * @deprecated
   
   * @description Enables writing pixels to the frame.
   */
   writesColor: boolean

   /**
   * @description Line width used for rendering.
   */
   lineWidth: number

   /**
   * @description Changes the position that each polygon gets drawn.
   */
   polygonOffset: vec2

   /**
   * @description The cull mode used for rendering.
   */
   cullMode: CullMode

   frustumCull: boolean

   frustumCullPad: number

   /**
   * @description The blend mode used for rendering. Possible values:
   
   * <table border="1" cellspacing=0 cellpadding=0><thead><tr><th>BlendMode</th><th align="center">Value</th><th>Expression</th></tr></thead><tbody><tr><td>Normal</td><td align="center">0</td><td>SrcAlpha, OneMinusSrcAlpha</td></tr><tr><td>MultiplyLegacy [DEPRECATED]</td><td align="center">1</td><td>DstColor, OneMinusSrcAlpha</td></tr><tr><td>AddLegacy [DEPRECATED]</td><td align="center">2</td><td>One, One</td></tr><tr><td>Screen</td><td align="center">3</td><td>One, OneMinusSrcColor</td></tr><tr><td>PremultipliedAlpha</td><td align="center">4</td><td>One, OneMinusSrcAlpha</td></tr><tr><td>AlphaToCoverage</td><td align="center">5</td><td>Blend Disabled</td></tr><tr><td>Disabled</td><td align="center">6</td><td>Blend Disabled</td></tr><tr><td>Add</td><td align="center">7</td><td>SrcAlpha, One</td></tr><tr><td>AlphaTest</td><td align="center">8</td><td>Blend Disabled</td></tr><tr><td>ColoredGlass</td><td align="center">9</td><td>Blend Disabled</td></tr><tr><td>Multiply</td><td align="center">10</td><td>DstColor, Zero</td></tr><tr><td>Min</td><td align="center">11</td><td>One, One</td></tr><tr><td>Max</td><td align="center">12</td><td>One, One</td></tr></tbody></table>
   
   * ```
   * // Sets the blend mode of the main pass for a material to Screen
   * //@input Asset.Material material
   
   * script.material.mainPass.blendMode = 3;
   * ```
   */
   blendMode: number

   instanceCount: number

}

interface PerformanceIndexes extends ScriptObject {
   ml: number

}

/**
* @description Allows data to be stored and retrieved between Lens sessions.
* In other words, data can be saved on device and loaded back in the next time the Lens is opened.
* Can be accessed with `global.persistentStorageSystem`.

* See the [Persistent Storage guide](/guides/scripting/persistent-storage) for more information.
*/
interface PersistentStorageSystem extends ScriptObject {
   /**
   * @deprecated
   */
   getPersistentStore(callback: (store: GeneralDataStore) => void): void

   /**
   * @deprecated
   */
   getPersistentStoreIfLoaded(): GeneralDataStore

   /**
   * @deprecated
   */
   setPersistentStore(store: GeneralDataStore): void

   /**
   * @description The `GeneralDataStore` object used to store and retrieve data.
   */
   store: GeneralDataStore

   sessionStore: DataStoreWithScene

}

/**
* @description Attaches the SceneObject to the mesh surface of a different SceneObject.
* See the [Pin To Mesh](/guides/3d/pin-to-mesh) guide for more information.
*/
interface PinToMeshComponent extends Component {
   /**
   * @description The UV coordinates on the target mesh to attach to.
   */
   pinUV: vec2

   /**
   * @description The orientation type to use.
   */
   orientation: PinToMeshComponent.Orientation

   /**
   * @description If enabled, interpolated vertex normals will be used when calculating the attachment position.
   */
   useInterpolatedVertexNormal: boolean

   /**
   * @description The position offset to apply.
   */
   offsetPosition: vec3

   /**
   * @description The euler angle offset to apply. Only has an effect when `orientation` is set to `PositionAndDirection`.
   */
   offsetRotation: vec3

   /**
   * @description The target mesh to attach to.
   */
   target: BaseMeshVisual

   /**
   * @description The preferred triangle index to attach to when multiple triangles contain the desired UV coordinate.
   */
   preferredTriangle: number

   /**
   * @deprecated
   */
   preferedTriangle: number

}

/**
* @description Used with [PinToMeshComponent.orientation](/api/classes/PinToMeshComponent).
*/
declare namespace PinToMeshComponent {
   enum Orientation {
      /**
      * @description Pins only the position. Rotation is independent from the target mesh.
      */
      OnlyPosition,
      TargetNYUX,
      /**
      * @description Pins both the position and direction. The normal of the target mesh is the Y axis.
      * The U texture coordinate of the target mesh's UV is the X axis.
      */
      PositionAndDirection
   }

}
declare enum PlatformMaskType {
   Portrait,
   /**
   * @deprecated
   */
   Person
}

interface PlatformSegmentationTextureProvider extends TextureProvider {
   isMaskAvailable(): boolean

   getMaskPercentage(): number

   binarizeThreshold: number

   selectedMask: PlatformMaskType

}

/**
* @description Uses an input color lookup table image to adjust the coloring of the Lens.
* See the [Color Correction Post Effect guide](/guides/2d/post-effect/#color-correction) for more information.
*/
interface PostEffectVisual extends MaterialMeshVisual {
}

/**
* @deprecated
*/
interface Prefab extends Asset {
}

/**
* @description Controls an instance of a prefab asset.
*/
interface PrefabInstantiator extends Component {
   /**
   * @description Creates and instantiates a new prefab.
   */
   setPrefab(newPrefab: Prefab): void

}

/**
* @description RenderObjectProvider for mesh objects generated procedurally.
*/
interface ProceduralMeshRenderObjectProvider extends RenderObjectProvider {
}

interface ProceduralTextureProvider extends TextureProvider {
   setPixels(x: number, y: number, width: number, height: number, data: Uint8Array): void

   getPixels(x: number, y: number, width: number, height: number, data: Uint8Array): void

   setPixelsUint8(x: number, y: number, width: number, height: number, data: Uint8Array): void

   setPixelsFloat32(x: number, y: number, width: number, height: number, data: Float32Array): void

   getPixelsUint8(x: number, y: number, width: number, height: number, data: Uint8Array): void

   getPixelsFloat32(x: number, y: number, width: number, height: number, data: Float32Array): void

}
declare namespace ProceduralTextureProvider {
   export function createFromTexture(texture: Texture): Texture

   export function create(width: number, height: number, colorspace: Colorspace): Texture


}
declare enum ProcessingMode {
   Sync,
   Async
}

/**
* @description Base class for all resource providers.
*/
interface Provider extends ScriptObject {
   loadStatus(): LoadStatus

   /**
   * @deprecated
   */
   isLoaded(): boolean

}

/**
* @description A quaternion, used to represent rotation.
*/
declare class quat {
   /**
   * @description Creates a new quat.
   */
   constructor(w: number, x: number, y: number, z: number)

   /**
   * @description Returns an inverted version of the quat.
   */
   invert(): quat

   /**
   * @description Normalizes the quat.
   */
   normalize(): void

   /**
   * @description Returns a string representation of the quat.
   */
   toString(): string

   /**
   * @description Returns an euler angle representation of the quat, in radians.
   */
   toEulerAngles(): vec3

   /**
   * @description Returns the rotation angle of the quat.
   */
   getAngle(): number

   /**
   * @description Returns the rotation axis of the quat.
   */
   getAxis(): vec3

   /**
   * @description Returns the dot product of the two quats.
   */
   dot(quat: quat): number

   /**
   * @description Returns the product of this quat and `b`.
   */
   multiply(b: quat): quat

   /**
   * @description Returns whether this quat and `b` are equal.
   */
   equal(b: quat): boolean

   /**
   * @deprecated
   
   * @description Returns an euler angle representation of the quat, in radians.
   */
   toEuler(): vec3

   /**
   * @description x component of the quat.
   */
   x: number

   /**
   * @description y component of the quat.
   */
   y: number

   /**
   * @description z component of the quat.
   */
   z: number

   /**
   * @description w component of the quat.
   */
   w: number

}
declare namespace quat {
   /**
   * @description Returns the angle between `a` and `b`.
   */
   export function angleBetween(a: quat, b: quat): number

   /**
   * @description Returns a new quat with angle `angle` and axis `axis`.
   */
   export function angleAxis(angle: number, axis: vec3): quat

   /**
   * @description Returns a new quat using the euler angles `x`, `y`, `z` (in radians).
   */
   export function fromEulerAngles(x: number, y: number, z: number): quat

   /**
   * @description Returns a new quat using the euler angle `eulerVec` (in radians).
   */
   export function fromEulerVec(eulerVec: vec3): quat

   /**
   * @description Returns a rotation quat between direction vectors `from` and `to`.
   */
   export function rotationFromTo(from: vec3, to: vec3): quat

   /**
   * @description Returns a new quat with a forward vector `forward` and up vector `up`.
   */
   export function lookAt(forward: vec3, up: vec3): quat

   /**
   * @description Returns a new quat linearly interpolated between `a` and `b`.
   */
   export function lerp(a: quat, b: quat, t: number): quat

   /**
   * @description Returns a new quat spherically linearly interpolated between `a` and `b`.
   */
   export function slerp(a: quat, b: quat, t: number): quat

   /**
   * @description Returns the identity quaternion.
   */
   export function quatIdentity(): quat

   /**
   * @deprecated
   
   * @description Returns a new quat using the euler angles `x`, `y`, `z` (in radians).
   */
   export function quatFromEuler(x: number, y: number, z: number): quat


}
/**
* @description The base class for animation tracks using quaternion values.
*/
interface QuaternionAnimationTrack extends AnimationTrack {
}

/**
* @description Represents an animation track using quaternion value keyframes.
*/
interface QuaternionAnimationTrackKeyFramed extends QuaternionAnimationTrack {
   /**
   * @description Removes all keys.
   */
   removeAllKeys(): void

   /**
   * @description Removes key at index `index`.
   */
   removeKeyAt(index: number): void

   /**
   * @description Adds a key with value `value` at time `time`.
   */
   addKey(time: number, value: quat): void

}

/**
* @description Represents a rotation animation track using euler angles.
*/
interface QuaternionAnimationTrackXYZEuler extends QuaternionAnimationTrack {
   /**
   * @description Returns child track at index `index`.
   */
   getChildTrackByIndex(index: number): AnimationTrack

   /**
   * @description Sets child track at index `index` to track `track`.
   */
   setChildTrackByIndex(index: number, track: AnimationTrack): void

}

interface Reconstruction extends Component {
   getDepthmapTexture(): Texture

   getDepthmapTextureByIndex(index: number): Texture

   getImageTextureByIndex(index: number): Texture

   getDepthmapMesh(): RenderMesh

   getDepthmapFocalLength(): vec2

   getDepthmapCount(): number

   getDepthmapPositionByIndex(index: number): vec3

   getDepthmapRotationByIndex(index: number): quat

   getDepthmapMinDepth(): number

   getDepthmapMaxDepth(): number

   isReconstructionAvailable(): boolean

   isROAMReconstructionSupported(): boolean

   startReconstruction(): void

   endReconstruction(): void

   useROAM: boolean

   meshTopology: MeshTopology

   threshold: number

   subdivisionDepth: number

   multiDepthmap: boolean

   viewLevel: number

   depthmapLevel: number

   dataTermStrength: number

   minDepth: number

   maxDepth: number

   imagePriorSigma: number

   imagePriorConstant: number

   doFinalBundle: boolean

}

declare enum RecordingState {
   Video,
   Photo,
   Preview,
   Thumbnail
}

/**
* @description An axis aligned rectangle.
* Used by `anchors` and `offsets` in [ScreenTransform](/api/classes/ScreenTransform) to represent screen boundaries.
*/
interface Rect extends ScriptObject {
   /**
   * @description Returns the size of the rectangle as (width, height).
   */
   getSize(): vec2

   /**
   * @description Returns the rectangle's center position as (x, y).
   */
   getCenter(): vec2

   /**
   * @description Sets the rectangle's size while maintaining its center position.
   */
   setSize(value: vec2): void

   /**
   * @description Sets the rectangle's center position while maintaining its size.
   */
   setCenter(value: vec2): void

   toString(): string

   /**
   * @description The x position of the rectangle's left side.
   */
   left: number

   /**
   * @description The x position of the rectangle's right side.
   */
   right: number

   /**
   * @description The y position of the rectangle's top side.
   */
   top: number

   /**
   * @description The y position of the rectangle's bottom side.
   */
   bottom: number

}

interface RectangleSetter extends Component {
   cropTexture: Texture

}

interface RectCropTextureProvider extends CropTextureProvider {
   cropRect: Rect

   rotation: number

}

declare enum RenderingSpace {
   ObjectSpace,
   WorldSpace,
   ScreenSpace
}

/**
* @description Represents a mesh asset.
* See also: [RenderMeshVisual](/api/classes/RenderMeshVisual).
*/
interface RenderMesh extends Asset {
   /**
   * @deprecated
   */
   getVerticesForAttribute(attributeName: string): number[]

   /**
   * @deprecated
   */
   getIndices(): number[]

   /**
   * @description The RenderObjectProvider for this RenderMesh, which can provide more controls depending on the mesh type.
   * See also: [FaceRenderObjectProvider](/api/classes/FaceRenderObjectProvider)
   */
   control: RenderObjectProvider

   indexType: MeshIndexType

   topology: MeshTopology

   aabbMin: vec3

   aabbMax: vec3

}

/**
* @description Renders a [RenderMesh](/api/classes/RenderMesh) asset in the scene.
* Comparable to the former class "MeshVisual", which was split into the classes:
* [BaseMeshVisual](/api/classes/BaseMeshVisual),
* [MaterialMeshVisual](/api/classes/MaterialMeshVisual),
* and [RenderMeshVisual](/api/classes/RenderMeshVisual).
*/
interface RenderMeshVisual extends MaterialMeshVisual {
   /**
   * @deprecated
   */
   getRenderMesh(): RenderMesh

   /**
   * @deprecated
   */
   setRenderMesh(mesh: RenderMesh): void

   getRenderMeshName(): string

   /**
   * @description Sets the [Skin](/api/classes/Skin) to use for rendering this mesh.
   */
   setSkin(skin: Skin): void

   /**
   * @deprecated
   */
   setBlendShape(blendShape: BlendShapes): void

   /**
   * @description The [RenderMesh](/api/classes/RenderMesh) asset to render.
   */
   mesh: RenderMesh

   /**
   * @description The [BlendShapes](/api/classes/BlendShapes) component used for rendering this mesh.
   */
   blendShape: BlendShapes

   renderingSpace: RenderingSpace

}

/**
* @description Provider for RenderMesh data.
*/
interface RenderObjectProvider extends Provider {
}

/**
* @description Controls a camera texture resource.
* Can be accessed through [Texture.control](/api/classes/Texture#control-textureprovider) on a Camera texture.
* For more information, see the [Camera and Layers](/guides/general/camera) guide.
*/
interface RenderTargetProvider extends TextureProvider {
   fxaa: boolean

   msaa: boolean

   msaaStrategy: RenderTargetProvider.MSAAStrategy

   depthBufferUsage: RenderTargetProvider.DepthBufferUsage

   textureFormat: Colorspace

   resolution: vec2

   /**
   * @deprecated
   */
   camera: Camera

   useScreenResolution: boolean

   /**
   * @description When `clearColorEnabled` is true, this texture is used to clear this RenderTarget the first time it is drawn to each frame.
   * If this texture is null, `clearColor` will be used instead.
   */
   inputTexture: Texture

   mipmapsEnabled: boolean

   /**
   * @description If true, the color on this RenderTarget will be cleared the first time it is drawn to each frame.
   * `inputTexture` will be used to clear it unless it is null, in which case `clearColor` is used instead.
   */
   clearColorEnabled: boolean

   /**
   * @description If true, the depth buffer will be cleared on this RenderTarget the first time it is drawn to each frame.
   */
   clearDepthEnabled: boolean

   /**
   * @description When `clearColorEnabled` is true and `inputTexture` is null, this color is used to clear this RenderTarget the first time it is drawn to each frame.
   */
   clearColor: vec4

}

declare namespace RenderTargetProvider {
   enum DepthBufferUsage {
      Auto,
      ForceOff,
      ForceOn
   }

}
declare namespace RenderTargetProvider {
   enum MSAAStrategy {
      Default,
      OnlyWhenRequired
   }

}
interface RestrictionComponent extends Component {
}

/**
* @description Visual effect used to add subtle retouching effects to detected faces (soft skin, teeth whitening, etc.).
* To learn more, visit the [Retouch Guide](/guides/face/face-effects/face-retouch).
*/
interface RetouchVisual extends MaterialMeshVisual {
   /**
   * @description The index of the face the effect is being applied to.
   */
   faceIndex: number

   shaderFlags: number

   /**
   * @description The strength of the soft-skin effect.
   */
   softSkinIntensity: number

   /**
   * @description The strength of the eye sharpening effect.
   */
   sharpenEyeIntensity: number

   /**
   * @description The strength of the eye whitening effect.
   */
   eyeWhiteningIntensity: number

   /**
   * @description The strength of the teeth whitening effect.
   */
   teethWhiteningIntensity: number

   /**
   * @deprecated
   
   * @description The blur radius of the soft skin effect.
   */
   softSkinRadius: number

   /**
   * @deprecated
   
   * @description The Texture used to mask the effect.
   */
   maskTexture: Texture

   /**
   * @deprecated
   */
   lookupTexture: Texture

   autoMode: boolean

}

/**
* @description Used with [DeviceTracking.rotationOptions](/api/classes/DeviceTracking) to change settings for Rotation tracking mode.
*/
interface RotationOptions extends ScriptObject {
   /**
   * @description If enabled, rotation will be inverted.
   */
   invertRotation: boolean

}

/**
* @description Applies a constant rotation to the object every frame.
*/
interface Rotator extends Component {
   /**
   * @description Sets the constant rotation amount to `rotation`. This is applied every frame at a rate of one `rotation` per second.
   */
   setRotation(value: quat): void

}

interface SceneConfig extends ScriptObject {
   mipmapGenStrategy: SceneConfig.MipmapGenStrategy

   faceStretchBatchingStrategy: SceneConfig.FaceStretchBatchingStrategy

   faceStretchAlgorithm: SceneConfig.FaceStretchAlgorithm

   renderTargetStrategy: SceneConfig.RenderTargetStrategy

   equalCameraOrderStrategy: SceneConfig.EqualCameraOrderStrategy

}

declare namespace SceneConfig {
   enum EqualCameraOrderStrategy {
      ByCameraOrder,
      ByRenderTargetOrder
   }

}
declare namespace SceneConfig {
   enum FaceStretchAlgorithm {
      OldStretchAlgorithm,
      NewStretchAlgorithm
   }

}
declare namespace SceneConfig {
   enum FaceStretchBatchingStrategy {
      EqualRenderOrders,
      NonEqualRenderOrders,
      UnifyWithLiquify
   }

}
declare namespace SceneConfig {
   enum MipmapGenStrategy {
      Sync,
      AsyncWait,
      AsyncPoll
   }

}
declare namespace SceneConfig {
   enum RenderTargetStrategy {
      CameraInRenderTarget,
      RenderTargetInCamera
   }

}
/**
* @description The base class for scenewide events.  SceneEvents can be created using [ScriptComponent](/api/classes/ScriptComponent)'s [createEvent](/api/classes/ScriptComponent#createeventstring-eventtype-sceneevent) method.
*/
interface SceneEvent extends IEventParameters {
   getTrackingRequirement(): number

   /**
   * @description Binds a callback function to this event.
   */
   bind(evCallback: (arg1: this) => void): void

   getTypeName(): string

   /**
   * @description If true, the event is able to trigger. If false, the event will not trigger.
   */
   enabled: boolean

}

interface SceneIntelligenceSystem extends ScriptObject {
   start(contexts: string[], successCallback: (response: string) => void, failureCallback: (response: string) => void): void

   startWithDefaultContext(successCallback: (response: string) => void, failureCallback: (response: string) => void): void

   stop(): void

   requestTexture(url: string, successCallback: (texture: Texture) => void, failureCallback: (error: string) => void): void

   textureRequestTimeoutSeconds: number

}

/**
* @description An object in the scene hierarchy, containing a [Transform](/api/classes/Transform) and possibly [Components](/api/classes/Component).
* A script can access the SceneObject holding it through the method `script.getSceneObject()`.
*/
interface SceneObject extends SerializableWithUID {
   /**
   * @description Returns the Transform attached to the SceneObject.
   */
   getTransform(): Transform

   /**
   * @description Destroys the SceneObject.
   */
   destroy(): void

   /**
   * @description Returns the number of children the SceneObject has.
   */
   getChildrenCount(): number

   /**
   * @description Returns this SceneObject's child at index `index`.
   */
   getChild(index: number): SceneObject

   /**
   * @description Returns the first attached Component with type matching or deriving from `componentType`.
   */
   getComponent(componentType: string): Component

   /**
   * @description Returns a list of attached components with types matching or deriving from `componentType`.
   */
   getComponents(componentType: string): Component[]

   /**
   * @deprecated
   
   * @description Returns the number of components of type `componentType` attached to the SceneObject.  If `componentType` is an empty string, the total number of components attached is returned.
   */
   getComponentCount(componentType: string): number

   /**
   * @deprecated
   
   * @description Returns the attached component of type `componentType` at index `index`.  If `componentType` is an empty string, all component types are considered.
   */
   getComponentByIndex<K extends keyof ComponentNameMap>(componentType: K, index: number): ComponentNameMap[K]

   /**
   * @deprecated
   
   * @description Returns the first attached component of type `componentType`.  If `componentType` is an empty string, the first component of any type is returned.
   */
   getFirstComponent<K extends keyof ComponentNameMap>(componentType: K): ComponentNameMap[K]

   /**
   * @description Copies `component` and adds it to the SceneObject, then returns it.
   */
   copyComponent(component: Component): Component

   /**
   * @description Adds a new component of type `typeName` to the SceneObject.
   */
   createComponent<K extends keyof ComponentNameMap>(componentType: K): ComponentNameMap[K]

   /**
   * @description Sets the SceneObject's parent to `newParent` in the scene hierarchy.
   */
   setParent(newParent: SceneObject): void

   /**
   * @description Returns the SceneObject's parent in the hierarchy, or null if there isn't one.
   */
   getParent(): SceneObject

   /**
   * @description Returns whether the SceneObject has a parent in the scene hierarchy.
   */
   hasParent(): boolean

   /**
   * @description Unparents the SceneObject in the hierarchy, making it an orphan.
   */
   removeParent(): void

   removeParentPreserveWorldTransform(): void

   setParentPreserveWorldTransform(newParent: SceneObject): void

   /**
   * @description Creates a deep copy of the passed in `sceneObject` (including its hierarchy), and parents it to this SceneObject.
   */
   copyWholeHierarchy(sceneObject: SceneObject): SceneObject

   copyWholeHierarchyAndAssets(sceneObject: SceneObject): SceneObject

   /**
   * @description Creates a shallow copy of the passed in `sceneObject` (not including its hierarchy), and parents it to this SceneObject.
   */
   copySceneObject(sceneObject: SceneObject): SceneObject

   /**
   * @deprecated
   
   * @description Returns the current render layer of the SceneObject.
   */
   getRenderLayer(): number

   /**
   * @deprecated
   
   * @description Sets the render layer of the SceneObject to `id`.
   */
   setRenderLayer(id: number): void

   /**
   * @deprecated
   
   * @description Returns a list of all components attached to the SceneObject.
   */
   getAllComponents(): Component[]

   /**
   * @description Whether the SceneObject, including its components and children, is enabled or disabled.
   */
   enabled: boolean

   /**
   * @description The name of the SceneObject.
   */
   name: string

   /**
   * @description Gets or sets the LayerSet of layers this SceneObject belongs to.
   * This is used to determine which [Cameras](/api/classes/Camera) will render the SceneObject.
   */
   layer: LayerSet

}

/**
* @description Base class for all object-based Event types in Lens Studio (ManipulateStartEvent, TapEvent, etc.).
*/
interface SceneObjectEvent extends SceneEvent {
   /**
   * @description Returns the SceneObject this Event is associated with.
   */
   getSceneObject(): SceneObject

}

interface SceneRecognition extends AbstractData {
   setModelDataPath(binFile: BinAsset): void

   setMinFramesInWindow(minFramesInWindow: number): void

   setNumFramesInWindow(numFramesInWindow: number): void

   setPastWeight(pastWeight: number): void

   setShouldWarpImage(shouldWarp: boolean): void

   sceneRecognitionDataAvailable(): boolean

   getPredictionsCsv(): string

   hasLabel(sceneLabel: string): boolean

   getLabelScore(sceneLabel: string): number

}

/**
* @description Overrides the settings on a local [ScreenTransform](/api/classes/ScreenTransform) to fit a screen region on the device.
* See the [Screen Transform guide](/guides/2d/screen-transform) for more information.
*/
interface ScreenRegionComponent extends Component {
   getRect(): vec4

   /**
   * @description The region of the screen the local [ScreenTransform](/api/classes/ScreenTransform) will be fit to.
   */
   region: ScreenRegionType

   resizeWithKeyboard: boolean

}

/**
* @description Types of screen regions that can be used with [ScreenRegionComponent](/api/classes/ScreenRegionComponent).
*/
declare enum ScreenRegionType {
   /**
   * @description The entire screen area of the device.
   */
   FullFrame,
   /**
   * @description The screen area shown to the user when recording. On some devices, this region is a subset of FullFrame region.
   */
   Capture,
   /**
   * @description The screen area shown to the user when previewing a Snap. On some devices, this region is a subset of Capture region.
   */
   Preview,
   /**
   * @description A screen area that will be visible on all devices and won't overlap Snapchat UI. Safe area to place any UI elements.
   */
   SafeRender,
   /**
   * @description The screen area where the round "Snap" button is drawn.
   */
   RoundButton
}

interface ScreenTextureProvider extends TextureProvider {
   forceResolve: boolean

}

/**
* @description Used for positioning objects in 2d screen space. It overrides the regular [Transform](/api/classes/Transform) component on the SceneObject it's attached to.

* See the [Screen Transform guide](/guides/2d/screen-transform) for more information.
*/
interface ScreenTransform extends Component {
   /**
   * @description Returns true if this ScreenTransform is in a valid screen hierarchy, which is required for anchoring to work.
   * To be in a valid screen hierarchy there must be a [Camera](/api/classes/Camera) component upward in the parent hierarchy, and every
   * object between the Camera and this one must also have a ScreenTransform.
   */
   isInScreenHierarchy(): boolean

   /**
   * @description Converts from a world position to a normalized (-1 to 1) position within the parent object's bounds.
   * This value is useful because it can be used directly for this ScreenTransform's anchor positioning.
   */
   worldPointToParentPoint(worldPoint: vec3): vec2

   /**
   * @description Converts from a world position to a normalized (-1 to 1) position within this ScreenTransform's bounds.
   */
   worldPointToLocalPoint(worldPoint: vec3): vec2

   /**
   * @description Converts from a screen position to a normalized (-1 to 1) position within the parent object's bounds.
   * This value is useful because it can be used directly for this ScreenTransform's anchor positioning.
   */
   screenPointToParentPoint(screenPoint: vec2): vec2

   /**
   * @description Converts from a screen position to a normalized (-1 to 1) position within this ScreenTransform's bounds.
   */
   screenPointToLocalPoint(screenPoint: vec2): vec2

   /**
   * @description Converts from a normalized (-1 to 1) position within this ScreenTransform's bounds to a screen position.
   */
   localPointToScreenPoint(relativeLocalPoint: vec2): vec2

   /**
   * @description Converts from a normalized (-1 to 1) position within this ScreenTransform's bounds to a world position.
   */
   localPointToWorldPoint(relativeLocalPoint: vec2): vec3

   /**
   * @description Returns true if the screen position is within the boundaries of this ScreenTransform.
   * Useful for checking if a touch event overlaps with this object.
   */
   containsScreenPoint(screenPoint: vec2): boolean

   /**
   * @description Returns true if the world position is within the boundaries of this ScreenTransform.
   * The `z` value of the world position is ignored.
   */
   containsWorldPoint(worldPoint: vec3): boolean

   /**
   * @description The anchor rect positioning this ScreenTransform proportional to its parent's bounds.
   * For each field, a value of `0` equals the parent's center point, and value of `-1` or `1` (depending on the side) equals the parent's full boundary.
   
   * For example, a `top` value of `1.0` means this ScreenTransform's top edge will be exactly at the top edge of its parent.
   
   * A `bottom` value of `-0.5` means this ScreenTransform's bottom edge will be halfway between its parent's bottom edge and center.
   
   * A `right` value of `0` means this ScreenTransform's right edge will be exactly at its parent's center.
   
   * A `left` value of `-2` means this ScreenTransform's left edge will be twice as far from its parent's center as its parent's left edge is.
   */
   anchors: Rect

   /**
   * @description This rect is applied after `anchors` to determine the final boundaries of the ScreenTransform.
   * It adds an offset in world units (based on the parent [Camera's](/api/classes/Camera) `size` property) to each edge of the ScreenTransform's boundaries.
   
   * For example, a value of `0` for any side will have no effect on boundaries.
   
   *  A value of `1.0` for any side will offset that edge by `1.0` world unit.
   */
   offsets: Rect

   /**
   * @description Normalized (x, y) position of the center point used in rotation. (-1, -1) being bottom left, (0, 0) being center, and (1, 1) being top right of the image.
   */
   pivot: vec2

   /**
   * @description Basic local scaling applied to the SceneObject.
   */
   scale: vec3

   /**
   * @description Basic local position in world units relative to the parent's center. Useful for animating screen elements with a simple offset.
   */
   position: vec3

   /**
   * @description Basic local rotation applied to the SceneObject.
   */
   rotation: quat

   /**
   * @deprecated
   */
   anchor: vec4

   /**
   * @deprecated
   */
   rectAnchor: vec4

   /**
   * @deprecated
   */
   rect: vec4

   enableDebugRendering: boolean

}

/**
* @description Binds scripts to Events and executes them when triggered. Any script can access the ScriptComponent executing them through the variable `script`.
* See also: [Scripting Overview](/guides/scripting/scripting-overview#script-components), [Script Events Guide](/guides/scripting/script-events).
*/
interface ScriptComponent extends Component {
   /**
   * @description Adds a new SceneEvent, triggered by `eventType` events, to the ScriptComponent.
   */
   createEvent<K extends keyof EventNameMap>(eventType: K): EventNameMap[K]

   /**
   * @description Removes a previously added SceneEvent from the ScriptComponent.
   */
   removeEvent(event: SceneEvent): void

   getReferencedEvents(): SceneEvent[]

   /**
   * @description Generic object accessible by other instances of ScriptComponent. Use this object to store references to properties and methods that need to be accessible from other ScriptComponents.
   */
   api: Object

}

/**
* @description Base class for objects representing Script data.
*/
interface ScriptObject {
   toString(): string

   /**
   * @description Returns the name of this object's type.
   */
   getTypeName(): string

   isOfType(type: string): boolean

}

/**
* @description Represents the Lens scene. Accessible through `global.scene`.
*/
interface ScriptScene extends ScriptObject {
   /**
   * @description Adds a new [SceneObject](/api/classes/SceneObject) named `name` to the scene.
   */
   createSceneObject(name: string): SceneObject

   createResourceProvider(typeName: string): Provider

   /**
   * @description Returns whether or not the scene is currently being recorded.
   */
   isRecording(): boolean

   getRecordingState(): RecordingState

   isTranscodingToVideo(): boolean

   runInternalFrames(frames: number): void

   getLensEntryPoint(): LensEntryPoint

   /**
   * @description Returns a string describing the currently active device camera.
   
   * Returns "back" if the rear-facing (aka World) camera is active.
   
   * Returns "front" if the front-facing (aka Selfie) camera is active.
   
   * Otherwise, the camera is not initialized.
   */
   getCameraType(): string

   /**
   * @description Returns the number of [SceneObjects](/api/classes/SceneObject) in the current scene.
   */
   getRootObjectsCount(): number

   /**
   * @description Returns the root [SceneObject](/api/classes/SceneObject) at index `index` in the current scene.
   */
   getRootObject(index: number): SceneObject

   setDebugMode(mode: boolean): void

   captureTarget: Texture

   liveTarget: Texture

   /**
   * @deprecated
   */
   outputTexture: Texture

   /**
   * @deprecated
   */
   previewTexture: Texture

}

interface Segmentation extends AbstractData {
   isSegmentationSupported(): boolean

   clear(): void

   registerSystem(systemName: string, configFolder: BinAsset): SegmentationMask

   getMaskProvider(systemName: string): SegmentationMask

   unregisterSystem(systemName: string): void

}

interface SegmentationMask extends ScriptObject {
   getResourceName(maskName: string): string

   registerMask(maskName: string): void

   unregisterMask(maskName: string): void

   isSystemAvailable(): boolean

   setSoftMaskEnabled(maskName: string, value: boolean): void

   setRunSystemAsync(value: boolean): void

   setEnableCatalystSgemmTuning(value: boolean): void

   setGuidedFilterEnabled(maskName: string, value: boolean): void

   setGuidedFilterRadius(maskName: string, value: number): void

   setGuidedFilterScaleRatio(maskName: string, value: number): void

   setGuidedFilterPreThresholdEnabled(maskName: string, value: boolean): void

   setGuidedFilterPreThreshold(maskName: string, value: number): void

   setCropMaskEnabled(maskName: string, value: boolean): void

   setImproveMaskThresholdLow(maskName: string, value: number): void

   setImproveMaskThresholdHigh(maskName: string, value: number): void

   setPruneSmallComponentEnabled(maskName: string, enablePruneSmallComponent: boolean): void

   setSmallComponentRatio(maskName: string, smallComponentRatio: number): void

   setFeatheringEnabled(maskName: string, enableFeathering: boolean): void

   setLargestComponentOnlyEnabled(maskName: string, enableLargestComponentOnly: boolean): void

   setFeatherKSize(maskName: string, featherKSize: number): void

   setFeatherSharpness(maskName: string, featherSharpness: number): void

   setOpticalFlowEnabled(enableOpticalFlow: boolean): void

   setOpticalFlowSkippingEnabled(enableOpticalFlowSkipping: boolean): void

   setFaceLandmarksPortraitInterpolation(enableFaceLandmarksPortraitInterpolation: boolean): void

   setClampBackgroundToEdgeValues(rowValue: number, colValue: number): void

   setMaskThresholdOFEnabled(enableMaskThresholdOF: boolean): void

   setMaskThresholdOF(maskThresholdOF: number): void

   setTemporalSmoothingOFEnabled(enableTemporalSmoothingOF: boolean): void

   setTemporalSmoothingOF(temporalSmoothingOF: number): void

   setPostprocessingOFEnabled(enablePostprocessingOF: boolean): void

   setCutSkyBelowHorizonEnabled(maskName: string, enableCutSkyBelowHorizon: boolean): void

   setSkyHoleFillingEnabled(maskName: string, enableSkyHoleFilling: boolean): void

   isMaskReady(maskName: string): boolean

   setMaskPercentageEnabled(maskName: string, enable: boolean): void

   setBinarizeThreshold(maskName: string, threshold: number): void

   getMaskPercentage(maskName: string): number

   /**
   * @deprecated
   */
   isPointInMask(maskName: string, worldPoint: vec3): boolean

   getCentroid(maskName: string): vec2

   getMaskTexture(maskName: string): Texture

   hasMaskTexture(maskName: string): boolean

}

/**
* @description Segmentation model used for [SegmentationTextureProvider](/api/classes/SegmentationTextureProvider).
*/
interface SegmentationModel extends BinAsset {
}

/**
* @description Controls a segmentation texture resource.
* Can be accessed through [Texture.control](/api/classes/Texture#control-textureprovider) on a Segmentation texture.
* For more information, see the [Segmentation](/guides/general/segmentation) guide.
*/
interface SegmentationTextureProvider extends TextureProvider {
   getSupportedMasks(): string[]

   setRunSystemAsync(value: boolean): void

   setSoftMaskEnabled(value: boolean): void

   setGuidedFilterEnabled(value: boolean): void

   /**
   * @deprecated
   */
   setGuidedFilterRadius(value: number): void

   setGuidedFilterEpsilon(value: number): void

   /**
   * @deprecated
   */
   setGuidedFilterScaleRatio(value: number): void

   /**
   * @deprecated
   */
   setGuidedFilterPreThresholdEnabled(value: number): void

   /**
   * @deprecated
   */
   setGuidedFilterPreThreshold(value: number): void

   setCropMaskEnabled(value: boolean): void

   setImproveMaskThresholdLow(value: number): void

   setImproveMaskThresholdHigh(value: number): void

   setPruneSmallComponentEnabled(value: boolean): void

   setSmallComponentRatio(value: number): void

   setFeatheringEnabled(value: boolean): void

   setLargestComponentOnlyEnabled(value: boolean): void

   setFeatherKSize(value: number): void

   setFeatherSharpness(value: number): void

   setOpticalFlowEnabled(value: boolean): void

   setOpticalFlowSkippingEnabled(value: boolean): void

   setFaceLandmarksPortraitInterpolationEnabled(value: boolean): void

   setClampBackgroundToEdgeValues(rowValue: number, colValue: number): void

   setMaskThresholdOFEnabled(value: boolean): void

   setMaskThresholdOF(value: number): void

   setTemporalSmoothingOFEnabled(value: boolean): void

   setTemporalSmoothingOF(value: number): void

   setPostprocessingOFEnabled(value: boolean): void

   setCutSkyBelowHorizonEnabled(value: boolean): void

   setSkyHoleFillingEnabled(value: boolean): void

   setMaskPercentageEnabled(value: boolean): void

   getMaskPercentage(): number

   setBinarizeThreshold(value: number): void

   isPointInMask(screenPoint: vec3): boolean

   getCentroid(): vec2

   model: SegmentationModel

   selectedMask: string

   useGuidedFilterWhenAvailable: boolean

}

/**
* @description Low-level data class.
*/
interface SerializableWithUID extends ScriptObject {
   /**
   * @description Returns true if this object is the same as `other`. Useful for checking if two references point to the same thing.
   */
   isSame(other: SerializableWithUID): boolean

}

interface SerializationSystem extends ScriptObject {
   setDeserializeCallback(callback: (data: string) => number): void

   dataUpdated(jsonData: string): void

}

declare enum SideTextureMode {
   PerimeterTexture,
   SideWrappedTexture
}

/**
* @deprecated
*/
declare enum SkeletonJointType {
   /**
   * @deprecated
   */
   LeftEye,
   /**
   * @deprecated
   */
   RightEye,
   /**
   * @deprecated
   */
   LeftEar,
   /**
   * @deprecated
   */
   RightEar,
   /**
   * @deprecated
   */
   Nose,
   /**
   * @deprecated
   */
   Neck,
   /**
   * @deprecated
   */
   LeftShoulder,
   /**
   * @deprecated
   */
   RightShoulder,
   /**
   * @deprecated
   */
   LeftElbow,
   /**
   * @deprecated
   */
   RightElbow,
   /**
   * @deprecated
   */
   LeftWrist,
   /**
   * @deprecated
   */
   RightWrist,
   /**
   * @deprecated
   */
   LeftHip,
   /**
   * @deprecated
   */
   RightHip,
   /**
   * @deprecated
   */
   LeftKnee,
   /**
   * @deprecated
   */
   RightKnee,
   /**
   * @deprecated
   */
   LeftAnkle,
   /**
   * @deprecated
   */
   RightAnkle
}

interface SkeletonModel extends BinAsset {
}

/**
* @deprecated
*/
interface SkeletonTracking extends Component {
   /**
   * @deprecated
   */
   getSkeletonCount(): number

   /**
   * @deprecated
   */
   hasJointAtIndex(joint: SkeletonJointType, index: number): boolean

   /**
   * @deprecated
   */
   getJointAtIndex(joint: SkeletonJointType, index: number): vec2

   /**
   * @deprecated
   */
   model: BinAsset

}

/**
* @description Represents skinning data for rigged meshes. See also: [MeshVisual](/api/classes/MeshVisual).
*/
interface Skin extends Component {
}

interface SkinSample extends ScriptObject {
   indices: vec3

   weights: vec3

   size: vec2

}

/**
* @description Triggered when a smile ends on the tracked face.
*/
interface SmileFinishedEvent extends FaceTrackingEvent {
}

/**
* @description Triggered when a smile begins on the tracked face.
*/
interface SmileStartedEvent extends FaceTrackingEvent {
}

interface Snap3D extends Component {
   requestCapture(): void

   getImage(): Texture

   getMaxRotationAngle(): vec2

   getPivotDistance(): number

   getDepthmap(): Texture

   getMesh(): RenderMesh

   getLayers(): Snap3D.Layer[]

   strategy: Snap3D.Strategy

   magicMomentParams: Snap3D.MagicMomentParams

}

declare namespace Snap3D {
   interface Layer extends ScriptObject {
      getImage(): Texture

      getDepthmap(): Texture

      getMesh(): RenderMesh

   }

}
declare namespace Snap3D {
   enum MagicMomentCameraPathMode {
      Linear,
      Circular
   }

}
declare namespace Snap3D {
   interface MagicMomentParams extends ScriptObject {
      focusRegionSize: number

      targetPixelMovement: number

      cameraPathMode: Snap3D.MagicMomentCameraPathMode

   }

}
declare namespace Snap3D {
   enum Strategy {
      Basic,
      Roam,
      Layered,
      MagicMoment
   }

}
interface SnapcodeFoundEvent extends SceneEvent {
}

/**
* @description Provides a marker for tracking Snapcodes.
* For more information, see the [Marker Tracking](/guides/general/tracking/marker-tracking) guide.
*/
interface SnapcodeMarkerProvider extends MarkerProvider {
}

interface SnapImageCaptureEvent extends SceneEvent {
}

interface SnappablesSession extends ScriptObject {
   getGlobalStore(): GeneralDataStore

   getPlayerStore(playerIndex: number): GeneralDataStore

   getCurrentPlayerStore(): GeneralDataStore

   getNumberOfPlayers(): number

   getCurrentPlayerIndex(): number

   saveAsset(asset: Asset, name: string): void

   hasAsset(name: string): boolean

   getAsset(name: string): Asset

   removeAsset(name: string): void

   isReady(): boolean

   /**
   * @deprecated
   */
   setGlobal(key: string, value: string): void

   /**
   * @deprecated
   */
   setForCurrentPlayer(key: string, value: string): void

   /**
   * @deprecated
   */
   getGlobal(key: string): string

   /**
   * @deprecated
   */
   getForCurrentPlayer(key: string): string

   /**
   * @deprecated
   */
   getForPlayer(playerIndex: number, key: string): string

   /**
   * @deprecated
   */
   getGlobalWithDefault(key: string, defaultValue: string): string

   /**
   * @deprecated
   */
   getForCurrentPlayerWithDefault(key: string, defaultValue: string): string

   /**
   * @deprecated
   */
   getForPlayerWithDefault(playerIndex: number, key: string, defaultValue: string): string

   shouldAttachToSnap: boolean

   shouldWriteAsBytes: boolean

   focusPoint: vec2

   focusPointWidth: number

}

interface SnappablesSessionInitFailedEvent extends SceneEvent {
   timeout: number

}

interface SnappablesSessionReadyEvent extends SceneEvent {
}

interface SnappablesSystem extends ScriptObject {
   getActiveSession(): SnappablesSession

   startNewSession(): SnappablesSession

   finalizeActiveSession(): boolean

}

interface SnapRecordingSystem extends ScriptObject {
   startSnapRecording(): void

   stopSnapRecording(): void

   captureSnapImage(): void

}

interface SnapRecordStartEvent extends SceneEvent {
}

interface SnapRecordStopEvent extends SceneEvent {
}

interface SplineComponent extends Component {
   getPoints(): vec3[]

}

/**
* @description Represents transform data for screen-aligned 2D sprites. Use on SceneObjects with a SpriteVisual Component.
* See also: [SpriteVisual](/api/classes/SpriteVisual).
*/
interface SpriteAligner extends Component {
   /**
   * @description The location of the point this sprite is bound to.
   */
   bindingPoint: vec2

   /**
   * @description The width and height of the SpriteVisual.
   */
   size: vec2

   camera: Camera

}

/**
* @description Represents a renderable 2D visual in Lens Studio.
*/
interface SpriteVisual extends MaterialMeshVisual {
   /**
   * @description Returns the width and height of the mesh the `SpriteVisual` is applied to.
   */
   getMeshSize(): vec2

   /**
   * @description The location of the sprite's pivot point relative to its boundaries.
   * The pivot's `x` value is a relative horizontal position, -1 being the sprite's left border and 1 being the sprite's right border.
   * Similarly, the `y` value is a relative vertical position, -1 being the sprite's bottom border and 1 being the sprite's top border.
   */
   pivot: vec2

   /**
   * @description Whether the sprite is flipped over the Y-axis (sideways).
   */
   flipX: boolean

   /**
   * @description Whether the sprite is flipped over the X-axis (upside-down).
   */
   flipY: boolean

   /**
   * @description Which type of fill the sprite uses.
   
   * Possible values:
   
   * Fit = 0
   * Fill = 1
   * Stretch = 2
   */
   fillMode: number

}

declare enum StrandNeighbourSearchType {
   enumKeyNearestOnCurrent,
   enumKeyNearestOnNext
}

interface StreamPlayerComponent extends AudioComponent {
   setFeatureFlags(featureFlags: number): void

   setDecoderFlags(featureFlags: number): void

   track: AudioTrackAsset

}

/**
* @description Options for stretching a mesh to fit a [ScreenTransform's](/api/classes/ScreenTransform) bounding box.
* Used in [MeshVisual's](/api/classes/MeshVisual) `stretchMode` property, as long as the SceneObject has a [ScreenTransform](/api/classes/ScreenTransform) attached.

* See the [Image guide](/guides/2d/image/) for more information about stretch modes.
*/
declare enum StretchMode {
   /**
   * @description Scale uniformly so that both width and height fit within the bounds.
   */
   Fit,
   /**
   * @description Scale uniformly so that both width and height meet or exceed the bounds.
   */
   Fill,
   /**
   * @description Scale non-uniformly to match the exact width and height of the bounds.
   */
   Stretch,
   /**
   * @description Scale uniformly to match the same height as the bounds.
   */
   FitHeight,
   /**
   * @description Scale uniformly to match the same width as the bounds.
   */
   FitWidth,
   /**
   * @description Same as `Fill`, but when used with the [Image component](/api/classes/Image) any area outside of the bounds is cropped out.
   */
   FillAndCut,
   /**
   * @deprecated
   */
   FillNCut
}

interface Surface extends Component {
   setWorldOriginOffset(offset: vec3): void

   resetTracking(position: vec2): void

   setTrackerMode(trackerType: TrackerMode): void

   registerSceneObjectOfInterest(obj: SceneObject): void

   unregisterSceneObjectOfInterest(obj: SceneObject): void

}

/**
* @description Used with [DeviceTracking.surfaceOptions](/api/classes/DeviceTracking) to change settings for Surface tracking mode.
*/
interface SurfaceOptions extends ScriptObject {
   /**
   * @description If enabled, surface tracking will be improved using native AR tracking.
   */
   enhanceWithNativeAR: boolean

}

/**
* @description If a [DeviceTracking](/api/classes/DeviceTracking) component is present in the scene, this event is triggered when
* the tracking is restarted (typically when the Lens starts, or if the user taps the ground).
*/
interface SurfaceTrackingResetEvent extends SceneEvent {
}

declare enum SystemInterfaceElement {
   SoftNavigationBar
}

/**
* @description This event is triggered when the user taps on the screen.
*/
interface TapEvent extends SceneObjectEvent {
   /**
   * @description Returns the normalized 2D screen position of the user's tap. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
   */
   getTapPosition(): vec2

}

/**
* @description Visual component that renders dynamic text.
* See the [Text guide](/guides/2d/text) for more information.
*/
interface Text extends BaseMeshVisual {
   /**
   * @description Text string to be drawn.
   */
   text: string

   /**
   * @description Font asset used.
   */
   font: Font

   /**
   * @description Font size used.
   */
   size: number

   /**
   * @description Controls how text should be handled when it goes past the vertical boundaries.
   */
   verticalOverflow: VerticalOverflow

   /**
   * @description Controls how text should be handled when it goes past the horizontal boundaries.
   */
   horizontalOverflow: HorizontalOverflow

   /**
   * @description Settings for how the text is drawn, such as fill color or texture.
   */
   textFill: TextFill

   /**
   * @description Settings for how dropshadow is used in text drawing.
   */
   dropshadowSettings: DropshadowSettings

   /**
   * @description Settings for how text outline is used in text drawing.
   */
   outlineSettings: OutlineSettings

   /**
   * @description Settings for drawing a background behind the text.
   */
   backgroundSettings: BackgroundSettings

   /**
   * @description If enabled, the rendered text will always scale to fit the boundaries.
   */
   sizeToFit: boolean

   /**
   * @description Modifies the spacing between letters. Set to 0 by default, which uses the font's normal letter spacing.
   * Negative values will remove space between letters, and positive values will add more space between letters.
   */
   letterSpacing: number

   /**
   * @description If enabled, the text material will use Depth Testing. Useful when Text exists in 3D space.
   */
   depthTest: boolean

   worldSpaceRect: Rect

}

/**
* @description Fill settings used by several text related classes.
* Used in [Text's](/api/classes/Text) `textFill` property, [DropshadowSettings'](/api/classes/DropshadowSettings) `fill` property, and [OutlineSettings'](/api/classes/OutlineSettings) `fill` property.
*/
interface TextFill extends ScriptObject {
   /**
   * @description Controls which drawing method is used. Can switch between `Texture` mode (for drawing using a tiled texture) or `Solid` mode (for drawing a solid color).
   */
   mode: TextFillMode

   /**
   * @description If `mode` is set to `TextFillMode.Solid`, this will be used as the solid color used in drawing.
   */
   color: vec4

   /**
   * @description If `mode` is set to `TextFillMode.Texture`, this will be used as the texture asset used in drawing.
   */
   texture: Texture

}

/**
* @description Used in [TextFill's](/api/classes/TextFill) `mode` property. Controls which drawing method is used for the TextFill.
*/
declare enum TextFillMode {
   /**
   * @description Solid color will be used for drawing.
   */
   Solid,
   /**
   * @description Tiled texture will be used for drawing.
   */
   Texture
}

interface TextInputSystem extends ScriptObject {
   requestKeyboard(options: TextInputSystem.KeyboardOptions): void

   dismissKeyboard(): void

   setSelectedTextRange(range: vec2): void

   setEditingPosition(position: number): void

}

declare namespace TextInputSystem {
   class KeyboardOptions {
      constructor()

      initialText: string

      initialSelectedRange: vec2

      keyboardType: TextInputSystem.KeyboardType

      returnKeyType: TextInputSystem.ReturnKeyType

      onTextChanged: (text: string, range: vec2) => void

      onReturnKeyPressed: () => void

      onKeyboardStateChanged: (keyboardIsOpen: boolean) => void

      onError: (error: number, description: string) => void

   }

}
declare namespace TextInputSystem {
   enum KeyboardType {
      Text,
      Num,
      Phone,
      Url
   }

}
declare namespace TextInputSystem {
   enum ReturnKeyType {
      Done,
      Go,
      Next,
      Return,
      Search,
      Send
   }

}
/**
* @description Controls a text rendering texture. Can be accessed through the main rendering pass on a [Label](/api/classes/Label) component.
* The properties here mirror those on Label.
*/
interface TextProvider extends TextureProvider {
   /**
   * @description The text being rendered.
   */
   text: string

   /**
   * @deprecated
   */
   fontName: string

   /**
   * @description The font used for rendering text.
   */
   fontAsset: Font

   /**
   * @description The font size being used.
   */
   size: number

   /**
   * @description The color for rendering text.
   */
   textColor: vec4

   /**
   * @description If enabled, adds a dropshadow to the text.
   */
   useDropshadow: boolean

   /**
   * @deprecated
   
   * @description The horizontal and vertical offset used for dropshadow.
   */
   dropshadowOffset: vec2

   /**
   * @deprecated
   
   * @description The color used for dropShadow.
   */
   dropshadowColor: vec2

   /**
   * @description The horizontal and vertical offset used for dropshadow.
   */
   shadowOffset: vec2

   /**
   * @description The color used for dropshadow.
   */
   shadowColor: vec4

   /**
   * @description If enabled, renders an outline around the text.
   */
   useOutline: boolean

   /**
   * @description The strength of the outline effect.
   */
   outlineSize: number

   /**
   * @description The color used for the outline effect.
   */
   outlineColor: vec4

   /**
   * @deprecated
   */
   requirePowerOfTwo: boolean

}

/**
* @description Represents a texture file asset.
*/
interface Texture extends Asset {
   /**
   * @description Returns the width of the texture.
   */
   getWidth(): number

   /**
   * @description Returns the height of the texture.
   */
   getHeight(): number

   /**
   * @description Returns a Texture that captures the current state of this Texture Asset.
   */
   copyFrame(): Texture

   getColorspace(): Colorspace

   /**
   * @deprecated
   */
   copyFrameToFile(): Texture

   /**
   * @deprecated
   */
   copyFrameToFileAsync(onSuccess: (texture: Texture) => void, onFailure: () => void): void

   saveFrameToFile(onSuccess: (texture: Texture) => void, onFailure: () => void, compressionQuality: CompressionQuality, includeAlpha: boolean): void

   destroy(): void

   /**
   * @description The TextureProvider for the texture, which may control things like animation depending on the texture type.
   * See also: [AnimatedTextureFileProvider](/api/classes/AnimatedTextureFileProvider).
   */
   control: TextureProvider

}
declare namespace Texture {
   /**
   * @deprecated
   */
   export function createProcedural(width: number, height: number, colorspace: Colorspace): Texture


}
interface TextureFormat {
}
declare namespace TextureFormat {
   let R8G8B8A8_UNORM: Colorspace

   let R16G16B16A16_UINT: Colorspace

   let R32G32B32A32_UINT: Colorspace

   let R16G16B16A16_INT: Colorspace

   let R32G32B32A32_INT: Colorspace

   let R10G10B10A2_UINT: Colorspace

   let R10G10B10A2_UNORM: Colorspace


}
interface TextureMeshBuilder extends ExtrudedMeshBuilder {
}
declare namespace TextureMeshBuilder {
   export function createMeshBuilder(texture: Texture): TextureMeshBuilder


}
/**
* @description The base class for specialized Texture providers. Can be accessed through [Texture.control](/api/classes/Texture#control-textureprovider).
*/
interface TextureProvider extends Provider {
   /**
   * @description Returns the width of the texture in pixels.
   */
   getWidth(): number

   /**
   * @description Returns the height of the texture in pixels.
   */
   getHeight(): number

   /**
   * @description Returns the texture's aspect ratio, which is calculated as width / height.
   */
   getAspect(): number

}

declare enum TextureStretchMode {
   Fit,
   Fill,
   Stretch,
   FitHeight,
   FitWidth
}

/**
* @description Allows the `MeshVisual` provided to this component to handle touches on the screen (blocking Snapchat from receiving the touches), and optionally let certain touch types to pass through (let Snapchat handle the touch).

* Possible `TouchType` values:

* "TouchTypeNone"
* "TouchTypeTouch"
* "TouchTypeTap"
* "TouchTypeDoubleTap"
* "TouchTypeScale"
* "TouchTypePan"
* "TouchTypeSwipe"
*/
interface TouchComponent extends Component {
   /**
   * @description Sets the minimum bounding box size used for detecting touches. Value range is from 0-1, relative to screen width.
   */
   setMinimumTouchSize(minimumSize: number): void

   /**
   * @description Returns the minimum bounding box size used for detecting touches. Value range is from 0-1, relative to screen width.
   */
   getMinimumTouchSize(): number

   /**
   * @description Adds a touch type that this component will ignore.
   */
   addTouchBlockingException(exception: string): void

   /**
   * @description Sets the camera that will be used for touch detection.
   */
   setCamera(cameraValue: Camera): void

   /**
   * @description Adds a `MeshVisual` as a target for touch detection.
   */
   addMeshVisual(meshVisual: BaseMeshVisual): void

   /**
   * @description Removes a `MeshVisual` as a target for touch detection.
   */
   removeMeshVisual(meshVisual: BaseMeshVisual): void

}

/**
* @description This provider is returned by `global.touchSystem` and allows your lens to handle any touches on the screen, and optionally let certain touch types to pass through (let Snapchat handle the touch).

* Possible TouchType exception values:

* "TouchTypeNone"
* "TouchTypeTouch"
* "TouchTypeTap"
* "TouchTypeDoubleTap"
* "TouchTypeScale"
* "TouchTypePan"
* "TouchTypeSwipe"
*/
interface TouchDataProvider extends ScriptObject {
   /**
   * @description Returns a copy of `currentMask` with the `newException` flag set to true.
   */
   composeTouchBlockingExceptionMask(currentMask: number, newException: string): number

   /**
   * @description Allow or stop allowing a certain `TouchType` to pass through your lens. Useful for allowing Snapchat to handle certain `TouchType`, e.g. allowing `TouchTypeDoubleTap` to flip the camera.
   */
   enableTouchBlockingException(exception: string, enable: boolean): void

   /**
   * @description Set your lens to handle touches on the screen, preventing default Snapchat touch behavior from occuring. Useful for enabling full screen touches without any touch components. It is similar to creating a plane the size of the screen in front of the camera.
   */
   touchBlocking: boolean

   /**
   * @description The current touch mask.
   */
   touchBlockingExceptionMask: number

}

/**
* @description Triggered when a touch event ends.
*/
interface TouchEndEvent extends SceneObjectEvent {
   /**
   * @description Returns the normalized 2D screen position of the users touch.
   * The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
   */
   getTouchPosition(): vec2

   getTouchId(): number

}

/**
* @description Triggered when a touch position on the screen is moved.
*/
interface TouchMoveEvent extends SceneObjectEvent {
   /**
   * @description Returns the normalized 2D screen position of the users touch.
   * The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
   */
   getTouchPosition(): vec2

   getTouchId(): number

   updateLimit: TouchMoveEvent.UpdateLimit

}

declare namespace TouchMoveEvent {
   enum UpdateLimit {
      NoLimit,
      OnePointPerFrame,
      TwoPointsPerFrame
   }

}
/**
* @description Triggered when a touch event starts.
*/
interface TouchStartEvent extends SceneObjectEvent {
   /**
   * @description Returns the normalized 2D screen position of the users touch.
   * The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
   */
   getTouchPosition(): vec2

   getTouchId(): number

}

interface TrackedObject2D extends ScriptObject {
   isTracking(): boolean

   getLandmark(landmarkKey: string): vec2

   getRotationVector(rotationVectorKey: string): vec3

   label: string

   boundingBoxSize: vec2

   boundingBoxCenter: vec2

   boundingBoxScale: number

   boundingBoxRotation: quat

   id: number

}

/**
* @deprecated
*/
declare enum TrackerMode {
   /**
   * @deprecated
   */
   Global,
   /**
   * @deprecated
   */
   GlobalOnly,
   /**
   * @deprecated
   */
   Local
}

/**
* @deprecated
*/
declare enum TrackerType {
   /**
   * @deprecated
   */
   Global,
   /**
   * @deprecated
   */
   GlobalOnly,
   /**
   * @deprecated
   */
   Local
}

declare enum TrackingMode {
   /**
   * @description Tracks ground plane
   */
   Ground,
   /**
   * @description Tracks planes perpendicular to ground
   */
   Wall,
   /**
   * @description Tracks everything and gives 6 degrees of freedom pose
   */
   SixDof,
   /**
   * @description Tracks orientation
   */
   ThreeDof,
   /**
   * @description Not tracking anything
   */
   NoTracking
}

/**
* @description Controls the position, rotation, and scale of a [SceneObject](/api/classes/SceneObject).  Every SceneObject automatically has a Transform attached.
*/
interface Transform extends ScriptObject {
   /**
   * @description Returns the Transform's local-to-world transformation matrix.
   */
   getWorldTransform(): mat4

   /**
   * @description Returns the Transform's world-to-local transformation matrix.
   */
   getInvertedWorldTransform(): mat4

   /**
   * @description Returns the Transform's position relative to its parent.
   */
   getLocalPosition(): vec3

   /**
   * @description Returns the Transform's position relative to the world.
   */
   getWorldPosition(): vec3

   /**
   * @description Returns the Transform's rotation relative to its parent.
   */
   getLocalRotation(): quat

   /**
   * @description Returns the Transform's rotation relative to the world.
   */
   getWorldRotation(): quat

   /**
   * @description Returns the Transform's scale relative to its parent.
   */
   getLocalScale(): vec3

   /**
   * @description Returns the Transform's scale relative to the world.
   */
   getWorldScale(): vec3

   /**
   * @deprecated
   
   * @description Sets the Transform's local transformation matrix.
   */
   setLocalTransform(transformMat: mat4): void

   /**
   * @deprecated
   
   * @description Sets the Transform's transformation matrix.
   */
   setWorldTransform(transformMat: mat4): void

   /**
   * @description Sets the Transform's position relative to its parent.
   */
   setLocalPosition(pos: vec3): void

   /**
   * @description Sets the Transform's position relative to the world.
   */
   setWorldPosition(pos: vec3): void

   /**
   * @description Sets the Transform's rotation relative to its parent.
   */
   setLocalRotation(rotation: quat): void

   /**
   * @description Sets the Transform's rotation relative to the world.
   */
   setWorldRotation(rotation: quat): void

   /**
   * @description Sets the Transform's scale relative to its parent.
   */
   setLocalScale(scale: vec3): void

   /**
   * @description Sets the Transform's scale relative to the world.
   * This may produce lossy results when parent objects are rotated, so use `setLocalScale()` instead if possible.
   */
   setWorldScale(scale: vec3): void

   /**
   * @description Returns the SceneObject the Transform is attached to.
   */
   getSceneObject(): SceneObject

   /**
   * @description Returns the Transform's forward directional vector.
   */
   forward: vec3

   /**
   * @description Returns the Transform's back directional vector.
   */
   back: vec3

   /**
   * @description Returns the Transform's up directional vector.
   */
   up: vec3

   /**
   * @description Returns the Transform's down directional vector.
   */
   down: vec3

   /**
   * @description Returns the Transform's left directional vector.
   */
   left: vec3

   /**
   * @description Returns the Transform's right directional vector.
   */
   right: vec3

}

declare enum TransformerRotation {
   None,
   Rotate90,
   Rotate180,
   Rotate270
}

/**
* @description Triggered when the lens turns off.
*/
interface TurnOffEvent extends SceneEvent {
}

/**
* @description Triggered when the lens turns on.
*/
interface TurnOnEvent extends SceneEvent {
}

/**
* @description Triggered every frame.
*/
interface UpdateEvent extends SceneEvent {
   /**
   * @description Returns the time elapsed (in seconds) between the current frame and previous frame.
   */
   getDeltaTime(): number

}

interface UriRequestType {
}
declare namespace UriRequestType {
   let GET: string

   let POST: string

   let PUT: string

   let HEAD: string

   let DELETE: string


}
interface UriSystem extends ScriptObject {
   performJsonRequestWithData(uri: string, method: string, json: string, successCallback: (response: string) => void, failureCallback: (error: number, description: string) => void): void

   performJsonRequest(uri: string, method: string, successCallback: (response: string) => void, failureCallback: (error: number, description: string) => void): void

   publish(uri: string, method: string, json: string, successCallback: (response: string) => void, failureCallback: (error: number, description: string) => void): void

   subscribe(uri: string, method: string, successCallback: (response: string) => void, failureCallback: (error: number, description: string) => void): string

   subscribeWithData(uri: string, method: string, json: string, successCallback: (response: string) => void, failureCallback: (error: number, description: string) => void): string

   unsubscribe(requestId: string): void

}

/**
* @description Provides information about the user such as display name, birthday, and current weather. Accessible through `global.userContextSystem`.

* All callbacks will execute as soon as the requested information is available. In some rare cases, the requested information may be completely unavailable, and the callback will never occur.

* Note that formatted or localized strings may appear differently to users depending on their region.
*/
interface UserContextSystem extends ScriptObject {
   /**
   * @description Provides the user's display name.
   */
   requestDisplayName(callback: (data: string) => void): void

   /**
   * @description Provides the user's birth date as a Date object.
   */
   requestBirthdate(callback: (data: Date) => void): void

   /**
   * @description Provides the user's birth date as localized string.
   */
   requestBirthdateFormatted(callback: (formattedData: string) => void): void

   /**
   * @description Provides the user's current altitude in meters.
   */
   requestAltitudeInMeters(callback: (data: number) => void): void

   /**
   * @description Provides the user's current altitude as a localized string.
   */
   requestAltitudeFormatted(callback: (formattedData: string) => void): void

   /**
   * @description Provides the user's current temperature in celsius.
   */
   requestTemperatureCelsius(callback: (data: number) => void): void

   /**
   * @description Provides the user's current temperature in fahrenheit.
   */
   requestTemperatureFahrenheit(callback: (data: number) => void): void

   /**
   * @description Provides the user's current temperature as a localized string.
   */
   requestTemperatureFormatted(callback: (formattedData: string) => void): void

   /**
   * @description Provides the user's current weather condition.
   */
   requestWeatherCondition(callback: (data: WeatherCondition) => void): void

   /**
   * @description Provides the user's current weather condition as a localized string.
   */
   requestWeatherLocalized(callback: (formattedData: string) => void): void

   /**
   * @description Provides the name of the city the user is currently located in.
   */
   requestCity(callback: (data: string) => void): void

   requestUserId(callback: (data: string) => void): void

}

interface UserInfoSystem extends ScriptObject {
   getBitmojiLinkStatus(): string

   requestBitmoji(isBitmojiRequired: boolean): void

}

/**
* @description A two dimensional vector.
*/
declare class vec2 {
   /**
   * @description Creates a new instance of a vec2.
   */
   constructor(x: number, y: number)

   /**
   * @description Returns a string representation of the vector.
   */
   toString(): string

   /**
   * @deprecated
   
   * @description Returns the result of this added to `vec`.
   */
   addVec(vec: vec2): vec2

   /**
   * @deprecated
   
   * @description Returns the result of `vec` subtracted from this.
   */
   subVec(vec: vec2): vec2

   /**
   * @deprecated
   
   * @description Returns the result of this multiplied by `vec`.
   */
   mulVec(vec: vec2): vec2

   /**
   * @deprecated
   
   * @description Returns the result of this divided by `vec`.
   */
   divVec(vec: vec2): vec2

   /**
   * @description Returns the vector plus `vec`.
   */
   add(vec: vec2): vec2

   /**
   * @description Returns the vector minus `vec`.
   */
   sub(vec: vec2): vec2

   /**
   * @description Returns the component-wise multiplication product of the vector and `vec`.
   */
   mult(vec: vec2): vec2

   /**
   * @description Returns the component-wise multiplication product of the vector and `vec`.
   */
   scale(vec: vec2): vec2

   /**
   * @description Returns the division of the vector by the vector `vec`.
   */
   div(vec: vec2): vec2

   /**
   * @description Multiplies the components by the number `scale`.
   */
   uniformScale(scale: number): vec2

   /**
   * @description Returns whether this is equal to `vec`.
   */
   equal(vec: vec2): boolean

   /**
   * @description Returns a copy of the vector with its length clamped to `length`.
   */
   clampLength(length: number): vec2

   /**
   * @description Returns a copy of the vector with its length scaled to 1.
   */
   normalize(): vec2

   /**
   * @description Returns the angle between the vector and `vec`.
   */
   angleTo(vec: vec2): number

   /**
   * @description Returns the distance between the vector and the vector `vec`.
   */
   distance(vec: vec2): number

   /**
   * @description Returns the dot product of the vector and `vec`.
   */
   dot(vec: vec2): number

   /**
   * @description Returns a copy of the vector moved towards the point `point` by the amount `magnitude`.
   */
   moveTowards(point: vec2, magnitude: number): vec2

   /**
   * @description Returns a copy of the vector projected onto the vector `vec`.
   */
   project(vec: vec2): vec2

   /**
   * @description Projects the vector onto the plane represented by the normal `normal`.
   */
   projectOnPlane(normal: vec2): vec2

   /**
   * @description Returns a copy of the vector reflected across the plane defined by the normal `vec`.
   */
   reflect(vec: vec2): vec2

   /**
   * @description x component of the vec2.
   */
   x: number

   /**
   * @description y component of the vec2.
   */
   y: number

   /**
   * @description Alternate name for the x component.
   */
   r: number

   /**
   * @description Alternate name for the y component.
   */
   g: number

   /**
   * @description Returns the length of the vector.
   */
   length: number

   /**
   * @description Returns the squared length of the vector.
   */
   lengthSquared: number

}
declare namespace vec2 {
   /**
   * @description Compares the vectors `vecA` and `vecB`. Returns the vector with the larger magnitude.
   */
   export function max(vecA: vec2, vecB: vec2): vec2

   /**
   * @description Compares the vectors `vecA` and `vecB`. Returns the vector with the smaller magnitude.
   */
   export function min(vecA: vec2, vecB: vec2): vec2

   /**
   * @description Linearly interpolates between the two vectors `vecA` and `vecB` by the factor `t`.
   */
   export function lerp(vecA: vec2, vecB: vec2, t: number): vec2

   /**
   * @description Returns the vector (1, 1).
   */
   export function one(): vec2

   /**
   * @description Returns the vector (0, 0).
   */
   export function zero(): vec2

   /**
   * @description Returns the vector (0, 1).
   */
   export function up(): vec2

   /**
   * @description Returns the vector (0, -1).
   */
   export function down(): vec2

   /**
   * @description Returns the vector (-1, 0).
   */
   export function left(): vec2

   /**
   * @description Returns the vector (1, 0).
   */
   export function right(): vec2


}
/**
* @description Represents an animation track using vec2 value keyframes.
*/
interface Vec2AnimationTrack extends AnimationTrack {
}

/**
* @description Represents an animation track using vec2 value keyframes.
*/
interface Vec2AnimationTrackKeyFramed extends Vec2AnimationTrack {
   /**
   * @description Removes all keyframes.
   */
   removeAllKeys(): void

   /**
   * @description Removes the keyframe at `index`.
   */
   removeKeyAt(index: number): void

   /**
   * @description Adds a keyframe value `value` at time `time`.
   */
   addKey(time: number, value: vec2): void

}

/**
* @description A three dimensional vector.
*/
declare class vec3 {
   /**
   * @description Creates a new instance of a vec3.
   */
   constructor(x: number, y: number, z: number)

   /**
   * @description Returns a string representation of the vector.
   */
   toString(): string

   /**
   * @description Returns the cross product of the vector and `vec`
   */
   cross(vec: vec3): vec3

   /**
   * @description Returns a copy of the vector rotated towards the point `point` by `amount`.
   */
   rotateTowards(point: vec3, amount: number): vec3

   /**
   * @deprecated
   
   * @description Returns the result of this added to `vec`.
   */
   addVec(vec: vec3): vec3

   /**
   * @deprecated
   
   * @description Returns the result of `vec` subtracted from this.
   */
   subVec(vec: vec3): vec3

   /**
   * @deprecated
   
   * @description Returns the result of this multiplied by `vec`.
   */
   mulVec(vec: vec3): vec3

   /**
   * @deprecated
   
   * @description Returns the result of this divided by `vec`.
   */
   divVec(vec: vec3): vec3

   /**
   * @description Returns the vector plus `vec`.
   */
   add(vec: vec3): vec3

   /**
   * @description Returns the vector minus `vec`.
   */
   sub(vec: vec3): vec3

   /**
   * @description Returns the component-wise multiplication product of the vector and `vec`.
   */
   mult(vec: vec3): vec3

   /**
   * @description Returns the component-wise multiplication product of the vector and `vec`.
   */
   scale(vec: vec3): vec3

   /**
   * @description Returns the division of the vector by the vector `vec`.
   */
   div(vec: vec3): vec3

   /**
   * @description Multiplies the components by the number `scale`.
   */
   uniformScale(scale: number): vec3

   /**
   * @description Returns whether this is equal to `vec`.
   */
   equal(vec: vec3): boolean

   /**
   * @description Returns a copy of the vector with its length clamped to `length`.
   */
   clampLength(length: number): vec3

   /**
   * @description Returns a copy of the vector with its length scaled to 1.
   */
   normalize(): vec3

   /**
   * @description Returns the angle in radians between the vector and `vec`.
   */
   angleTo(vec: vec3): number

   /**
   * @description Returns the distance between the vector and the vector `vec`.
   */
   distance(vec: vec3): number

   /**
   * @description Returns the dot product of the vector and `vec`.
   */
   dot(vec: vec3): number

   /**
   * @description Returns a copy of the vector moved towards the point `point` by the amount `magnitude`.
   */
   moveTowards(point: vec3, magnitude: number): vec3

   /**
   * @description Returns a copy of the vector projected onto the vector `vec`.
   */
   project(vec: vec3): vec3

   /**
   * @description Projects the vector onto the plane represented by the normal `normal`.
   */
   projectOnPlane(normal: vec3): vec3

   /**
   * @description Returns a copy of the vector reflected across the plane defined by the normal `vec`.
   */
   reflect(vec: vec3): vec3

   /**
   * @description x component of the vec3.
   */
   x: number

   /**
   * @description y component of the vec3.
   */
   y: number

   /**
   * @description z component of the vec3.
   */
   z: number

   /**
   * @description Alternate name for the x component.
   */
   r: number

   /**
   * @description Alternate name for the y component.
   */
   g: number

   /**
   * @description Alternate name for the z component.
   */
   b: number

   /**
   * @description Returns the length of the vector.
   */
   length: number

   /**
   * @description Returns the squared length of the vector.
   */
   lengthSquared: number

}
declare namespace vec3 {
   /**
   * @description Makes the vectors `vecA` and `vecB` normalized and orthogonal to each other.
   */
   export function orthonormalize(vecA: vec3, vecB: vec3): void

   /**
   * @description Compares the vectors `vecA` and `vecB`. Returns the vector with the larger magnitude.
   */
   export function max(vecA: vec3, vecB: vec3): vec3

   /**
   * @description Compares the vectors `vecA` and `vecB`. Returns the vector with the smaller magnitude.
   */
   export function min(vecA: vec3, vecB: vec3): vec3

   /**
   * @description Linearly interpolates between the two vectors `vecA` and `vecB` by the factor `t`.
   */
   export function lerp(vecA: vec3, vecB: vec3, t: number): vec3

   /**
   * @description Spherically interpolates between the two vectors `vecA` and `vecB` by the factor `t`.
   */
   export function slerp(vecA: vec3, vecB: vec3, t: number): vec3

   /**
   * @description Returns the vector (1, 1, 1).
   */
   export function one(): vec3

   /**
   * @description Returns the vector (0, 0, 0).
   */
   export function zero(): vec3

   /**
   * @description Returns the vector (0, 1, 0).
   */
   export function up(): vec3

   /**
   * @description Returns the vector (0, -1, 0).
   */
   export function down(): vec3

   /**
   * @description Returns the vector (-1, 0, 0).
   */
   export function left(): vec3

   /**
   * @description Returns the vector (1, 0, 0).
   */
   export function right(): vec3

   /**
   * @description Returns the vector (0, 0, -1).
   */
   export function back(): vec3

   /**
   * @description Returns the vector (0, 0, 1).
   */
   export function forward(): vec3


}
/**
* @description Represents an animation track using vec3 value keyframes.
*/
interface Vec3AnimationTrack extends AnimationTrack {
}

/**
* @description Represents an animation track using vec3 value keyframes.
*/
interface Vec3AnimationTrackKeyFramed extends Vec3AnimationTrack {
   /**
   * @description Removes all keyframes.
   */
   removeAllKeys(): void

   /**
   * @description Removes the keyframe at `index`.
   */
   removeKeyAt(index: number): void

   /**
   * @description Adds a keyframe value `value` at time `time`.
   */
   addKey(time: number, value: vec3): void

}

/**
* @description Represents an animation track using vec3 animation tracks.
*/
interface Vec3AnimationTrackXYZ extends Vec3AnimationTrack {
   /**
   * @description Returns the child track at index `index`
   */
   getChildTrackByIndex(index: number): AnimationTrack

   /**
   * @description Sets the child track at index `index` to `track`
   */
   setChildTrackByIndex(index: number, track: AnimationTrack): void

}

/**
* @description A four dimensional vector.
*/
declare class vec4 {
   /**
   * @description Creates a new instance of a vec4.
   */
   constructor(x: number, y: number, z: number, w: number)

   /**
   * @description Returns a string representation of the vector.
   */
   toString(): string

   /**
   * @deprecated
   
   * @description Returns the result of this added to `vec`.
   */
   addVec(vec: vec4): vec4

   /**
   * @deprecated
   
   * @description Returns the result of `vec` subtracted from this.
   */
   subVec(vec: vec4): vec4

   /**
   * @deprecated
   
   * @description Returns the result of this multiplied by `vec`.
   */
   mulVec(vec: vec4): vec4

   /**
   * @deprecated
   
   * @description Returns the result of this divided by `vec`.
   */
   divVec(vec: vec4): vec4

   /**
   * @description Returns the vector plus `vec`.
   */
   add(vec: vec4): vec4

   /**
   * @description Returns the vector minus `vec`.
   */
   sub(vec: vec4): vec4

   /**
   * @description Returns the component-wise multiplication product of the vector and `vec`.
   */
   mult(vec: vec4): vec4

   /**
   * @description Returns the component-wise multiplication product of the vector and `vec`.
   */
   scale(vec: vec4): vec4

   /**
   * @description Returns the division of the vector by the vector `vec`.
   */
   div(vec: vec4): vec4

   /**
   * @description Multiplies the components by the number `scale`.
   */
   uniformScale(scale: number): vec4

   /**
   * @description Returns whether this is equal to `vec`.
   */
   equal(vec: vec4): boolean

   /**
   * @description Returns a copy of the vector with its length clamped to `length`.
   */
   clampLength(length: number): vec4

   /**
   * @description Returns a copy of the vector with its length scaled to 1.
   */
   normalize(): vec4

   /**
   * @description Returns the angle between the vector and `vec`.
   */
   angleTo(vec: vec4): number

   /**
   * @description Returns the distance between the vector and the vector `vec`.
   */
   distance(vec: vec4): number

   /**
   * @description Returns the dot product of the vector and `vec`.
   */
   dot(vec: vec4): number

   /**
   * @description Returns a copy of the vector moved towards the point `point` by the amount `magnitude`.
   */
   moveTowards(point: vec4, magnitude: number): vec4

   /**
   * @description Returns a copy of the vector projected onto the vector `vec`.
   */
   project(vec: vec4): vec4

   /**
   * @description Projects the vector onto the plane represented by the normal `normal`.
   */
   projectOnPlane(normal: vec4): vec4

   /**
   * @description Returns a copy of the vector reflected across the plane defined by the normal `vec`.
   */
   reflect(vec: vec4): vec4

   /**
   * @description x component of the vec4.
   */
   x: number

   /**
   * @description y component of the vec4.
   */
   y: number

   /**
   * @description z component of the vec4.
   */
   z: number

   /**
   * @description w component of the vec4.
   */
   w: number

   /**
   * @description Alternate name for the x component.
   */
   r: number

   /**
   * @description Alternate name for the y component.
   */
   g: number

   /**
   * @description Alternate name for the z component.
   */
   b: number

   /**
   * @description Alternate name for the w component.
   */
   a: number

   /**
   * @description Returns the length of the vector.
   */
   length: number

   /**
   * @description Returns the squared length of the vector.
   */
   lengthSquared: number

}
declare namespace vec4 {
   /**
   * @description Compares the vectors `vecA` and `vecB`. Returns the vector with the larger magnitude.
   */
   export function max(vecA: vec4, vecB: vec4): vec4

   /**
   * @description Compares the vectors `vecA` and `vecB`. Returns the vector with the smaller magnitude.
   */
   export function min(vecA: vec4, vecB: vec4): vec4

   /**
   * @description Linearly interpolates between the two vectors `vecA` and `vecB` by the factor `t`.
   */
   export function lerp(vecA: vec4, vecB: vec4, t: number): vec4

   /**
   * @description Returns the vector (1, 1, 1, 1).
   */
   export function one(): vec4

   /**
   * @description Returns the vector (0, 0, 0, 0).
   */
   export function zero(): vec4


}
/**
* @description Represents an animation track using vec4 value keyframes.
*/
interface Vec4AnimationTrack extends AnimationTrack {
}

/**
* @description Represents an animation track using vec4 value keyframes.
*/
interface Vec4AnimationTrackKeyFramed extends Vec4AnimationTrack {
   /**
   * @description Removes all keys.
   */
   removeAllKeys(): void

   /**
   * @description Removes key at index `index`.
   */
   removeKeyAt(index: number): void

   /**
   * @description Adds a key with value `value` at time `time`.
   */
   addKey(time: number, value: vec4): void

}

/**
* @description A vector containing 4 boolean values.
*/
declare class vec4b {
   /**
   * @description Creates a new instance of a vec4b.
   */
   constructor(x: boolean, y: boolean, z: boolean, w: boolean)

   /**
   * @description Returns a string representation of the vector.
   */
   toString(): string

   /**
   * @description x component of the vec4b.
   */
   x: boolean

   /**
   * @description y component of the vec4b.
   */
   y: boolean

   /**
   * @description z component of the vec4b.
   */
   z: boolean

   /**
   * @description w component of the vec4b.
   */
   w: boolean

   /**
   * @description Alternate name for the x component.
   */
   r: boolean

   /**
   * @description Alternate name for the y component.
   */
   g: boolean

   /**
   * @description Alternate name for the z component.
   */
   b: boolean

   /**
   * @description Alternate name for the w component.
   */
   a: boolean

}

/**
* @description Used to help control vertex animations on the SceneObject.
*/
interface VertexCache extends Component {
   /**
   * @description The current time of vertex animations on this SceneObject.
   */
   currentTime: number

   /**
   * @description The weight applied to vertex animations on this SceneObject.
   */
   weight: number

}

/**
* @description Used by the `verticalAlignment` property in [MeshVisual](/api/classes/MeshVisual).
* When a [ScreenTransform](/api/classes/ScreenTransform) is attached to the same SceneObject, this determines how the mesh will be positioned vertically.
*/
declare enum VerticalAlignment {
   /**
   * @description The mesh will be aligned to the bottom side.
   */
   Bottom,
   /**
   * @description The mesh will be centered.
   */
   Center,
   /**
   * @description The mesh will be aligned to the top side.
   */
   Top
}

/**
* @description Options for handling vertical text overflow. Used by [Text component's](/api/classes/Text) `verticalOverflow` property.
*/
declare enum VerticalOverflow {
   /**
   * @description Text will continue to draw past the end of the vertical boundaries.
   */
   Overflow,
   /**
   * @description Text will be clipped at the end of the vertical boundaries.
   */
   Truncate,
   /**
   * @description Text will shrink to fit within the vertical boundaries.
   */
   Shrink
}

interface VideoRecorderComponent extends Component {
   startRecording(): void

   stopRecording(onSuccess: (texture: Texture) => void, onFailure: () => void): void

   cancelRecording(): void

   hasPreviewTexture(): boolean

   getPreviewTexture(onSuccess: (texture: Texture) => void, onFailure: () => void): void

   isRecording(): boolean

   sourceTexture: Texture

   textureScale: number

}

/**
* @description Describes the current status of a [VideoTextureProvider](/api/classes/VideoTextureProvider).
*/
declare enum VideoStatus {
   /**
   * @description The video playback has stopped
   */
   Stopped,
   /**
   * @description The video is being prepared
   */
   Preparing,
   /**
   * @description The video is playing
   */
   Playing,
   /**
   * @description The video playback is paused
   */
   Paused
}

/**
* @description Controls a video texture resource. Can be accessed through [Texture.control](/api/classes/Texture#control-textureprovider).
*/
interface VideoTextureProvider extends TextureProvider {
   /**
   * @description Sets `callback` as the function invoked when the video resource is ready to be played.
   */
   setOnReady(onReadyCallback: () => void): void

   /**
   * @description Sets `callback` as the function invoked when the video resource stops playing.
   */
   setOnFinish(callback: () => void): void

   /**
   * @description Returns the number of times the video has played consecutively.
   */
   getCurrentPlayCount(): number

   /**
   * @deprecated
   */
   isReady(): boolean

   /**
   * @description Plays the video `playCount` times. If `playCount` is less than 0, it loops infinitely.
   */
   play(playCount: number): void

   /**
   * @description Pauses the video playback.
   */
   pause(): void

   /**
   * @description Resumes the video playback.
   */
   resume(): void

   /**
   * @description Stops the video playback.
   */
   stop(): void

   /**
   * @description Returns the status of the video resource.
   */
   getStatus(): VideoStatus

   /**
   * @description The audio volume of the video resource, normalized from 0 to 1.
   */
   volume: number

}

/**
* @description Base class for all visual Components (e.g. MeshVisual).
*/
interface Visual extends Component {
   /**
   * @description Returns the order of this Visual in the render queue.
   */
   getRenderOrder(): number

   /**
   * @description Sets the order of this Visual in the render queue.
   */
   setRenderOrder(value: number): void

   debugRender(): DebugRender

   renderOrder: number

   /**
   * @deprecated
   */
   internalRenderOrder: number

}

/**
* @description Types of weather returned by [UserContextSystem's](/api/classes/UserContextSystem) `requestWeatherCondition()` callback.
*/
declare enum WeatherCondition {
   /**
   * @description Unknown or unsupported weather condition
   */
   Unknown,
   /**
   * @description Lightning
   */
   Lightning,
   /**
   * @description Low Visibility
   */
   LowVisibility,
   /**
   * @description Partly Cloudy
   */
   PartlyCloudy,
   /**
   * @description Clear Night
   */
   ClearNight,
   /**
   * @description Cloudy
   */
   Cloudy,
   /**
   * @description Rainy
   */
   Rainy,
   /**
   * @description Hail
   */
   Hail,
   /**
   * @description Snow
   */
   Snow,
   /**
   * @description Windy
   */
   Windy,
   /**
   * @description Sunny
   */
   Sunny
}

interface WorldOptions extends ScriptObject {
   adjustSpectaclesSixDofWithDepth: boolean

}

/**
* @description Triggered when the world tracking mode has changed.
*/
interface WorldTrackingModeChangedEvent extends SceneEvent {
   getCurrentTrackingMode(): TrackingMode

   getPreviousTrackingMode(): TrackingMode

   /**
   * @deprecated
   */
   getTrackingMode(): string

}

declare var script: ScriptComponent;

/**
* @deprecated

* @description Not for real use. Contains a fake instance of every class. Helpful for checking the API of a class.
*/
declare namespace _palette {
   /**
   * @description The base class for data accessible through [DataComponent](/api/classes/DataComponent).
   */
   let AbstractData: AbstractData

   /**
   * @description Interface for sending Blizzard analytics events. Accessible from [DataComponent](/api/classes/DataComponent).
   */
   let AnalyticsSystem: AnalyticsSystem

   /**
   * @description Controls an animated texture resource. Can be accessed from [Texture.control](/api/classes/Texture#control-textureprovider) on an animated texture.
   * See also: [2D Animation Guide](/guides/2d/2d-animation).
   */
   let AnimatedTextureFileProvider: AnimatedTextureFileProvider

   /**
   * @description Used by [AnimationMixer](/api/classes/AnimationMixer) to animate a single object in the hierarchy.
   * These are automatically added to SceneObjects when importing animated FBX files.
   * See also: [Playing 3D Animation Guide](/guides/scripting/playing-3d-animation), [AnimationMixer](/api/classes/AnimationMixer), [AnimationLayer](/api/classes/AnimationLayer).
   */
   let Animation: Animation

   /**
   * @description Used by [AnimationMixerLayer](/api/classes/AnimationMixerLayer) for setting animation looping behavior.
   */
   let AnimationClip_PostInfinity: AnimationClip.PostInfinity

   /**
   * @description Used by [AnimationMixerLayer](/api/classes/AnimationMixerLayer) for setting animation clip range type.
   */
   let AnimationClip_RangeType: AnimationClip.RangeType

   /**
   * @description Configures an animation layer for a single [SceneObject](/api/classes/SceneObject).
   * Gives access to position, rotation, scale and blend shape animation tracks.
   * See also: [Playing 3D Animation Guide](/guides/scripting/playing-3d-animation), [AnimationMixer](/api/classes/AnimationMixer), [Animation](/api/classes/Animation).
   */
   let AnimationLayer: AnimationLayer

   /**
   * @description Controls playback of animations on the attached [SceneObject](/api/classes/SceneObject) and its child objects.
   * Please refer to the [Playing 3D Animation Guide](/guides/scripting/playing-3d-animation) for setting up and playing animations.
   */
   let AnimationMixer: AnimationMixer

   /**
   * @description Controls animation playback for a single animation layer.
   * See also: [AnimationMixer](/api/classes/AnimationMixer).
   */
   let AnimationMixerLayer: AnimationMixerLayer

   /**
   * @description The base class for animation tracks.
   */
   let AnimationTrack: AnimationTrack

   let AnyData: AnyData

   /**
   * @description Base class for all assets used in the engine.
   */
   let Asset: Asset

   let AssetSystem: AssetSystem

   /**
   * @description Used by [Head.setAttachmentPointType()](/api/classes/Head) to specify the type of attachment used with a Head binding.
   */
   let AttachmentPointType: AttachmentPointType

   let AudioAnalysisEvent: AudioAnalysisEvent

   /**
   * @description Used to play audio in a Lens.
   * You can assign an [AudioTrackAsset](/api/classes/AudioTrackAsset) to play through script or through the AudioComponent's inspector in Lens Studio.
   * See the [Playing Audio](/guides/audio) guide for more information.
   */
   let AudioComponent: AudioComponent

   /**
   * @description Configures an audio effect for [AudioEffectComponent](/api/classes/AudioEffectComponent).
   */
   let AudioEffectAsset: AudioEffectAsset

   /**
   * @description Used to add an audio effect to a Lens.
   * When present in the scene, it will automatically apply the selected audio effect to recordings made with the Lens.
   * See the [Audio Effect](/guides/audio-effect) guide for more information.
   */
   let AudioEffectComponent: AudioEffectComponent

   /**
   * @description Provider for [AudioEffectAsset](/api/classes/AudioEffectAsset).
   */
   let AudioEffectProvider: AudioEffectProvider

   /**
   * @description Represents an audio file asset.
   * See also: [AudioComponent](/api/classes/AudioComponent).
   */
   let AudioTrackAsset: AudioTrackAsset

   let AudioTriggerComponent: AudioTriggerComponent

   /**
   * @description Settings for rendering the background on a [Text](/api/classes/Text) component.
   * Accessible through the [Text](/api/classes/Text) component's `backgroundSettings` property.
   */
   let BackgroundSettings: BackgroundSettings

   /**
   * @description The base class for all mesh rendering components.
   * Comparable to the former class "MeshVisual", which was split into the classes:
   * [BaseMeshVisual](/api/classes/BaseMeshVisual),
   * [MaterialMeshVisual](/api/classes/MaterialMeshVisual),
   * and [RenderMeshVisual](/api/classes/RenderMeshVisual).
   */
   let BaseMeshVisual: BaseMeshVisual

   let BaseMultiplayerSessionOptions: BaseMultiplayerSessionOptions

   let BaseNeuralFaceEffectTextureProvider: BaseNeuralFaceEffectTextureProvider

   let BasePlaceholder: BasePlaceholder

   /**
   * @description Provides basic information about a transformation.
   * See also: [DeviceTracking](/api/classes/DeviceTracking)
   */
   let BasicTransform: BasicTransform

   let BillboardVisual: BillboardVisual

   /**
   * @description File based asset.
   */
   let BinAsset: BinAsset

   let BinFileProvider: BinFileProvider

   let BitmapGlyph: BitmapGlyph

   let Bitmoji3D: Bitmoji3D

   let BitmojiAliasIds: BitmojiAliasIds

   let BitmojiSystem: BitmojiSystem

   let BitmojiTextureProvider: BitmojiTextureProvider

   /**
   * @description Controls blend shapes connected to imported animation content.
   */
   let BlendShapes: BlendShapes

   let BoundingBox: BoundingBox

   /**
   * @description Triggered when eyebrows are lowered on the tracked face.
   */
   let BrowsLoweredEvent: BrowsLoweredEvent

   /**
   * @description Triggered when eyebrows are raised on the tracked face.
   */
   let BrowsRaisedEvent: BrowsRaisedEvent

   /**
   * @description Triggered when eyebrows are returned to normal on the tracked face.
   */
   let BrowsReturnedToNormalEvent: BrowsReturnedToNormalEvent

   /**
   * @description Renders the scene to a Render Target texture.
   * A Camera will only render a SceneObject if the SceneObject's render layer is enabled on the Camera.
   * For more information, see the [Camera and Layers](/guides/general/camera) guide.
   */
   let Camera: Camera

   let Camera_BaseRenderTarget: Camera.BaseRenderTarget

   let Camera_CameraMaskChannel: Camera.CameraMaskChannel

   let Camera_ColorRenderTarget: Camera.ColorRenderTarget

   /**
   * @description Used in [Camera's](/api/classes/Camera) `depthBufferMode` property.
   * Each mode is suited for handling objects at a certain distance range.
   * For more information on depth modes, see the [Camera and Layers](/guides/general/camera) guide.
   */
   let Camera_DepthBufferMode: Camera.DepthBufferMode

   /**
   * @description Used in [Camera's](/api/classes/Camera) `devicePropertyUsage` property.
   * Specifies which camera properties should be overridden by device properties.
   */
   let Camera_DeviceProperty: Camera.DeviceProperty

   /**
   * @description Returned from [Camera's](/api/classes/Camera) `type` property.
   */
   let Camera_Type: Camera.Type

   /**
   * @description Triggered when the device's back facing camera becomes active.
   */
   let CameraBackEvent: CameraBackEvent

   /**
   * @description Triggered when the device's front facing camera becomes active.
   */
   let CameraFrontEvent: CameraFrontEvent

   /**
   * @description Clears depth in the drawing order.
   */
   let ClearDepth: ClearDepth

   let ClientInterfaceAction: ClientInterfaceAction

   let ClientInterfaceActionTakenEvent: ClientInterfaceActionTakenEvent

   let ClientInterfaceComponent: ClientInterfaceComponent

   let ClientInterfaceElement: ClientInterfaceElement

   let ClientInterfacePlayButtonTriggerEvent: ClientInterfacePlayButtonTriggerEvent

   let ClientInterfaceSystem: ClientInterfaceSystem

   let Colorspace: Colorspace

   let CompassAccuracy: CompassAccuracy

   /**
   * @description The base class for all components.  Components are attached to [SceneObjects](/api/classes/SceneObject).
   */
   let Component: Component

   let ComponentDisabledEvent: ComponentDisabledEvent

   let ComponentEnabledEvent: ComponentEnabledEvent

   let ComponentEvent: ComponentEvent

   let CompressionQuality: CompressionQuality

   let CoreVersionChecks: CoreVersionChecks

   let CropTextureProvider: CropTextureProvider

   /**
   * @description Used with [Pass's](/api/classes/Pass) `cullMode` property.
   * Determines which faces of a surface are culled (not rendered).
   */
   let CullMode: CullMode

   /**
   * @deprecated
   
   * @description Provides access to external data. Do not add multiple data components to the same scene, since they will interfere with each other. Instead, always have a single data component.
   */
   let DataComponent: DataComponent

   let DataStoreComponent: DataStoreComponent

   let DataStoreWithScene: DataStoreWithScene

   let DataStoreWrapper: DataStoreWrapper

   /**
   * @deprecated
   */
   let DateTime: DateTime

   let DebugRender: DebugRender

   /**
   * @description An event that gets triggered after a delay.
   */
   let DelayedCallbackEvent: DelayedCallbackEvent

   let DepthExtractionModel: DepthExtractionModel

   let DepthMeshBuilder: DepthMeshBuilder

   let DepthMeshBuilder_MeshType: DepthMeshBuilder.MeshType

   let DepthProcessingOptions: DepthProcessingOptions

   let DepthProcessingOptions_HoleFillingStrategy: DepthProcessingOptions.HoleFillingStrategy

   /**
   * @description Writes video feed depth information to the depth buffer, which automatically sets up depth occlusion for 3D visuals.
   * Only works in some cases, such as in Lenses for Spectacles 3.
   * See the [Lenses for Spectacles guide](/guides/spectacles/lenses-for-spectacles/) for more information.
   */
   let DepthSetter: DepthSetter

   /**
   * @description Provides depth information of the video feed that the Lens is being applied to when available, such as in Lenses for Spectacles 3.
   * Can be accessed from `mainPass.baseTex.control` of a Spectacles Depth material.
   
   * See the [Lenses for Spectacles guide](/guides/spectacles/lenses-for-spectacles/) for more information.
   */
   let DepthTextureProvider: DepthTextureProvider

   let DetectedHandObject: DetectedHandObject

   let DetectedObject: DetectedObject

   let DeviceInfoSystem: DeviceInfoSystem

   /**
   * @description Used to track a landmarker in the camera. Moves the SceneObject's transform to match the detected landmarker scene.
   * See the [Landmarker guide](/templates/landmarker) for more information.
   */
   let DeviceLocationTrackingComponent: DeviceLocationTrackingComponent

   let DeviceMotion: DeviceMotion

   /**
   * @description Moves or rotates the SceneObject to match device orientation.
   
   * If using "Surface" tracking mode, adding this to a SceneObject enables surface tracking for the scene, and moves the
   * object to a position and rotation that matches the physical camera's pose in the world. Surface tracking can also be enhanced
   * with native AR by enabling the "Use Native AR" option in the Inspector panel, or through script by setting the
   * component's [`surfaceOptions.enhanceWithNativeAR`](/api/classes/SurfaceOptions) property.
   
   * If using "Rotation" tracking mode, adding this to a SceneObject will apply the device's real world rotation to the object.
   
   * If using "World" tracking mode, adding this to a SceneObject enables native AR tracking for the scene, and moves the
   * object to a position and rotation that matches the physical camera's pose in the world.
   
   * See the [Tracking Modes](/guides/general/tracking/tracking-modes) guide for more information.
   
   **Note:** This component was named "WorldTracking" in previous versions of Lens Studio.
   */
   let DeviceTracking: DeviceTracking

   /**
   * @description Tracking modes used by the [DeviceTracking](/api/classes/DeviceTracking) component to specify what type of tracking to use.
   */
   let DeviceTrackingMode: DeviceTrackingMode

   let DirectMultiplayerSessionOptions: DirectMultiplayerSessionOptions

   let DrawingSystem2D: DrawingSystem2D

   /**
   * @description Used in [Text's](/api/classes/Text) `dropShadowSettings` property.
   * Configures how dropshadow will appear on a Text component.
   */
   let DropshadowSettings: DropshadowSettings

   let DynamicMeshRenderObjectProvider: DynamicMeshRenderObjectProvider

   let EmojiTextureProvider: EmojiTextureProvider

   let EmotionChangedEvent: EmotionChangedEvent

   let EmotionType: EmotionType

   let ExperimentSystem: ExperimentSystem

   let ExtendedTrackingMode: ExtendedTrackingMode

   let ExternalEvent: ExternalEvent

   let ExtrudedMeshBuilder: ExtrudedMeshBuilder

   /**
   * @deprecated
   */
   let Eye: Eye

   /**
   * @description Applies an eye color effect to a face.
   */
   let EyeColorVisual: EyeColorVisual

   let EyeIndex: EyeIndex

   let FaceCount: FaceCount

   let FaceCropTextureProvider: FaceCropTextureProvider

   /**
   * @description Triggered when a new face is detected and starts being tracked.
   */
   let FaceFoundEvent: FaceFoundEvent

   /**
   * @description Controls the face image picker texture resource.
   * Can be accessed through [Texture.control](/api/classes/Texture#control-textureprovider) on a Face Image Picker texture.
   * For more information, see the [Face Image Picker Texture guide](/guides/face/face-effects/face-image-picker-texture).
   */
   let FaceImagePickerTextureProvider: FaceImagePickerTextureProvider

   /**
   * @description Used with [FaceInsetVisual.faceRegion](/api/classes/FaceInsetVisual) for setting the face region to draw.
   */
   let FaceInsetRegion: FaceInsetRegion

   /**
   * @description Draws a section of a tracked face.
   */
   let FaceInsetVisual: FaceInsetVisual

   let FacelessTextureProvider: FacelessTextureProvider

   /**
   * @description Triggered when a face can no longer be tracked.  For example, if a face gets blocked from the camera's view, or gets too far away.
   */
   let FaceLostEvent: FaceLostEvent

   /**
   * @description Applies a face mask effect. See the [Face Mask Guide](/guides/face/face-effects/face-mask) for more information.
   */
   let FaceMaskVisual: FaceMaskVisual

   let FaceMeshSource: FaceMeshSource

   /**
   * @description Mesh provider for a Face Mesh. Accessible through the `control` property on a Face Mesh `RenderMesh`.
   */
   let FaceRenderObjectProvider: FaceRenderObjectProvider

   /**
   * @description Applies a face stretch effect.
   * Face stretch features can be added to a FaceStretchVisual through the Inspector panel in Lens Studio.
   * See the [Face Stretch Guide](/guides/face/face-effects/face-stretch) for more information.
   */
   let FaceStretchVisual: FaceStretchVisual

   /**
   * @description TextureProvider for face textures.
   * See the [Face Texture Guide](/guides/face/face-effects/face-texture) for more information.
   * Can be accessed using [Texture.control](/api/classes/Texture#control-textureprovider) on a face texture asset.
   */
   let FaceTextureProvider: FaceTextureProvider

   /**
   * @description This is the base class for all face tracking events. This event won't actually get triggered itself, so use one of the child classes instead.
   */
   let FaceTrackingEvent: FaceTrackingEvent

   let FaceTrackingMode: FaceTrackingMode

   let FacialExpressionModel: FacialExpressionModel

   /**
   * @description Provides an image marker based on an imported image file.
   * For more information, see the [Marker Tracking](/guides/general/tracking/marker-tracking) guide.
   */
   let FileBasedMarkerProvider: FileBasedMarkerProvider

   /**
   * @description A [TextureProvider](/api/classes/TextureProvider) for textures originating from files.
   */
   let FileTextureProvider: FileTextureProvider

   /**
   * @description The base class for animation tracks using float values.
   */
   let FloatAnimationTrack: FloatAnimationTrack

   /**
   * @description Represents an animation track using float value keyframes.
   */
   let FloatAnimationTrackKeyFramed: FloatAnimationTrackKeyFramed

   /**
   * @description Represents an animation track using vec3 value keyframes for a bezier curve.
   */
   let FloatBezierAnimationTrackKeyFramed: FloatBezierAnimationTrackKeyFramed

   /**
   * @description A font asset used for rendering text.
   * Used by [Text](/api/classes/Text).
   * For more information, see the [Text guide](/guides/2d/text).
   */
   let Font: Font

   let FreezeFrameSystem: FreezeFrameSystem

   let Friend: Friend

   let FriendSystem: FriendSystem

   /**
   * @description Class for storing and retrieving data based on keys.
   * Used by [PersistentStorageSystem](/api/classes/PersistentStorageSystem).
   * For more information, see the [Persistent Storage guide](/guides/scripting/persistent-storage).
   */
   let GeneralDataStore: GeneralDataStore

   let GeoData: GeoData

   let GltfAsset: GltfAsset

   let Glyph: Glyph

   let GlyphLoader: GlyphLoader

   let GlyphMeshBuilder: GlyphMeshBuilder

   let GlyphOutlineEdge: GlyphOutlineEdge

   let GlyphOutlineShape: GlyphOutlineShape

   let GlyphOutlineShapes: GlyphOutlineShapes

   let GlyphPosition: GlyphPosition

   let GlyphsAndPositions: GlyphsAndPositions

   let GridMeshBuilder: GridMeshBuilder

   /**
   * @description This class has been **Deprecated**. Please instead use the [DeviceTracking](/api/classes/DeviceTracking) component with Tracking Mode set to Rotation.
   * See the [Tracking Modes](/guides/general/tracking/tracking-modes) guide for more information.
   
   * Applies the device's gyroscope rotation to the SceneObject it is attached to.
   */
   let Gyroscope: Gyroscope

   let HairSimulationColliderAsset: HairSimulationColliderAsset

   let HairSimulationColliderComponent: HairSimulationColliderComponent

   let HairVisual: HairVisual

   let HapticFeedbackSystem: HapticFeedbackSystem

   let HapticFeedbackType: HapticFeedbackType

   /**
   * @description Binds the SceneObject to a tracked face.
   * See the [Head Attached 3D Objects Guide](/guides/face/face-effects/head-attached-3d-objects) for more information.
   */
   let Head: Head

   /**
   * @description Used to show and hide hints to the user.
   * For more information and useful helper scripts, see the [Scripting Hints Guide](/guides/scripting/scripting-hints).
   
   * <table border="1" cellspacing=0 cellpadding=0><thead><tr><th>Hint ID</th><th>Hint Message</th></tr></thead><tbody><tr><td>&#8220;lens_hint_blow_a_kiss&#8221;</td><td>&#8220;Blow A Kiss&#8221;</td></tr><tr><td>&#8220;lens_hint_come_closer&#8221;</td><td>&#8220;Come Closer&#8221;</td></tr><tr><td>&#8220;lens_hint_do_not_smile&#8221;</td><td>&#8220;Do Not Smile&#8221;</td></tr><tr><td>&#8220;lens_hint_do_not_try_with_a_friend&#8221;</td><td>&#8220;Do Not Try With A Friend&#8221;</td></tr><tr><td>&#8220;lens_hint_find_face&#8221;</td><td>&#8220;Find Face&#8221;</td></tr><tr><td>&#8220;lens_hint_keep_raising_your_eyebrows&#8221;</td><td>&#8220;Keep Raising Your Eyebrows&#8221;</td></tr><tr><td>&#8220;lens_hint_kiss&#8221;</td><td>&#8220;Kiss&#8221;</td></tr><tr><td>&#8220;lens_hint_kiss_again&#8221;</td><td>&#8220;Kiss Again&#8221;</td></tr><tr><td>&#8220;lens_hint_look_around&#8221;</td><td>&#8220;Look Around&#8221;</td></tr><tr><td>&#8220;lens_hint_look_down&#8221;</td><td>&#8220;Look Down&#8221;</td></tr><tr><td>&#8220;lens_hint_look_left&#8221;</td><td>&#8220;Look Left&#8221;</td></tr><tr><td>&#8220;lens_hint_look_right&#8221;</td><td>&#8220;Look Right&#8221;</td></tr><tr><td>&#8220;lens_hint_look_up&#8221;</td><td>&#8220;Look Up&#8221;</td></tr><tr><td>&#8220;lens_hint_make_some_noise&#8221;</td><td>&#8220;Make Some Noise!&#8221;</td></tr><tr><td>&#8220;lens_hint_nod_your_head&#8221;</td><td>&#8220;Nod Your Head&#8221;</td></tr><tr><td>&#8220;lens_hint_now_kiss&#8221;</td><td>&#8220;Now Kiss&#8221;</td></tr><tr><td>&#8220;lens_hint_now_open_your_mouth&#8221;</td><td>&#8220;Now Open Your Mouth&#8221;</td></tr><tr><td>&#8220;lens_hint_now_raise_your_eyebrows&#8221;</td><td>&#8220;Now Raise Your Eyebrows&#8221;</td></tr><tr><td>&#8220;lens_hint_now_smile&#8221;</td><td>&#8220;Now Smile&#8221;</td></tr><tr><td>&#8220;lens_hint_open_your_mouth&#8221;</td><td>&#8220;Open Your Mouth&#8221;</td></tr><tr><td>&#8220;lens_hint_open_your_mouth_again&#8221;</td><td>&#8220;Open Your Mouth Again&#8221;</td></tr><tr><td>&#8220;lens_hint_raise_eyebrows_or_open_mouth&#8221;</td><td>&#8220;Raise Your Eyebrows / Or / Open Your Mouth&#8221;</td></tr><tr><td>&#8220;lens_hint_raise_your_eyebrows&#8221;</td><td>&#8220;Raise Your Eyebrows&#8221;</td></tr><tr><td>&#8220;lens_hint_raise_your_eyebrows_again&#8221;</td><td>&#8220;Raise Your Eyebrows Again&#8221;</td></tr><tr><td>&#8220;lens_hint_smile&#8221;</td><td>&#8220;Smile&#8221;</td></tr><tr><td>&#8220;lens_hint_smile_again&#8221;</td><td>&#8220;Smile Again&#8221;</td></tr><tr><td>&#8220;lens_hint_swap_camera&#8221;</td><td>&#8220;Swap Camera&#8221;</td></tr><tr><td>&#8220;lens_hint_tap&#8221;</td><td>&#8220;Tap!&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_a_surface&#8221;</td><td>&#8220;Tap A Surface&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_ground&#8221;</td><td>&#8220;Tap The Ground&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_ground_to_place&#8221;</td><td>&#8220;Tap Ground To Place&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_surface_to_place&#8221;</td><td>&#8220;Tap Surface To Place&#8221;</td></tr><tr><td>&#8220;lens_hint_try_friend&#8221;</td><td>&#8220;Try It With A Friend&#8221;</td></tr><tr><td>&#8220;lens_hint_try_rear_camera&#8221;</td><td>&#8220;Try It With Your Rear Camera&#8221;</td></tr><tr><td>&#8220;lens_hint_turn_around&#8221;</td><td>&#8220;Turn Around&#8221;</td></tr><tr><td>&#8220;lens_hint_walk_through_the_door&#8221;</td><td>&#8220;Walk Through The Door&#8221;</td></tr></tbody></table>
   */
   let HintsComponent: HintsComponent

   let HistogramData: HistogramData

   let HoleMode: HoleMode

   /**
   * @description Used by the `horizontalAlignment` property in [MeshVisual](/api/classes/MeshVisual).
   * When a [ScreenTransform](/api/classes/ScreenTransform) is attached to the same SceneObject, this determines how the mesh will be positioned horizontally.
   */
   let HorizontalAlignment: HorizontalAlignment

   /**
   * @description Options for wrapping text horizontally.
   * Used by [Text component's](/api/classes/Text) `horizontalOverflow` property.
   */
   let HorizontalOverflow: HorizontalOverflow

   let IAssetSystem: IAssetSystem

   /**
   * @description The base class for parameter objects passed into event callbacks.
   */
   let IEventParameters: IEventParameters

   /**
   * @description A 2D visual used for drawing texture assets.
   * Commonly used with [ScreenTransform](/api/classes/ScreenTransform) for drawing images on the screen.
   
   * See the [Image guide](/guides/2d/image/) for more information.
   */
   let Image: Image

   /**
   * @description Controls an image picker texture and UI.
   * Can be accessed through [Texture.control](/api/classes/Texture#control-textureprovider) on an Image Picker texture.
   * For more information, see the [Image Picker Texture](/guides/2d/image-picker-texture) guide.
   */
   let ImagePickerTextureProvider: ImagePickerTextureProvider

   let Inpainting: Inpainting

   let InputBuilder: InputBuilder

   let InputPlaceholder: InputPlaceholder

   /**
   * @description The base class for animation tracks using integer values.
   */
   let IntAnimationTrack: IntAnimationTrack

   /**
   * @description Represents an animation track using stepped integer value keyframes.
   */
   let IntStepAnimationTrackKeyFramed: IntStepAnimationTrackKeyFramed

   /**
   * @description Represents an animation track using stepped integer value keyframes.
   */
   let IntStepNoLerpAnimationTrackKeyFramed: IntStepNoLerpAnimationTrackKeyFramed

   /**
   * @description Triggered when the tracked face ends a kiss.
   */
   let KissFinishedEvent: KissFinishedEvent

   /**
   * @description Triggered when the tracked face starts a kiss.
   */
   let KissStartedEvent: KissStartedEvent

   /**
   * @description Displays text in the scene.
   * This is now deprecated in favor of [Text](/api/classes/Text).
   * See the [Text guide](/guides/2d/text) for more information.
   */
   let Label: Label

   /**
   * @description This event is triggered at the end of every frame, after normal [UpdateEvents](/api/classes/UpdateEvent) trigger
   * but before rendering occurs.
   */
   let LateUpdateEvent: LateUpdateEvent

   /**
   * @description Used to describe a set of layers that an object belongs to or interacts with.
   
   * See [SceneObject's](/api/classes/SceneObject) `layer` property, [Camera's](/api/classes/Camera) `renderLayer` property, and [LightSource's](/api/classes/LightSource) `renderLayer` property.
   */
   let LayerSet: LayerSet

   /**
   * @deprecated
   */
   let LegacyFaceMeshProvider: LegacyFaceMeshProvider

   let LensDataKey: LensDataKey

   let LensDataSystem: LensDataSystem

   let LensEntryPoint: LensEntryPoint

   /**
   * @description Acts as a source of light in the scene.
   * See the [Light and Shadows](/guides/3d/light-and-shadow) guide for more information about lighting.
   */
   let LightSource: LightSource

   /**
   * @description Applies a liquify effect to anything rendered behind it.
   */
   let LiquifyVisual: LiquifyVisual

   let LoadStatus: LoadStatus

   /**
   * @description Helps convert data types to localized string representations. Accessible through `global.localizationSystem`.
   
   * Note that formatted or localized strings may appear differently to users depending on their region.
   * The example results given here are representative of a user in the United States, but may appear differently for users in other regions.
   */
   let LocalizationSystem: LocalizationSystem

   /**
   * @description Allows you to access a user's location information.
   */
   let Location: Location

   let LocationAsset: LocationAsset

   let LocationMarkerProvider: LocationMarkerProvider

   /**
   * @description Used by [DeviceLocationTrackingComponent](/api/classes/DeviceLocationTrackingComponent) to indicate the user's distance from the landmarker location.
   * See the [Landmarker guide](/templates/landmarker) for more information.
   */
   let LocationProximityStatus: LocationProximityStatus

   let LongPressEndEvent: LongPressEndEvent

   let LongPressStartEvent: LongPressStartEvent

   /**
   * @description Every frame, LookAtComponent rotates its SceneObject to face towards a target SceneObject.
   */
   let LookAtComponent: LookAtComponent

   /**
   * @description The "aim" and "up" vectors used with [LookAtComponent](/api/classes/LookAtComponent) when determining rotation.
   * LookAtComponent will try to point the `Aim` axis of the SceneObject towards the target,
   * while keeping the `Up` axis of the SceneObject pointing towards `worldUpVector`.
   */
   let LookAtComponent_AimVectors: LookAtComponent.AimVectors

   let LookAtComponent_LookAtMode: LookAtComponent.LookAtMode

   /**
   * @description Used with [LookAtComponent](/api/classes/LookAtComponent) to set the "up" vector when determining rotation.
   */
   let LookAtComponent_WorldUpVector: LookAtComponent.WorldUpVector

   let MachineLearning: MachineLearning

   let MachineLearning_AlignmentType: MachineLearning.AlignmentType

   let MachineLearning_FrameTiming: MachineLearning.FrameTiming

   let MachineLearning_InferenceMode: MachineLearning.InferenceMode

   let MachineLearning_ModelState: MachineLearning.ModelState

   let MachineLearning_OutputMode: MachineLearning.OutputMode

   let MachineLearning_PlaceholderType: MachineLearning.PlaceholderType

   /**
   * @description Handles input information from user touch input via the [TouchComponent](/api/classes/TouchComponent) to control Scale, Rotation, and Translation of objects.
   */
   let ManipulateComponent: ManipulateComponent

   /**
   * @description This event is triggered when manipulation on the object ends.
   */
   let ManipulateEndEvent: ManipulateEndEvent

   /**
   * @description Result object returned from [ManipulateComponent.intersectManipulateFrame()](/api/classes/ManipulateComponent).
   */
   let ManipulateFrameIntersectResult: ManipulateFrameIntersectResult

   /**
   * @description This event is triggered when manipulation on the object begins.
   */
   let ManipulateStartEvent: ManipulateStartEvent

   /**
   * @description Enum values specifying each type of manipulation. See [ManipulateComponent](/api/classes/ManipulateComponent).
   */
   let ManipulateType: ManipulateType

   /**
   * @description Defines a marker to use for Marker Tracking with [MarkerTrackingComponent](/api/classes/MarkerTrackingComponent).
   * For more information, see the [Marker Tracking](/guides/general/marker-tracking) guide.
   */
   let MarkerAsset: MarkerAsset

   /**
   * @description Base class for marker providers.
   * For more information, see the [Marker Tracking](/guides/general/tracking/marker-tracking) guide.
   */
   let MarkerProvider: MarkerProvider

   /**
   * @description Used to track images in the camera. Moves the containing object's transform to match the detected image.
   * For more information, see the [Marker Tracking](/guides/general/tracking/marker-tracking) guide.
   */
   let MarkerTrackingComponent: MarkerTrackingComponent

   let MaskTextureProvider: MaskTextureProvider

   /**
   * @description A 2x2 matrix.
   */
   let mat2: mat2

   /**
   * @description A 3x3 matrix.
   */
   let mat3: mat3

   /**
   * @description A 4x4 matrix.
   */
   let mat4: mat4

   /**
   * @description An asset that describes how visual objects should appear.
   * Each Material is a collection of [Passes](/api/classes/Pass) which define the actual rendering passes.
   * Materials are used by [MeshVisuals](/api/classes/MeshVisual) for drawing meshes in the scene.
   */
   let Material: Material

   /**
   * @description Base class for all MeshVisual components using [Materials](/api/classes/Material) to render.
   * Comparable to the former class "MeshVisual", which was split into the classes:
   * [BaseMeshVisual](/api/classes/BaseMeshVisual),
   * [MaterialMeshVisual](/api/classes/MaterialMeshVisual),
   * and [RenderMeshVisual](/api/classes/RenderMeshVisual).
   */
   let MaterialMeshVisual: MaterialMeshVisual

   let MattingTextureProvider: MattingTextureProvider

   /**
   * @description A class for generating meshes at runtime.
   */
   let MeshBuilder: MeshBuilder

   /**
   * @description Possible index data types used by [MeshBuilder](/api/classes/MeshTopology). `MeshIndexType.UInt16` is the value normally used.
   */
   let MeshIndexType: MeshIndexType

   /**
   * @description Mesh topology types used by [MeshBuilder](/api/classes/MeshBuilder).
   */
   let MeshTopology: MeshTopology

   /**
   * @description This class has been DEPRECATED starting in Lens Studio 2.3.
   * The `Component.MeshVisual` typename is now an alias for [BaseMeshVisual](/api/classes/BaseMeshVisual).
   * When upgrading a project to Lens Studio 2.3 or higher, any instances of the MeshVisual component will be upgraded to [RenderMeshVisual](/api/classes/RenderMeshVisual).
   
   * This class was split into the following three classes, to better distinguish the behaviors of child classes.
   
   * -[BaseMeshVisual](/api/classes/BaseMeshVisual): Base class for all visual classes using meshes to render
   * -[MaterialMeshVisual](/api/classes/MaterialMeshVisual): Child class of BaseMeshVisual, gives access to the [Materials](/api/classes/Material) used to render
   * -[RenderMeshVisual](/api/classes/RenderMeshVisual): Child class of MaterialMeshVisual, gives access to the [RenderMesh](/api/classes/RenderMesh) used to render
   */
   let MeshVisual: MeshVisual

   let MLComponent: MLComponent

   /**
   * @description Triggered when the tracked face's mouth closes.
   */
   let MouthClosedEvent: MouthClosedEvent

   /**
   * @description Triggered when the tracked face's mouth opens.
   */
   let MouthOpenedEvent: MouthOpenedEvent

   let MultiplayerSession: MultiplayerSession

   let MultiplayerSystem: MultiplayerSystem

   let NativeARTrackingState: NativeARTrackingState

   let NaturalFeatureMarkerProvider: NaturalFeatureMarkerProvider

   let NeuralFaceEffectTextureProvider: NeuralFaceEffectTextureProvider

   let NeuralSnapEffectTextureProvider: NeuralSnapEffectTextureProvider

   let ObjectDetector: ObjectDetector

   /**
   * @description A reusable object hierarchy stored as a resource.
   * Can be instantiated through script or brought into the scene through Lens Studio.
   * For more information, see the [Prefabs](/guides/general/prefabs) guide.
   */
   let ObjectPrefab: ObjectPrefab

   /**
   * @description Used to track objects in the camera. Moves the local [ScreenTransform](/api/classes/ScreenTransform) to match the detected image.
   * See the [Object Tracking guide](/guides/general/tracking/object-tracking) for more information.
   */
   let ObjectTracking: ObjectTracking

   let ObjectTrackingAsset: ObjectTrackingAsset

   let ObjectTrackingEndEvent: ObjectTrackingEndEvent

   let ObjectTrackingEvent: ObjectTrackingEvent

   let ObjectTrackingStartEvent: ObjectTrackingStartEvent

   let ObjectTrackingSystem: ObjectTrackingSystem

   let ObjectTrackingTextureProvider: ObjectTrackingTextureProvider

   let OffsetAdjustType: OffsetAdjustType

   let OnTimeStartEvent: OnTimeStartEvent

   let OpticalFlow: OpticalFlow

   let OpticalFlowTextureProvider: OpticalFlowTextureProvider

   let OS: OS

   let OutlineGlyph: OutlineGlyph

   /**
   * @description Used in [Text's](/api/classes/Text) `outlineSettings` property.
   * Configures how text outlining will appear on a Text component.
   */
   let OutlineSettings: OutlineSettings

   let OutputBuilder: OutputBuilder

   let OutputPlaceholder: OutputPlaceholder

   let PanGestureEndEvent: PanGestureEndEvent

   let PanGestureMoveEvent: PanGestureMoveEvent

   let PanGestureStartEvent: PanGestureStartEvent

   let ParticlesAsset: ParticlesAsset

   let ParticlesVisual: ParticlesVisual

   /**
   * @description Controls how a mesh will get rendered. Each Pass acts as an interface for the shader it's associated with.
   * Any properties on a Pass's shader will automatically become properties on that Pass.
   * For example, if the shader defines a variable named `baseColor`, a script would be able to access that property as `Pass.baseColor`.
   */
   let Pass: Pass

   let PerformanceIndexes: PerformanceIndexes

   /**
   * @description Allows data to be stored and retrieved between Lens sessions.
   * In other words, data can be saved on device and loaded back in the next time the Lens is opened.
   * Can be accessed with `global.persistentStorageSystem`.
   
   * See the [Persistent Storage guide](/guides/scripting/persistent-storage) for more information.
   */
   let PersistentStorageSystem: PersistentStorageSystem

   /**
   * @description Attaches the SceneObject to the mesh surface of a different SceneObject.
   * See the [Pin To Mesh](/guides/3d/pin-to-mesh) guide for more information.
   */
   let PinToMeshComponent: PinToMeshComponent

   /**
   * @description Used with [PinToMeshComponent.orientation](/api/classes/PinToMeshComponent).
   */
   let PinToMeshComponent_Orientation: PinToMeshComponent.Orientation

   let PlatformMaskType: PlatformMaskType

   let PlatformSegmentationTextureProvider: PlatformSegmentationTextureProvider

   /**
   * @description Uses an input color lookup table image to adjust the coloring of the Lens.
   * See the [Color Correction Post Effect guide](/guides/2d/post-effect/#color-correction) for more information.
   */
   let PostEffectVisual: PostEffectVisual

   /**
   * @deprecated
   */
   let Prefab: Prefab

   /**
   * @description Controls an instance of a prefab asset.
   */
   let PrefabInstantiator: PrefabInstantiator

   /**
   * @description RenderObjectProvider for mesh objects generated procedurally.
   */
   let ProceduralMeshRenderObjectProvider: ProceduralMeshRenderObjectProvider

   let ProceduralTextureProvider: ProceduralTextureProvider

   let ProcessingMode: ProcessingMode

   /**
   * @description Base class for all resource providers.
   */
   let Provider: Provider

   /**
   * @description A quaternion, used to represent rotation.
   */
   let quat: quat

   /**
   * @description The base class for animation tracks using quaternion values.
   */
   let QuaternionAnimationTrack: QuaternionAnimationTrack

   /**
   * @description Represents an animation track using quaternion value keyframes.
   */
   let QuaternionAnimationTrackKeyFramed: QuaternionAnimationTrackKeyFramed

   /**
   * @description Represents a rotation animation track using euler angles.
   */
   let QuaternionAnimationTrackXYZEuler: QuaternionAnimationTrackXYZEuler

   let Reconstruction: Reconstruction

   let RecordingState: RecordingState

   /**
   * @description An axis aligned rectangle.
   * Used by `anchors` and `offsets` in [ScreenTransform](/api/classes/ScreenTransform) to represent screen boundaries.
   */
   let Rect: Rect

   let RectangleSetter: RectangleSetter

   let RectCropTextureProvider: RectCropTextureProvider

   let RenderingSpace: RenderingSpace

   /**
   * @description Represents a mesh asset.
   * See also: [RenderMeshVisual](/api/classes/RenderMeshVisual).
   */
   let RenderMesh: RenderMesh

   /**
   * @description Renders a [RenderMesh](/api/classes/RenderMesh) asset in the scene.
   * Comparable to the former class "MeshVisual", which was split into the classes:
   * [BaseMeshVisual](/api/classes/BaseMeshVisual),
   * [MaterialMeshVisual](/api/classes/MaterialMeshVisual),
   * and [RenderMeshVisual](/api/classes/RenderMeshVisual).
   */
   let RenderMeshVisual: RenderMeshVisual

   /**
   * @description Provider for RenderMesh data.
   */
   let RenderObjectProvider: RenderObjectProvider

   /**
   * @description Controls a camera texture resource.
   * Can be accessed through [Texture.control](/api/classes/Texture#control-textureprovider) on a Camera texture.
   * For more information, see the [Camera and Layers](/guides/general/camera) guide.
   */
   let RenderTargetProvider: RenderTargetProvider

   let RenderTargetProvider_DepthBufferUsage: RenderTargetProvider.DepthBufferUsage

   let RenderTargetProvider_MSAAStrategy: RenderTargetProvider.MSAAStrategy

   let RestrictionComponent: RestrictionComponent

   /**
   * @description Visual effect used to add subtle retouching effects to detected faces (soft skin, teeth whitening, etc.).
   * To learn more, visit the [Retouch Guide](/guides/face/face-effects/face-retouch).
   */
   let RetouchVisual: RetouchVisual

   /**
   * @description Used with [DeviceTracking.rotationOptions](/api/classes/DeviceTracking) to change settings for Rotation tracking mode.
   */
   let RotationOptions: RotationOptions

   /**
   * @description Applies a constant rotation to the object every frame.
   */
   let Rotator: Rotator

   let SceneConfig: SceneConfig

   let SceneConfig_EqualCameraOrderStrategy: SceneConfig.EqualCameraOrderStrategy

   let SceneConfig_FaceStretchAlgorithm: SceneConfig.FaceStretchAlgorithm

   let SceneConfig_FaceStretchBatchingStrategy: SceneConfig.FaceStretchBatchingStrategy

   let SceneConfig_MipmapGenStrategy: SceneConfig.MipmapGenStrategy

   let SceneConfig_RenderTargetStrategy: SceneConfig.RenderTargetStrategy

   /**
   * @description The base class for scenewide events.  SceneEvents can be created using [ScriptComponent](/api/classes/ScriptComponent)'s [createEvent](/api/classes/ScriptComponent#createeventstring-eventtype-sceneevent) method.
   */
   let SceneEvent: SceneEvent

   let SceneIntelligenceSystem: SceneIntelligenceSystem

   /**
   * @description An object in the scene hierarchy, containing a [Transform](/api/classes/Transform) and possibly [Components](/api/classes/Component).
   * A script can access the SceneObject holding it through the method `script.getSceneObject()`.
   */
   let SceneObject: SceneObject

   /**
   * @description Base class for all object-based Event types in Lens Studio (ManipulateStartEvent, TapEvent, etc.).
   */
   let SceneObjectEvent: SceneObjectEvent

   let SceneRecognition: SceneRecognition

   /**
   * @description Overrides the settings on a local [ScreenTransform](/api/classes/ScreenTransform) to fit a screen region on the device.
   * See the [Screen Transform guide](/guides/2d/screen-transform) for more information.
   */
   let ScreenRegionComponent: ScreenRegionComponent

   /**
   * @description Types of screen regions that can be used with [ScreenRegionComponent](/api/classes/ScreenRegionComponent).
   */
   let ScreenRegionType: ScreenRegionType

   let ScreenTextureProvider: ScreenTextureProvider

   /**
   * @description Used for positioning objects in 2d screen space. It overrides the regular [Transform](/api/classes/Transform) component on the SceneObject it's attached to.
   
   * See the [Screen Transform guide](/guides/2d/screen-transform) for more information.
   */
   let ScreenTransform: ScreenTransform

   /**
   * @description Binds scripts to Events and executes them when triggered. Any script can access the ScriptComponent executing them through the variable `script`.
   * See also: [Scripting Overview](/guides/scripting/scripting-overview#script-components), [Script Events Guide](/guides/scripting/script-events).
   */
   let ScriptComponent: ScriptComponent

   /**
   * @description Base class for objects representing Script data.
   */
   let ScriptObject: ScriptObject

   /**
   * @description Represents the Lens scene. Accessible through `global.scene`.
   */
   let ScriptScene: ScriptScene

   let Segmentation: Segmentation

   let SegmentationMask: SegmentationMask

   /**
   * @description Segmentation model used for [SegmentationTextureProvider](/api/classes/SegmentationTextureProvider).
   */
   let SegmentationModel: SegmentationModel

   /**
   * @description Controls a segmentation texture resource.
   * Can be accessed through [Texture.control](/api/classes/Texture#control-textureprovider) on a Segmentation texture.
   * For more information, see the [Segmentation](/guides/general/segmentation) guide.
   */
   let SegmentationTextureProvider: SegmentationTextureProvider

   /**
   * @description Low-level data class.
   */
   let SerializableWithUID: SerializableWithUID

   let SerializationSystem: SerializationSystem

   let SideTextureMode: SideTextureMode

   /**
   * @deprecated
   */
   let SkeletonJointType: SkeletonJointType

   let SkeletonModel: SkeletonModel

   /**
   * @deprecated
   */
   let SkeletonTracking: SkeletonTracking

   /**
   * @description Represents skinning data for rigged meshes. See also: [MeshVisual](/api/classes/MeshVisual).
   */
   let Skin: Skin

   let SkinSample: SkinSample

   /**
   * @description Triggered when a smile ends on the tracked face.
   */
   let SmileFinishedEvent: SmileFinishedEvent

   /**
   * @description Triggered when a smile begins on the tracked face.
   */
   let SmileStartedEvent: SmileStartedEvent

   let Snap3D: Snap3D

   let Snap3D_Layer: Snap3D.Layer

   let Snap3D_MagicMomentCameraPathMode: Snap3D.MagicMomentCameraPathMode

   let Snap3D_MagicMomentParams: Snap3D.MagicMomentParams

   let Snap3D_Strategy: Snap3D.Strategy

   let SnapcodeFoundEvent: SnapcodeFoundEvent

   /**
   * @description Provides a marker for tracking Snapcodes.
   * For more information, see the [Marker Tracking](/guides/general/tracking/marker-tracking) guide.
   */
   let SnapcodeMarkerProvider: SnapcodeMarkerProvider

   let SnapImageCaptureEvent: SnapImageCaptureEvent

   let SnappablesSession: SnappablesSession

   let SnappablesSessionInitFailedEvent: SnappablesSessionInitFailedEvent

   let SnappablesSessionReadyEvent: SnappablesSessionReadyEvent

   let SnappablesSystem: SnappablesSystem

   let SnapRecordingSystem: SnapRecordingSystem

   let SnapRecordStartEvent: SnapRecordStartEvent

   let SnapRecordStopEvent: SnapRecordStopEvent

   let SplineComponent: SplineComponent

   /**
   * @description Represents transform data for screen-aligned 2D sprites. Use on SceneObjects with a SpriteVisual Component.
   * See also: [SpriteVisual](/api/classes/SpriteVisual).
   */
   let SpriteAligner: SpriteAligner

   /**
   * @description Represents a renderable 2D visual in Lens Studio.
   */
   let SpriteVisual: SpriteVisual

   let StrandNeighbourSearchType: StrandNeighbourSearchType

   let StreamPlayerComponent: StreamPlayerComponent

   /**
   * @description Options for stretching a mesh to fit a [ScreenTransform's](/api/classes/ScreenTransform) bounding box.
   * Used in [MeshVisual's](/api/classes/MeshVisual) `stretchMode` property, as long as the SceneObject has a [ScreenTransform](/api/classes/ScreenTransform) attached.
   
   * See the [Image guide](/guides/2d/image/) for more information about stretch modes.
   */
   let StretchMode: StretchMode

   let Surface: Surface

   /**
   * @description Used with [DeviceTracking.surfaceOptions](/api/classes/DeviceTracking) to change settings for Surface tracking mode.
   */
   let SurfaceOptions: SurfaceOptions

   /**
   * @description If a [DeviceTracking](/api/classes/DeviceTracking) component is present in the scene, this event is triggered when
   * the tracking is restarted (typically when the Lens starts, or if the user taps the ground).
   */
   let SurfaceTrackingResetEvent: SurfaceTrackingResetEvent

   let SystemInterfaceElement: SystemInterfaceElement

   /**
   * @description This event is triggered when the user taps on the screen.
   */
   let TapEvent: TapEvent

   /**
   * @description Visual component that renders dynamic text.
   * See the [Text guide](/guides/2d/text) for more information.
   */
   let Text: Text

   /**
   * @description Fill settings used by several text related classes.
   * Used in [Text's](/api/classes/Text) `textFill` property, [DropshadowSettings'](/api/classes/DropshadowSettings) `fill` property, and [OutlineSettings'](/api/classes/OutlineSettings) `fill` property.
   */
   let TextFill: TextFill

   /**
   * @description Used in [TextFill's](/api/classes/TextFill) `mode` property. Controls which drawing method is used for the TextFill.
   */
   let TextFillMode: TextFillMode

   let TextInputSystem: TextInputSystem

   let TextInputSystem_KeyboardOptions: TextInputSystem.KeyboardOptions

   let TextInputSystem_KeyboardType: TextInputSystem.KeyboardType

   let TextInputSystem_ReturnKeyType: TextInputSystem.ReturnKeyType

   /**
   * @description Controls a text rendering texture. Can be accessed through the main rendering pass on a [Label](/api/classes/Label) component.
   * The properties here mirror those on Label.
   */
   let TextProvider: TextProvider

   /**
   * @description Represents a texture file asset.
   */
   let Texture: Texture

   let TextureFormat: TextureFormat

   let TextureMeshBuilder: TextureMeshBuilder

   /**
   * @description The base class for specialized Texture providers. Can be accessed through [Texture.control](/api/classes/Texture#control-textureprovider).
   */
   let TextureProvider: TextureProvider

   let TextureStretchMode: TextureStretchMode

   /**
   * @description Allows the `MeshVisual` provided to this component to handle touches on the screen (blocking Snapchat from receiving the touches), and optionally let certain touch types to pass through (let Snapchat handle the touch).
   
   * Possible `TouchType` values:
   
   * "TouchTypeNone"
   * "TouchTypeTouch"
   * "TouchTypeTap"
   * "TouchTypeDoubleTap"
   * "TouchTypeScale"
   * "TouchTypePan"
   * "TouchTypeSwipe"
   */
   let TouchComponent: TouchComponent

   /**
   * @description This provider is returned by `global.touchSystem` and allows your lens to handle any touches on the screen, and optionally let certain touch types to pass through (let Snapchat handle the touch).
   
   * Possible TouchType exception values:
   
   * "TouchTypeNone"
   * "TouchTypeTouch"
   * "TouchTypeTap"
   * "TouchTypeDoubleTap"
   * "TouchTypeScale"
   * "TouchTypePan"
   * "TouchTypeSwipe"
   */
   let TouchDataProvider: TouchDataProvider

   /**
   * @description Triggered when a touch event ends.
   */
   let TouchEndEvent: TouchEndEvent

   /**
   * @description Triggered when a touch position on the screen is moved.
   */
   let TouchMoveEvent: TouchMoveEvent

   let TouchMoveEvent_UpdateLimit: TouchMoveEvent.UpdateLimit

   /**
   * @description Triggered when a touch event starts.
   */
   let TouchStartEvent: TouchStartEvent

   let TrackedObject2D: TrackedObject2D

   /**
   * @deprecated
   */
   let TrackerMode: TrackerMode

   /**
   * @deprecated
   */
   let TrackerType: TrackerType

   let TrackingMode: TrackingMode

   /**
   * @description Controls the position, rotation, and scale of a [SceneObject](/api/classes/SceneObject).  Every SceneObject automatically has a Transform attached.
   */
   let Transform: Transform

   let TransformerRotation: TransformerRotation

   /**
   * @description Triggered when the lens turns off.
   */
   let TurnOffEvent: TurnOffEvent

   /**
   * @description Triggered when the lens turns on.
   */
   let TurnOnEvent: TurnOnEvent

   /**
   * @description Triggered every frame.
   */
   let UpdateEvent: UpdateEvent

   let UriRequestType: UriRequestType

   let UriSystem: UriSystem

   /**
   * @description Provides information about the user such as display name, birthday, and current weather. Accessible through `global.userContextSystem`.
   
   * All callbacks will execute as soon as the requested information is available. In some rare cases, the requested information may be completely unavailable, and the callback will never occur.
   
   * Note that formatted or localized strings may appear differently to users depending on their region.
   */
   let UserContextSystem: UserContextSystem

   let UserInfoSystem: UserInfoSystem

   /**
   * @description A two dimensional vector.
   */
   let vec2: vec2

   /**
   * @description Represents an animation track using vec2 value keyframes.
   */
   let Vec2AnimationTrack: Vec2AnimationTrack

   /**
   * @description Represents an animation track using vec2 value keyframes.
   */
   let Vec2AnimationTrackKeyFramed: Vec2AnimationTrackKeyFramed

   /**
   * @description A three dimensional vector.
   */
   let vec3: vec3

   /**
   * @description Represents an animation track using vec3 value keyframes.
   */
   let Vec3AnimationTrack: Vec3AnimationTrack

   /**
   * @description Represents an animation track using vec3 value keyframes.
   */
   let Vec3AnimationTrackKeyFramed: Vec3AnimationTrackKeyFramed

   /**
   * @description Represents an animation track using vec3 animation tracks.
   */
   let Vec3AnimationTrackXYZ: Vec3AnimationTrackXYZ

   /**
   * @description A four dimensional vector.
   */
   let vec4: vec4

   /**
   * @description Represents an animation track using vec4 value keyframes.
   */
   let Vec4AnimationTrack: Vec4AnimationTrack

   /**
   * @description Represents an animation track using vec4 value keyframes.
   */
   let Vec4AnimationTrackKeyFramed: Vec4AnimationTrackKeyFramed

   /**
   * @description A vector containing 4 boolean values.
   */
   let vec4b: vec4b

   /**
   * @description Used to help control vertex animations on the SceneObject.
   */
   let VertexCache: VertexCache

   /**
   * @description Used by the `verticalAlignment` property in [MeshVisual](/api/classes/MeshVisual).
   * When a [ScreenTransform](/api/classes/ScreenTransform) is attached to the same SceneObject, this determines how the mesh will be positioned vertically.
   */
   let VerticalAlignment: VerticalAlignment

   /**
   * @description Options for handling vertical text overflow. Used by [Text component's](/api/classes/Text) `verticalOverflow` property.
   */
   let VerticalOverflow: VerticalOverflow

   let VideoRecorderComponent: VideoRecorderComponent

   /**
   * @description Describes the current status of a [VideoTextureProvider](/api/classes/VideoTextureProvider).
   */
   let VideoStatus: VideoStatus

   /**
   * @description Controls a video texture resource. Can be accessed through [Texture.control](/api/classes/Texture#control-textureprovider).
   */
   let VideoTextureProvider: VideoTextureProvider

   /**
   * @description Base class for all visual Components (e.g. MeshVisual).
   */
   let Visual: Visual

   /**
   * @description Types of weather returned by [UserContextSystem's](/api/classes/UserContextSystem) `requestWeatherCondition()` callback.
   */
   let WeatherCondition: WeatherCondition

   let WorldOptions: WorldOptions

   /**
   * @description Triggered when the world tracking mode has changed.
   */
   let WorldTrackingModeChangedEvent: WorldTrackingModeChangedEvent

}

