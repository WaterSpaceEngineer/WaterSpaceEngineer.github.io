import playVideos from "./playVideos";
import setVideoSizeInFullscreen from "./setVideoSizeInFullscreen";

const filterVideo = () => {
  const filterBtns = document.querySelectorAll('[data-relax-room-btn]');
  const videoContainer = document.querySelector('.relax-room__video-items');
  const switchCheckbox = document.getElementById('switch-checkbox');
  
  const getData = (category, statusCheckbox = false) => {
    fetch('../data/db-video.json')
      .then(res => res.json())
      .then(data => {

        videoContainer.innerHTML = '';

        const currentLanguage = document.documentElement.lang;
        const dataArray = data[currentLanguage];

        if(!statusCheckbox) {
          const arrayMedia = dataArray.media.filter(item => {
            return item.category === category && item.videoType === 'wide';
          })
          const arrayYoutube = dataArray.youtube.filter(item => {
            return item.category === category && item.videoType === 'wide';
          })

          createMediaWideVideo(arrayMedia);
          createYoutubeWideVideo(arrayYoutube);
        } else {
          const arrayMedia = dataArray.media.filter(item => {
            return item.category === category && item.videoType === 'narrow';
          })
          const arrayYoutube = dataArray.youtube.filter(item => {
            return item.category === category && item.videoType === 'narrow';
          })

          createMediaNarrowVideo(arrayMedia);
          createYoutubeNarrowVideo(arrayYoutube);
        }
      })
      .then(() => {
        playVideos('[data-video-trigger]');
        setVideoSizeInFullscreen('[data-media-video]');
      })
  }

  if(filterBtns.length) {
    getData(filterBtns[0].getAttribute('data-category'))
  }
  

  filterBtns && filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(btn => btn.classList.remove('button-simple-active'));

      if(e.target === btn) {
        btn.classList.add('button-simple-active')
      }
      
      const category = btn.getAttribute('data-category');
      
      getData(category, switchCheckbox.checked);
    })
  })

  if(switchCheckbox) {
    switchCheckbox.addEventListener('change', () => {

      let category;

      filterBtns.forEach(btn => {
        btn.classList.contains('button-simple-active') ? 
        category = btn.getAttribute('data-category') : null;
      })

      getData(category, switchCheckbox.checked);
    })
  }

  function createMediaWideVideo(arrayMedia) {
    arrayMedia.forEach(({bgImg, urlVideosWebm, urlVideosMp, title}) => {
      
      videoContainer.insertAdjacentHTML('beforeend', 
        `
        <div class="relax-room__video-item">
            <div class="relax-room__video-wrap mb-10">
                <video class="relax-room__video" data-media-video width="960" height="540" poster="${bgImg}" controls>
                  <source src="${urlVideosWebm}" type="video/webm">
                  <source src="${urlVideosMp}" type="video/mp4">
                </video>
            </div>
            <h2 class="relax-room__video-title">${title}</h2>
        </div>
        `
      )
    });
  }
            
  function createYoutubeWideVideo(arrayYoutube) {
    arrayYoutube.forEach(({id, title, urlVideo, bgImg}) => {
      
      videoContainer.insertAdjacentHTML('beforeend', 
        `
          <div class="relax-room__video-item">
            <div class="relax-room__video-wrap relax-room__video-bg mb-10" style="background-image: url(${bgImg});">
              <div class="relax-room__video" id="${id}"></div>
              <div class="relax-room__video-play" data-video-trigger data-youtabe-url="${urlVideo}">
                <button class="relax-room__btn-play _icon-youtube" type="button" aria-current="Кнопка запуска видео"></button>
              </div>
            </div>
            <h2 class="relax-room__video-title">${title}</h2>
          </div>
        `
      )
    });
  }

  function createYoutubeNarrowVideo(arrayYoutube) {
    arrayYoutube.forEach(({id, title, urlVideo, bgImg}) => {
      
      videoContainer.insertAdjacentHTML('beforeend', 
        `
          <div class="relax-room__video-item_height">
            <div class="relax-room__video-wrap height-video relax-room__video-bg mb-10" style="background-image: url(${bgImg});">
              <div class="relax-room__video" id="${id}"></div>
              <div class="relax-room__video-play" data-video-trigger data-youtabe-url="${urlVideo}">
                <button class="relax-room__btn-play _icon-youtube" type="button" aria-current="Кнопка запуска видео"></button>
              </div>
            </div>
            <h2 class="relax-room__video-title">${title}</h2>
          </div>
        `
      )
    });
  }

  function createMediaNarrowVideo(arrayYoutube) {
    arrayYoutube.forEach(({bgImg, urlVideosWebm, urlVideosMp, title}) => {
      
      videoContainer.insertAdjacentHTML('beforeend', 
        `
        <div class="relax-room__video-item_height">
            <div class="relax-room__video-wrap height-video mb-10">
                <video class="relax-room__video" data-media-video width="540" height="960" poster="${bgImg}" controls>
                  <source src="${urlVideosWebm}" type="video/webm">
                  <source src="${urlVideosMp}" type="video/mp4">
                </video>
            </div>
            <h2 class="relax-room__video-title">${title}</h2>
        </div>
        `
      )
    });
  }
}

export default filterVideo;
