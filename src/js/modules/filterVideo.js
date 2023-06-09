const filterVideo = () => {
  const getResource = async (url) => {
    const res = await fetch(url);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getResource('../data/db-video.json')
    .then(data => createVideo(data.youtube))
        
  function createVideo(data) {
    data.forEach(({id, title, urlVideo, bgImg}) => {
      const element = document.createElement('div');
      element.classList.add('relax-room__video-item');

      element.innerHTML = `
        <div class="relax-room__video-wrap relax-room__video-bg mb-10" style="background-image: url(${bgImg});">
          <div class="relax-room__video" id="${id}"></div>
          <div class="relax-room__video-play" data-video-trigger data-youtabe-url="${urlVideo}">
            <button class="relax-room__btn-play _icon-youtube" type="button" aria-current="Кнопка запуска видео"></button>
          </div>
        </div>
        <h2 class="relax-room__video-title">${title}</h2>
      `

      document.querySelector('.relax-room__video-items').append(element);
    });
  }
}

export default filterVideo;