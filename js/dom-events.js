






// MAIN
(()  => {


    const sayHelloBtn = document.querySelectorAll(".hello");

    sayHelloBtn.addEventListener('click', e =>{
        // console.log(e);
        const name = e.target.getAttribute("data-name");
        alert(`Hello, ${name}!`);
    });


    // KEYBOARD EVENT EXAMPLE
    document.body.addEventListener('keydown', e=>{
        alert("you pressed a key");
    });
})();