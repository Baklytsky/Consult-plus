'use strict';
let forward = document.querySelectorAll('.forward'),
    forwardLayer = document.querySelectorAll('.forward-layer'),
    itemClients = document.querySelectorAll('.item-clients'),
    clientsComment = document.querySelectorAll('.clients-comment'),
    indicators = document.querySelectorAll('.indicators'),
    topPostsBtn = document.querySelector('.top-posts-btn'),
    topPosts = document.querySelector('.top-posts'),
    allPostsBtn = document.querySelector('.all-posts-btn'),
    allPosts = document.querySelector('.all-posts'),
    allPostsList = document.querySelector('.all-posts-list'),
    blogImg = document.querySelector('.blog-img'),
    blogPage = document.querySelector('.our-blog'),
    block;

startPage();

for (let i = 0; i < forward.length; i++) {
    forward[i].addEventListener('click', function () {
        block = i;
        forwardLayer[block].style.display = 'block';
        reset();
    })
}

function reset() {
    for (let i = 0; i < forwardLayer.length; i++) {
        forwardLayer[i].addEventListener('mouseleave', function () {
            forwardLayer[i].style.display = 'none';
        })
    }
}

allPostsBtn.addEventListener('click', function () {
    topPosts.style.display = 'none';
    blogImg.style.display = 'none';
    allPosts.style.display = 'block';
    allPostsList.style.display = 'block';
    topPostsBtn.classList.remove('active');
    allPostsBtn.classList.add('active');
    blogPage.style.maxHeight = '1500px';
});

topPostsBtn.addEventListener('click', function () {
    topPosts.style.display = 'block';
    blogImg.style.display = 'block';
    allPosts.style.display = 'none';
    allPostsList.style.display = 'none';
    topPostsBtn.classList.add('active');
    allPostsBtn.classList.remove('active');
    blogPage.style.maxHeight = '750px';
});


function startPage() {
    clientsComment[0].style.display = 'block';
    itemClients[0].style.opacity = '1';
    indicators[0].style.color = '#16D428';

}
itemClients[0].addEventListener('click', function () {
    clientsComment[0].style.display = 'block';
    itemClients[0].style.opacity = '1';
    indicators[0].style.color = '#16D428';
    clientsComment[1].style.display = 'none';
    itemClients[1].style.opacity = '0.5';
    indicators[1].style.color = '#FFF';
    clientsComment[2].style.display = 'none';
    itemClients[2].style.opacity = '0.5';
    indicators[2].style.color = '#FFF';
});
itemClients[1].addEventListener('click', function () {
    clientsComment[1].style.display = 'block';
    itemClients[1].style.opacity = '1';
    indicators[1].style.color = '#16D428';
    clientsComment[0].style.display = 'none';
    itemClients[0].style.opacity = '0.5';
    indicators[0].style.color = '#FFF';
    clientsComment[2].style.display = 'none';
    itemClients[2].style.opacity = '0.5';
    indicators[2].style.color = '#FFF';
});
itemClients[2].addEventListener('click', function () {
    clientsComment[2].style.display = 'block';
    itemClients[2].style.opacity = '1';
    indicators[2].style.color = '#16D428';
    clientsComment[0].style.display = 'none';
    itemClients[0].style.opacity = '0.5';
    indicators[0].style.color = '#FFF';
    clientsComment[1].style.display = 'none';
    itemClients[1].style.opacity = '0.5';
    indicators[1].style.color = '#FFF';
});


