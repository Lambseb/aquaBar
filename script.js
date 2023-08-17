
// activate movie presentation " le cadre"
const leCadre = document.querySelector('.le_cadre');
const switchMovie = document.querySelector('.wrapperMain');
const movie = document.querySelector('.video');
const mvTitle = document.querySelector('.mv_title')
const closeVid = document.querySelector('.cut_video');
const text = document.querySelector('.title_wrapper')
leCadre.addEventListener('click',() =>{
    mvTitle.classList.add('mv_title_reveal');
    closeVid.classList.add('cut_video_reveal');
    text.style.opacity = '0';
})
closeVid.addEventListener('click', () =>{
    mvTitle.classList.remove('mv_title_reveal');
    closeVid.classList.remove('cut_video_reveal');
})

const ratio = 0.5;
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio
};
const objectObs = document.querySelectorAll('.img_pic_menu');

function handleIntersect (entries){
  //   console.log(entries);
    entries.forEach( entry => {
     if (entry.intersectionRatio > ratio) {
         entry.target.classList.add('pics_visible');
         observer.unobserve(entry.target);
     }
})}
const observer = new IntersectionObserver(handleIntersect, options);
objectObs.forEach(imageScrolled =>{
    observer.observe(imageScrolled)
})

