const btn = document.querySelector('#find');
const search = document.querySelector('#search');
const show = document.querySelector('#show');
// console.log(p)

// console.log(btn)
btn.addEventListener('click' , () => {

  search.value + 'kg';

  if(search.value === '') {
    alert('geli miisankaaga');
    return;
  }

  if(search.value <= 40) {
    show.innerHTML = 'carruta kuma jiraan meesha!';
  }
  else if(search.value <= 55) {
   skinny()
      
  }
  else if (search.value >= 56 && search.value < 80) {
    normal()
  } else {
    fat();
  } 

  

  search.value = '' ;

});

const questions = document.querySelector('.question');


const skinny = () => {

questions.style.display = 'block';

  show.innerHTML = `  
   <div class = "choose">
   <span class = "kg-result"> ${search.value}kg waxaad iila muuqataa inaad caato tahay </span>
   <P> Dooro noocaad rabtid </p>     
    <input type="radio" name="gain" value="muruq_dhisid">
    <label for="#">muruq dhisid</label>
    <input type="radio" name="gain" value="miisan_kordhis">
    <label for="#">miisan kordhis</label>
    </div>`;

   const radio = document.querySelectorAll('input[type = radio][name = gain]');

    radio.forEach( input => {
      // console.log(input)
       input.addEventListener('change', () => {
  
        const muscle = document.querySelector(".muscle-gain");
        const gain =  document.querySelector('.wight-gain')
        console.log(gain)
  
        
        if(input.value === 'muruq_dhisid') {
          muscle.classList.add('active');
          gain.classList.remove('active');
  
        } else {
          muscle.classList.remove('active');
          gain.classList.add('active');
  
          console.log('hello there')
        }
       })
     })
  
  


  //  console.log(radio)

};


const normal = () => {
questions.style.display = 'block';

  show.innerHTML = `  
  <div class = "choose">
  <span class = "kg-result"> ${search.value}kg waxaad iila muuqataa inaad normal tahay </span>
  <P> Dooro noocaad rabtid </p>     
   <input type="radio" name="gain" value="muruq_dhisid">
   <label for="#">muruq dhisid</label>
   <input type="radio" name="gain" value="dhexdhexaad">
   <label for="#">Dhexdhexaad</label>
   </div>`;

   const radio = document.querySelectorAll('input[type = radio][name = gain]');

   radio.forEach( input => {
     input.addEventListener('change', () => {

      const muscle = document.querySelector(".muscle-gain");
      const normal =  document.querySelector(".normal-weigth")
      console.log(normal)

      
      if(input.value === 'muruq_dhisid') {
        muscle.classList.add('active');
        normal.classList.remove('active');

      } else {
        muscle.classList.remove('active');
        normal.classList.add('active');

        console.log('hello there')
      }
     })
   })
}

const fat = () => {
questions.style.display = 'block';

  show.innerHTML = `  
  <div class = "choose">
  <span class = "kg-result"> ${search.value}kg waxaad iila muuqataa  qof cayilan ama qof gymer ah  </span>
  <P> Dooro noocaad rabtid </p>     
   <input type="radio" name="gain" value="muruq_dhisid">
   <label for="#">muruq dhisid iyo baruur ridis</label>
   <input type="radio" name="gain" value="miisan dimis">
   <label for="#">miisaan dhimis</label>
   </div>`;

  //  ds

   const radio = document.querySelectorAll('input[type = radio][name = gain]');

   radio.forEach( input => {
     input.addEventListener('change', () => {

      const loss = document.querySelector(".over-weigth");
      const fat_muscle =  document.querySelector(".fat-muslce")
      console.log(loss)

      
      if(input.value === 'muruq_dhisid') {
        loss.classList.remove('active');
        fat_muscle.classList.add('active');

      } else {
        loss.classList.add('active');
        fat_muscle.classList.remove('active');

        // console.log('hello there')
      }
     })
   })
}

const see = document.querySelector('#see-more');
const answers = document.querySelector('.answers');

see.addEventListener('click', () => {
  answers.classList.toggle('active')
  // answers.style.display = 'block';
  
})