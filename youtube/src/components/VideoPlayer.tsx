import ReactPlayer from "react-player";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";

export default function VideoPlayer({videoKey}: {videoKey: string}) {
    const videoURL = import.meta.env.VITE_ASSET_BASEURL + videoKey;
  return (
    <MediaController
      style={{
        width: "90%",
        aspectRatio: "16/9",
        zIndex: 50
      }}
    >
      <ReactPlayer
        slot="media"
        src={videoURL}
        controls={false}
        pip={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      ></ReactPlayer>
      <MediaControlBar>
        <MediaPlayButton />
        <MediaSeekBackwardButton seekOffset={10} />
        <MediaSeekForwardButton seekOffset={10} />
        <MediaTimeRange />
        <MediaTimeDisplay showDuration />
        <MediaMuteButton />
        <MediaVolumeRange />
        <MediaPlaybackRateButton />
        <MediaFullscreenButton />
      </MediaControlBar>
    </MediaController>
  );
}