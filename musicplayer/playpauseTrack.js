function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack();
}
