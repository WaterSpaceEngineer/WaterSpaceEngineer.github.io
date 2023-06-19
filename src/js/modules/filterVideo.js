import playVideos from "./playVideos";

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
                <video class="relax-room__video" width="100%" poster="${bgImg}" controls>
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
                <video class="relax-room__video" width="100%" poster="${bgImg}" controls>
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



// const filterVideo = () => {
//   const filterBtns = document.querySelectorAll('[data-relax-room-btn]');
//   const videoContainer = document.querySelector('.relax-room__video-items');
//   const switchCheckbox = document.getElementById('switch-checkbox');

//   const fetchData = async () => {
//     try {
//       const response = await fetch('../data/db-video.json');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.log('Error fetching data:', error);
//     }
//   };

//   const createMediaVideo = ({ bgImg, urlVideosWebm, urlVideosMp, title }) => {
//     videoContainer.insertAdjacentHTML('beforeend', 
//       `
//       <div class="relax-room__video-item">
//           <div class="relax-room__video-wrap mb-10">
//               <video class="relax-room__video" width="100%" poster="${bgImg}" controls>
//                   <source src="${urlVideosWebm}" type="video/webm">
//                   <source src="${urlVideosMp}" type="video/mp4">
//                 </video>
//           </div>
//           <h2 class="relax-room__video-title">${title}</h2>
//       </div>
//       `
//     );
//   };

//   const createYoutubeVideo = ({ id, title, urlVideo, bgImg }) => {
//     videoContainer.insertAdjacentHTML('beforeend', 
//       `
//       <div class="relax-room__video-item">
//         <div class="relax-room__video-wrap relax-room__video-bg mb-10" style="background-image: url(${bgImg});">
//           <div class="relax-room__video" id="${id}"></div>
//           <div class="relax-room__video-play" data-video-trigger data-youtabe-url="${urlVideo}">
//             <button class="relax-room__btn-play _icon-youtube" type="button" aria-current="Кнопка запуска видео"></button>
//           </div>
//         </div>
//         <h2 class="relax-room__video-title">${title}</h2>
//       </div>
//       `
//     );
//   };

//   const filterVideos = async (category, statusCheckbox = false) => {
//     const data = await fetchData();

//     videoContainer.innerHTML = '';

//     const currentLanguage = document.documentElement.lang;
//     const dataArray = data[currentLanguage];

//     const arrayMedia = dataArray.media.filter(item => {
//       return item.category === category && item.videoType === (statusCheckbox ? 'narrow' : 'wide');
//     });

//     const arrayYoutube = dataArray.youtube.filter(item => {
//       return item.category === category && item.videoType === (statusCheckbox ? 'narrow' : 'wide');
//     });

//     arrayMedia.forEach(createMediaVideo);
//     arrayYoutube.forEach(createYoutubeVideo);

//     playVideos('[data-video-trigger]');
//   };

//   const setActiveButton = category => {
//     filterBtns.forEach(btn => {
//       const dataCategory = btn.getAttribute('data-category');
//       if (dataCategory === category) {
//         btn.classList.add('button-simple-active');
//       } else {
//         btn.classList.remove('button-simple-active');
//       }
//     });
//   };

//   const handleFilterButtonClick = e => {
//     const category = e.target.getAttribute('data-category');
//     setActiveButton(category);
//     filterVideos(category, switchCheckbox.checked);
//   };

//   const handleSwitchCheckboxChange = () => {
//     const activeButton = document.querySelector('.button-simple-active');
//     const category = activeButton ? activeButton.getAttribute('data-category') : null;
//     filterVideos(category, switchCheckbox.checked);
//   };

//   filterBtns.forEach(btn => {
//     btn.addEventListener('click', handleFilterButtonClick);
//   });

//   switchCheckbox.addEventListener('change', handleSwitchCheckboxChange);

//   // Set active button and filter videos on page load
//   if (filterBtns.length > 0) {
//     const defaultCategory = filterBtns[0].getAttribute('data-category');
//     setActiveButton(defaultCategory);
//     filterVideos(defaultCategory, switchCheckbox.checked);
//   }
// };

