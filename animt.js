const su = document.querySelectorAll(".su");
console.log(su);

const myObserver = new IntersectionObserver((entries) => {

 entries.forEach((entry)=>{

    if(entry.isIntersecting){

        entry.target.classList.add('show')

    }else{

       

    }


 })

});

su.forEach((Element)=> myObserver.observe(Element))




































const fo = document.querySelectorAll(".fo");
console.log(fo);

const my = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showa');
    } else {
      entry.target.classList.remove('showa');
    }
  });
});

fo.forEach((element) => my.observe(element));

