const prev_img = document.getElementById('prev_img');
const next_img = document.getElementById('next_img');
var img_arr = [
    {
        url: './00.jpg',
        photographer: 'Ales Krivec',
        photographer_url: 'https://unsplash.com/photos/4miBe6zg5r0',
        mode: true,
        scale: ''
    },
    {
        url: './01.jpg',
        photographer: 'Jasper Boer',
        photographer_url: 'https://unsplash.com/photos/LJD6U920zVo',
        mode: true,
        scale: 0.5
    },
    {
        url: './02.jpg',
        photographer: "Michal Kmet'",
        photographer_url: 'https://unsplash.com/photos/M9O6GRrEEDY',
        mode: false,
        scale: 0.1
    },
    {
        url: './03.jpg',
        photographer: 'Sean Oulashin',
        photographer_url: 'https://unsplash.com/photos/KMn4VEeEPR8',
        mode: false,
        scale: 0.7
    },
    {
        url: './04.jpg',
        photographer: 'Federico Di Dio',
        photographer_url: 'https://unsplash.com/photos/Ovz3oM-95rE',
        mode: true,
        scale: 0.2
    },
    {
        url: './05.jpg',
        photographer: 'Chris Meads',
        photographer_url: 'https://unsplash.com/photos/Uy9Bh-kmt3s',
        mode: true,
        scale: 0.2
    },
    {
        url: './06.jpg',
        photographer: 'Federico Di Dio',
        photographer_url: 'https://unsplash.com/photos/-pnawSG96Ls',
        mode: true,
        scale: 0.5
    },
    {
        url: './07.jpg',
        photographer: 'Chris Stenger',
        photographer_url: 'https://unsplash.com/photos/DTMhL0OpXjQ',
        mode: true,
        scale: 0.4
    }
];
var img_ind = 0;

function setBgImg() {
    let img = img_arr[img_ind];
    document.querySelector('main').style.background = `url(${img.url})`;

    let credit = document.querySelector('.credit');
    credit.innerHTML = '';
    let a = document.createElement('a');
    a.appendChild(document.createTextNode(img.photographer));
    a.href = img.photographer_url;
    a.target = '_blank';
    credit.appendChild(a);
    credit.appendChild(document.createTextNode(' on Unsplash'));

    let android = document.querySelector('.robot');
    (img.mode)?
        (!android.classList.contains('lgt')?
            android.classList.add('lgt'):
            console.log('android has lgt', img.mode)
        ):
        android.classList.remove('lgt');

    android.style.bottom = '5%';
    android.style.left = '12%';

    /* android.style.top = (img.position.top)?
        `${img.position.top}%`:
        'auto';
    android.style.bottom = (img.position.bottom)?
        `${img.position.bottom}%`:
        'auto';
    android.style.left = (img.position.left)?
        `${img.position.left}%`:
        'auto';
    android.style.right = (img.position.right)?
        `${img.position.right}%`:
        'auto'; */

    android.style.transform = (img.scale)? `scale(${img.scale})`: 'none';
}

const decrement = () => {
    img_ind--;
    if (img_ind < 0) { img_ind = img_arr.length - 1; }
    setBgImg();
}
const increment = () => {
    img_ind++;
    if (img_ind > img_arr.length - 1) { img_ind = 0; }
    setBgImg();
}

prev_img.addEventListener('click', decrement);
next_img.addEventListener('click', increment);

document.addEventListener('keydown', (e) => {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        increment();
    }
    else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        decrement();
    }
})

window.onload = setBgImg;