document.addEventListener("DOMContentLoaded",(e)=>{
    console.log(e.target)
    let age, recap, first_name
    age = Number(prompt(`Votre age s"il vous plait`))
   

    /* push data in table */
    isNaN(age) ? alert("Vous devez saisir des chiffres") (location.reload()) : true ; 
    
    !age ? alert("Champs obligatoires") (location.reload()) : true ;
    
    age < 18 ? alert("Vous êtes mineur") (location.reload()) : true ;

    first_name = String(prompt(`Votre prénom?`))

    !first_name ? alert("Vous devez saisir votre prénom") (location.reload()) : true ;
    /* trouver comment signaler à l'internaute qu'il doit saisir une chaine */
    recap = []
    recap.push(age,first_name)
    console.table(recap)
})