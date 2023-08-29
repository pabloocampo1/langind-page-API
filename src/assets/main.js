const API ='https://youtube-v31.p.rapidapi.com/search?channelId=UC0_95MpNlRz9x7JmsXBClZA&part=snippet%2Cid&order=date&maxResults=8';

const content = document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6fea2163c6mshbf248b62c9f1e5fp1ede77jsn519151191629',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {

    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <a target="_blank" href="https://youtube.com/watch?v=${video.id.videoId}">
          <div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
          <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
              </h3>
          </div>
          </div>
    </a>
        
        `).slice(0, 8).join('')}

        `;
       content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }

})();






