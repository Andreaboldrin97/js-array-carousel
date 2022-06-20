// creo una variabile(array) con dentro gli indirizzi delle img
let images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];
    console.log(images);

//* porto gli elementi dell'array nell html

    //*recupero il parent dove voglio mettere gli array
    let carouselBox = document.querySelector(`.carousel_box`);

//? creo un ciclo per selezionare ogn elemento presente nell'array partendo da 0
    for(let i = 0 ; i < images.length ; i++){
    //*creo l'elemento img 
    let newImg = document.createElement(`img`);

    //*porto l'elemento creato come figlio di (.carousel_box )
    carouselBox.append(newImg);

    //*cambio l'attributo di newImg (`img`) per ogni elemento dentro l'array
    newImg.setAttribute(`src` , images[i]);
    }

//!quando premo un btn

    //!prendo il btn next
    let btnNext=document.querySelector(`.btn_next`)

    //!quando il btnNext viene clicato fai partire la funzione 
    btnNext.addEventListener(`click` , function(){

    })