import { catsData } from "./catdata.js";


const emotionEl = document.querySelector('.emotions-cnt');



const allEmotions = getAllEmotions(catsData);

let allHtml = '';

allEmotions.forEach((emotion,i)=>{
  let html = 
  `<div class="emotion-cnt">
    <label for="${emotion}">${emotion}</label>
    <input id="${emotion}" name="emotion" class="emotion" type="radio" value="${emotion}">
  </div>`


  if(i===allEmotions.length-1){
    emotionEl.style.borderBottom = 'solid 1px rgb(160, 159, 159)';

    emotionEl.style.borderBottomLeftRadius = '5px';

    emotionEl.style.borderBottomRightRadius = '5px';

    html = 
    `<div class="emotion-cnt no-border">
      <label for="${emotion}">${emotion}</label>
      <input id="${emotion}" class="emotion" name="emotion" type="radio" value="${emotion}">
    </div>`
  }


  allHtml += html;

})

emotionEl.innerHTML = allHtml;

function getAllEmotions(data){
  const visited = {}
  const allEmotions = [];
  for(let emotionData of data){
    for(let emotion of emotionData.emotionTags){
      if(emotion in visited){
        continue;
      }
      allEmotions.push(emotion);
      visited[emotion] = true;
    }
  }
  return allEmotions
}