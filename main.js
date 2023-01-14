currentSlideId=1;
sliderElement=document.getElementById('slider');
totalSlides=sliderElement.childElementCount;
console.log(totalSlides);

function showSlide()
{
    console.log('slide shown');
    slides=document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if (currentSlideId===index+1)
        {
            element.classList.remove('hidden')
        }
        else
        {
            element.classList.add('hidden')
        }
    }
}

function next()
{
    if (totalSlides > currentSlideId)
    {
        currentSlideId++;
        console.log(currentSlideId);
        showSlide();
    }
    console.log('next');
}


function prev()
{
    if (currentSlideId > 1)
    {
        currentSlideId--;
        console.log(currentSlideId);
        showSlide();
    }
    console.log('prev');
}


function autoplay()
{
    next();
    console.log('called');
    if (totalSlides > currentSlideId)
    {
        setTimeout(() => {
            autoplay();
        }, 2000);
    }
}

setTimeout(() => {
    autoplay();
}, 2000);


