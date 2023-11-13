(() => {
	// TODO: Flip the card when clicked
    // figure out hpw to take off the class of flip by using js
    // 1. identify all the queries I need
    // 2. what event listeners I need for the queries
    const cards = document.querySelectorAll('.card');
    card.addEventListener('click', e=>{

        for  (let card of cards) {
            cards.addEventListener('click', e=>{
                e.target.classList.toggle('flipped');
            });
        }
    })
})();
