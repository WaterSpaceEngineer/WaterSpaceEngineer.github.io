const playVideos = (triggerSelector) => {
    const btnsPlay = document.querySelectorAll(triggerSelector);
  
    if (btnsPlay.length) {
      const tag = document.createElement('script');
  
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
      let players = [];

      console.log(players);
  
      function createPlayer(url, frameId) {
        const player = new YT.Player(frameId, {
          height: '100%',
          width: '100%',
          videoId: url,
          playerVars: { 'autoplay': 1 },
        });
        players.push(player);
      }
  
      btnsPlay.forEach((btnPlay, index) => {
        btnPlay.addEventListener('click', () => {
          const path = btnPlay.getAttribute('data-youtabe-url');
          const frameId = `frame-${index + 1}`;
          createPlayer(path, frameId);
          btnPlay.remove();
        });
      });
    }
  };

export default playVideos;

// const playVideo = (triggerSelector) => {
//     const btnPlay = document.querySelector(triggerSelector);

//     if(btnPlay) {
//         const tag = document.createElement('script');

//         tag.src = "https://www.youtube.com/iframe_api";
//         const firstScriptTag = document.getElementsByTagName('script')[0];
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
//         let player;
    
//         function createPlayer (url) {
//             player = new YT.Player('frame', {
//                 height: '100%',
//                 width: '100%',
//                 videoId: `${url}`,
//                 playerVars: { 'autoplay': 1 },
//             });
//         }
    
//         btnPlay.addEventListener('click', () => {
//             const path = btnPlay.getAttribute('data-url');
//             createPlayer(path);
//             btnPlay.remove();
//         });
//     }
// };

// export default playVideo;