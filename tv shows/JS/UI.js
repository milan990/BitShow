export const displayShows = (shows) => {
    const main = document.querySelector("main");
    const input = document.querySelector("input")
    const showslist = shows.slice(0, 100)
    console.log(showslist)
    showslist.forEach(element => {
const div = document.createElement('div');
div.setAttribute('class', 'showsList')
const img = document.createElement('img');
const h3 =  document.createElement('h3');
main.appendChild(div);
img.setAttribute('src' ,element.image.original);
h3.textContent = element.name;
div.appendChild(img);
div.appendChild(h3);
div.addEventListener('click', ()=>{localStorage.setItem('id', element.id), location.href = 'singleShow.html'})
input.addEventListener('keydown' ,(event)=>{if(event.keyCode == '13'){ localStorage.setItem('value', input.value, location.href = 'searchShows.html')}})

});
}

export const displaySingleShow = (show) => {
    console.log(show)
const main = document.querySelector('main');
const div1 = document.createElement('div');
const div2 = document.createElement('div')
div2.setAttribute('class', 'showName')
const img = document.createElement('img')
img.setAttribute('class', 'imgShow')
const h1 = document.createElement('h1')
const Seasons = document.createElement('h1');
const Cast = document.createElement('h1');
Cast.textContent = 'Cast: '
h1.textContent = show.name;
Seasons.textContent = `Seasons (${show._embedded.seasons.length})`
img.setAttribute('src', show.image.original);
div1.appendChild(img);
div2.appendChild(h1)
div2.appendChild(Seasons)
for(let i=0; i<show._embedded.seasons.length ; i++){
    const paragraph = document.createElement('p');
paragraph.textContent=`Season ${(i+1)} length: ${show._embedded.seasons[i].premiereDate} - ${show._embedded.seasons[i].endDate}`
div2.appendChild(paragraph)
}
div2.appendChild(Cast)
    for(let i = 0; i<6; i++){
        const para = document.createElement('p')
        para.textContent = show._embedded.cast[i].person.name;
        div2.appendChild(para);
        console.log(para)
    }// for loop, just for show
const div3 = document.createElement('div');
div3.setAttribute('class', 'div3')
const summaryTitle = document.createElement('h1');
summaryTitle.textContent = 'Summary : '
const summary = document.createElement('p')
summary.innerHTML = show.summary;
div3.appendChild(summaryTitle);
div3.appendChild(summary);
main.appendChild(div1);
main.appendChild(div2);
main.appendChild(div3)
}

export const searchShows = (shows) => {
    console.log(shows)
    const main = document.querySelector("main");
    const input = document.querySelector("input")
    shows.forEach(element => {
const div = document.createElement('div');
div.setAttribute('class', 'showsList')
const img = document.createElement('img');
const h3 =  document.createElement('h3');
main.appendChild(div);
img.setAttribute('src' ,element.show.image.original);
h3.textContent = element.show.name;
div.appendChild(img);
div.appendChild(h3);
div.addEventListener('click', ()=>{localStorage.setItem('id', element.show.id), location.href = 'singleShow.html'})
input.addEventListener('keydown' ,(event)=>{if(event.keyCode == '13'){ localStorage.setItem('value', input.value, location.href = 'searchShows.html')}})

});
}