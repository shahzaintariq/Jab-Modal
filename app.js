const openModalTriggerEl = document.querySelector(".trigger")
const closeModalTriggerEl = document.querySelector(".close");
const modalEl = document.querySelector(".modal")

function main(){
    openModalTriggerEl.addEventListener('click',() =>{
        modalEl.classList.add('open');
    })
    closeModalTriggerEl.addEventListener('click', () => {
        modalEl.classList.remove('open')
    })

    window.addEventListener('click', (event) => {
        if(event.target === modalEl){
            modalEl.classList.remove('open')
        }
    })
}

main()