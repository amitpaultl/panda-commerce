const h2color = document.getElementsByTagName('h2');

for (const h2h of h2color) {
    h2h.style.color = 'lightblue'
}

// backpak section

const backgroun = document.getElementsByClassName('bagpak');
for (const iter of backgroun) {
    iter.style.background = 'tomato ';
}

// card 
const carde = document.getElementsByClassName('card ');
for (const tor of carde) {
    tor.style.borderRadius= "30px";
}

// function log

function logfun(){
    console.log('click buttton');
}



const buyNow = document.getElementsByClassName('panda-btn-buy-now');
for (const disbol of buyNow) {
    disbol.addEventListener('click', function(event){
        event.target.style.display = "none";
    })
}


// Email 



document.getElementById('email-text').addEventListener('keyup', function(event){
    const value = event.target.value;
    const submi = document.getElementById('submit');
    if(value == 'emali'){
        submi.removeAttribute('disabled')
    }else{
        submi.setAttribute('disabled', true)
    }
    console.log();
})

document.getElementById('bg-colore').addEventListener('dblclick', function(event){
    event.target.style.background = 'pink'
})