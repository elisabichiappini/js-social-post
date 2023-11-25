/****************************************************************
JS
*****************************************************************/
'use strict';
// la parte di articole deve essere ricreata su js in html articole

const users = [
    {
        userName : 'Elisa',
        secondName : 'Chiappini',
        userPic : 'https://unsplash.it/500/300?image=15'
    },
    {
        userName : 'Sara',
        secondName : 'Davanzo',
        userPic : 'https://unsplash.it/500/300?image=16'
    },
    {
        userName : 'Anna',
        secondName : 'Sciolla',
        userPic : 'https://unsplash.it/600/300?image=10'
    }
];

const posts = [
    {
    postId : 0, //elisa
    //autore è l'oggetto e ha delle proprietà quindi si crea un oggetto autore che sia relazionato a post.
    author : 0,
    date : '04-14-2023',
    textPic : 'lorem ipsum1 ',
    img: {
        path: 'https://unsplash.it/600/300?image=13',
        alt: 'img1'
        },
    likes: '80'
    },
    {
    postId : 1, //sara
    //autore è l'oggetto e ha delle proprietà quindi si crea un oggetto autore che sia relazionato a post.
    author : 1,
    date : '05-30-2023',
    textPic : 'lorem ipsum 2',
    img: {
        path: 'https://unsplash.it/600/300?image=11',
        alt: 'img2'
    },
    likes: '10'
    },
    {
    postId : 2, //anna
    //autore è l'oggetto e ha delle proprietà quindi si crea un oggetto autore che sia relazionato a post.
    author : 2,
    date : '06-02-2023',
    textPic : 'lorem ipsum 3',
    img: {
        path: 'https://unsplash.it/600/300?image=20',
        alt: 'img3'
    },
    likes: '100'
    },
];

//creare elementi in dom con il clone da html
const templatePost = document.getElementById('post-social-element');
const postContainer = document.getElementById('container');

posts.forEach((element) => {
    //cloneNode
    const currentElement = templatePost.content.cloneNode(true);
    //elaborazione del post 
    const { author, date, textPic, img, likes, postId} = element;
    const { userName, secondName, userPic } = users[element.author];
    console.log(userName);
    console.log(secondName);
    console.log(userPic);
    //userPic
    currentElement.querySelector('.profile-pic').src = userPic;
    //userName
    currentElement.querySelector('.post-meta__author').innerText = `${userName} ${secondName}`;
    //date
    currentElement.querySelector('.post-meta__time').innerText = date;
    //contentText
    currentElement.querySelector('.post__text').innerHTML = textPic;
    //contentImage
    currentElement.querySelector('.post__image > img').src = img.path;
    //counter and likes
    const likeCounter = currentElement.querySelector('.js-likes-counter');
    likeCounter.id = `like-counter-${postId}`;
    likeCounter.innerText = likes;
    console.log(likeCounter.id)

    //appendo all'elemento postContainer dell'html che identifico, in questo modo si palesano i posts per il numero di oggetti in esso
    postContainer.append(currentElement);
});