const API ='https://youtube-v31.p.rapidapi.com/search?channelId=UC0_95MpNlRz9x7JmsXBClZA&part=snippet%2Cid&order=date&maxResults=30';
const contentAlbums = document.getElementById('albums');
const contentMusic = document.getElementById('content-music');
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


//POO de albums

class Albums{
    constructor({
        linkMusic,
        nameAl,
        imageAl,
        totalSong,
        date,
    }){
        this.linkMusic = linkMusic;
        this.nameAl = nameAl;
        this.imageAl = imageAl;
        this.totalSong = totalSong;
        this.date = date;
    }
};


const ArrayAlbums = [];

const album1 = new Albums({
    linkMusic:"https://www.youtube.com/watch?v=Li2fXHoDP1s&list=PLKFDUctmsbgocbq6_3G2UwmbO-nbpEtYA",
    nameAl: "3MEN2 KBRN",
    imageAl: "https://tse4.mm.bing.net/th?id=OIP.E5cl0ATwI5Wh6LlgNttLYAAAAA&pid=Api&P=0&h=180",
    totalSong: "18 songs",
    date:"Mar 17, 2023",
})
const album2 = new Albums({
    linkMusic:"https://www.youtube.com/watch?v=u7jjJT8Dibg&list=PLKFDUctmsbgqEmHFT9CnBHa75LrqxwWai",
    nameAl:"Monarca",
    imageAl: "https://www.buscaletras.com/photos/albums/eladio-carrion/med/monarca.jpg",
    totalSong: "14 songs",
    date:"Jan 6, 2021",
})
const album3 = new Albums({
    linkMusic:"https://www.youtube.com/watch?v=9qk3srcv1To&list=PLKFDUctmsbgpiucNumyyWqJ4rnzFyShdW",
    nameAl: "Sauce Boyz 2",
    imageAl: "https://charts-static.billboard.com/img/2021/12/eladio-carrion-bb3-sauce-boyz-2-6d8-180x180.jpg",
    totalSong: "22 songs",
    date:"Jan 31, 2021",
})
const album4 = new Albums({
    linkMusic:"https://www.youtube.com/watch?v=KFLQWiVqPoY&list=PLKFDUctmsbgoyIqyOHVqpNL_BgTJhgZK5",
    nameAl: "Sauce Boyz",
    imageAl: "https://umomag.com/wp-content/uploads/2020/12/reportaje-los-50-discos-del-2020-eladio-carrion-diciembre-umomag-180x180.jpg",
    totalSong: "16 songs",
    date:"Dic 31, 2020",
})


ArrayAlbums.push(album1,album2,album3,album4);

let viewAlbums = ArrayAlbums.map(album => `
<div class="itemAlbum">
<picture>
<img src="${album.imageAl}" alt="">
</picture>
<section>
<h3>${album.nameAl}</h3>
<span>${album.date}</span> <span>${album.totalSong}</span>
<button><a target="_blank" href="${album.linkMusic}"><img src="https://cdn-icons-png.flaticon.com/128/16/16630.png" alt=""></a></button>
</section>
</div>
` ).join('');

contentAlbums.innerHTML = viewAlbums;


//classes de canciones

class Canciones extends Albums{
    constructor({imageAl,linkMusic,nameMusic,id}){
        super({imageAl,linkMusic});
        this.nameMusic = nameMusic;
        this.id = id;
    }
};

const ArrayMusicTop = [];

const cancion4 = new Canciones({id:4,imageAl:"https://tse4.mm.bing.net/th?id=OIP.E5cl0ATwI5Wh6LlgNttLYAAAAA&pid=Api&P=0&h=180",linkMusic:"https://www.youtube.com/watch?v=j1VVY2sEdC0",nameMusic:"Coco Chanel"});
const cancion1 = new Canciones({id:1,imageAl:"https://umomag.com/wp-content/uploads/2020/12/reportaje-los-50-discos-del-2020-eladio-carrion-diciembre-umomag-180x180.jpg",linkMusic:"https://www.youtube.com/watch?v=ZkUTJkkOnzw",nameMusic:"Kemba Walker"});
const cancion2 = new Canciones({id:2,imageAl:"https://umomag.com/wp-content/uploads/2020/12/reportaje-los-50-discos-del-2020-eladio-carrion-diciembre-umomag-180x180.jpg",linkMusic:"https://www.youtube.com/watch?v=xYJulnlENmY",nameMusic:"3 AM"});
const cancion3 = new Canciones({id:3,imageAl:"https://tse4.mm.bing.net/th?id=OIP.E5cl0ATwI5Wh6LlgNttLYAAAAA&pid=Api&P=0&h=180",linkMusic:"https://www.youtube.com/watch?v=ZkUTJkkOnzw",nameMusic:"Si la calle llama remix"});

ArrayMusicTop.push(cancion1,cancion2,cancion3,cancion4);

let viewMusicTop = ArrayMusicTop.map(item => `
<div>
     <span>${item.id}</span><img src="${item.imageAl}" alt=""><a href="${item.linkMusic}"><img width="10px" src="https://cdn-icons-png.flaticon.com/128/16/16630.png" alt="">${item.nameMusic}</a>
 </div>
` )

contentMusic.innerHTML = viewMusicTop;