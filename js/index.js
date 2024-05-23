const retRoPhone = (categoryName) =>{
    fetch(` https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`)
    .then(res => res.json())
    .then(data => displayReto(data.posts))
}
const displayReto = (phones) =>{
    // console.log(phones);
    const letDiscus = document.getElementById('lets-section');
   
    phones.forEach(phone => {
        // console.log(phone);
        const addDiscus = document.createElement('div');
        addDiscus.textContent = '';
        addDiscus.classList = `card card-side bg-[#F3F3F5] p-8  w-[70%] shadow-xl`
        addDiscus.innerHTML =` 
        <figure  class="w-[75px] h-[75px] mt-8 bg-amber-50 rounded-lg"><img src="${phone.image}" alt="Movie"/></figure>
              <div class="card-body">
                <div class= "flex gap-8">
                <span>#${phone.category}</span>
                <span>Author: ${phone.author.name}</span>
                </div>
                <h2 class="card-title text-3xl font-bold">${phone.title}</h2>
                <p class = "py-4">${phone.description}</p>
                  
                  <hr class="border-dashed">
                  <div class="flex items-center justify-between">
                  <div class="flex gap-x-4">
                    <span class="flex gap-2"><img src="images/Group 13.png" alt="">${phone.comment_count}</span>
                    <span class="flex gap-2"><img src="images/Group 16.png" alt="">${phone.view_count}</span>
                    <span class="flex gap-2"><img src="images/Group 18.png" alt="">${phone.posted_time}</span>
                  </div>
                  <div class="card-actions">
                  <img src="images/Group 40106.png" onclick="clickOpen()" alt="">
                  </div>
                </div>
              </div>
        `;
        letDiscus.appendChild(addDiscus)
        
    });
    spinnerloading(false);
        
}
const searchHere = () =>{
  spinnerloading(true);
  const field = document.getElementById('search-field');
  const categoryName = field.value;
  field.value = '';
  console.log(categoryName);
  retRoPhone(categoryName);
}
retRoPhone('coding');

const spinnerloading = (isLoading) =>{
  const loading = document.getElementById('spinner-loading');
  console.log(loading);
  if(isLoading){
    loading.classList.remove('hidden');
  }
  else{
    loading.classList.add('hidden')
  }
}



// post Section

const postSection = () =>{
    fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
const displayPost = (poets) =>{
    console.log(poets);
    const poetState = document.getElementById('poit')
    poets.forEach(poet => {
        console.log(poet);
        const creatPoet = document.createElement('div');
        creatPoet.classList = `shadow-xl card bg-base-100`
        creatPoet.innerHTML = `  
        <figure class="p-8"><img class="rounded-2xl" src="${poet.cover_image}" alt="Shoes" /></figure>
              <div class="card-body">
                <div class="flex gap-4">
                  <img src="images/Frame.png" alt="">
                  <span>${poet.author.posted_date}</span>
                </div>
                
                <h2 class="card-title">${poet.title}</h2>
                <p>${poet.description}</p>
                <div class="flex items-center gap-4">
                  <img src="${poet.profile_image}" class="rounded-[50%] h-[75px] w-[75px]" alt="">
                  <h1>${poet.author.name}</h1>
                
                </div>
              </div>
        `;
        poetState.appendChild(creatPoet)
    });
}
postSection();


const clickOpen = () =>{
 
  const num = document.getElementById('number');
  const numbers = num.innerText;
  const cont = parseInt(numbers);
  const update = cont + 1;
  num.innerText = update;

  const name = document.getElementById('names');
  
  const pat = document.createElement('div');
  pat.innerText = `top`;
  pat.innerHTML = `
  <div class="shadow-xl card w-96 bg-base-100">
    <div class="card-body">
        <div class="card-actions">
          <div class="flex gap-4">
            <h1 class="font-bold">Discoverer of Global Treasures</h1>
            <span class="flex items-center gap-2"><img src="images/Group 16.png" alt="">1668</span>
          </div>
        </div>
        
      </div>
    </div>
  `;
  name.appendChild(pat);
 
}





