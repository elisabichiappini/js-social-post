/****************************************************************
JS
*****************************************************************/
'use strict';
// la parte di articole deve essere ricreata su js in html articole

const users = [
    {
    userName : 'Elisa Chiappini',
    userPic : ''
    },
    {
        userName : 'Sara Davanzoa',
        userPic : ''
    },
    {
    userName : 'Anna Sciolla',
    userPic : ''
    }
];

const posts = [
    {
    postId : 0,
    //autore è l'oggetto e ha delle proprietà quindi si crea un oggetto autore che sia relazionato a post.
    author : 0,
    date : '04-14-2023',
    textPic : 'lorem ipsum',
    img: {
        path: '',
        alt: '',
        },
    likes: '80'
    },
    {
    postId : 1,
    //autore è l'oggetto e ha delle proprietà quindi si crea un oggetto autore che sia relazionato a post.
    author : 0,
    date : '05-30-2023',
    textPic : 'lorem ipsum',
    img: {
        path: '',
        alt: '',
    },
    likes: '10'
    },
    {
    postId : 2,
    //autore è l'oggetto e ha delle proprietà quindi si crea un oggetto autore che sia relazionato a post.
    author : 0,
    date : '06-02-2023',
    textPic : 'lorem ipsum',
    img: {
        path: '',
        alt: '',
    },
    likes: '100'
    },
];