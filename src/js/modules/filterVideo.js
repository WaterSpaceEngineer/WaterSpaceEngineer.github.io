const filterVideo = () => {
  const filterBtns = document.querySelectorAll('[data-relax-room-btn]');
  
  const getData = (category) => {
    fetch('../data/db-video.json')
    .then(res => res.json())
    .then(data => data.youtube)
    .then(data => {
      const array = data.filter(item => {
        return item.category === category;
      })

      createVideo(array);

      // localStorage.setItem('video', JSON.stringify(array))
    })
  }

  if(filterBtns.length) {
    getData(filterBtns[0].getAttribute('data-youtube-category'))
  }
  

  filterBtns && filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(btn => btn.classList.remove('button-simple-active'));

      if(e.target === btn) {
        btn.classList.add('button-simple-active')
      }
      
      const youtubeCategory = btn.getAttribute('data-youtube-category');
      
      getData(youtubeCategory);
    })
  })

  // const getResource = async (url) => {
  //   const res = await fetch(url);

  //   if(!res.ok) {
  //     throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  //   }

  //   return await res.json();
  // }

  // getResource('../data/db-video.json')
  //   .then(data => createVideo(data.youtube))

            
  function createVideo(array) {
    const videoContainer = document.querySelector('.relax-room__video-items');

    videoContainer.innerHTML = '';

    array.forEach(({id, title, urlVideo, bgImg}) => {
      
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
}

export default filterVideo;