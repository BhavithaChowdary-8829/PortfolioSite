// Smooth reveal animation

const cards = document.querySelectorAll(
'.card, .skill, .timeline-item'
);

const observer = new IntersectionObserver(
(entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
},
{
threshold:0.1
}
);

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="0.8s ease";

observer.observe(card);

});