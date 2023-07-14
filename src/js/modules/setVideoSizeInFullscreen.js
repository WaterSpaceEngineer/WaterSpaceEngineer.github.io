const setVideoSizeInFullscreen = (videoItem) => {
  const videoElements = document.querySelectorAll(videoItem);

  if(videoElements) {
    videoElements.forEach(videoElement => {
      videoElement.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
          videoElement.style.objectFit = 'none';
        } else {
          videoElement.style.objectFit = 'cover';
        }
      })
    })
  } 
};

export default setVideoSizeInFullscreen;