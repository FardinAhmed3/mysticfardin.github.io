document.addEventListener('DOMContentLoaded', (event) => {
    const songList = [
        {
            title: 'After Dark',
            artist: 'Mr.Kitty',
            cover: 'https://i.scdn.co/image/ab67616d0000b273b492477206075438e0751176',
            spotify: 'https://open.spotify.com/track/2LKOHdMsL0K9KwcPRlJK2v?si=e149a758d4d94d1c'
        },
        {
            title: 'Faded',
            artist: 'Alan Walker',
            cover: 'https://upload.wikimedia.org/wikipedia/en/d/da/Alan_Walker_-_Faded.png',
            spotify: 'https://open.spotify.com/track/7gHs73wELdeycvS48JfIos?si=f05b0e9c16294b69'
        },
        {   title:  'Nights',
            artist: 'Avicci',
            cover:  'https://i.scdn.co/image/ab67616d0000b2730ae4f4d42e4a09f3a29f64ad',
            spotify:'https://open.spotify.com/track/0ct6r3EGTcMLPtrXHDvVjc?si=67e6547deebb41ac'
        },
        {
            title: 'Morrow',
            artist: '070 Shake',
            cover: 'https://i.scdn.co/image/ab67616d0000b27320921767dd81e8f90ef9fc71',
            spotify: 'https://open.spotify.com/track/3sIoWQZbJqUKj5iELz8eTA?si=4921911e731e47be'
        },
        {
            title: 'Old Sensei',
            artist: 'Lind Erebros',
            cover: 'https://i.scdn.co/image/ab67616d0000b273967bb0d6ac4b876a7055d561',
            spotify: 'https://open.spotify.com/track/1ai6CZYghbvcxEGeedqXoM?si=38a5aa8971094fc6'
        },
        {
            title: 'Tenshi',
            artist: 'Gouryella',
            cover: 'https://i.scdn.co/image/ab67616d0000b273d814b4b31f9f61f83fc200ad',
            spotify: 'https://open.spotify.com/track/7GJjKVSCOidzAlSdHNciUu?si=0defd61fea39449c'
        },
        {
            title: 'Elements of Life',
            artist: 'Tiesto',
            cover: 'https://m.media-amazon.com/images/I/71QuCjJwVUL._UF1000,1000_QL80_.jpg',
            spotify: 'https://open.spotify.com/track/6VM07TmzYJWb4MUEkxRplr?si=b1b711bf74254745'
        },
        
    ];

    const songListContainer = document.getElementById('songList');

    songList.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('song');

        const coverElement = document.createElement('img');
        coverElement.src = song.cover;

        const titleElement = document.createElement('div');
        titleElement.classList.add('title');
        titleElement.textContent = `${song.title} by ${song.artist}`;

        const spotifyLinkElement = document.createElement('a');
        spotifyLinkElement.href = song.spotify;
        spotifyLinkElement.target = "_blank";
        spotifyLinkElement.classList.add('spotify-link');
        spotifyLinkElement.textContent = 'Listen Now';

        songElement.appendChild(coverElement);
        songElement.appendChild(titleElement);
        songElement.appendChild(spotifyLinkElement);

        songListContainer.appendChild(songElement);
    });
});
