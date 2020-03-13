//A változat
// function showIt(form) {
//     alert(form["zip"].value)
// }

//B változat
// function showIt(){
//     alert(document.getElementById('zip').value)
// }

function validateNonEmpty(item){
    if(item.value.length == 0){
        // item.nextSibling.nextSibling.style.visibility = "visible";
        item.nextSibling.nextSibling.innerHTML = "Please enter a value!";
        return false;
    }
    else{
        item.nextSibling.nextSibling.innerHTML = "";
        return true;
    }
}

function validateLength(minLength, maxLength, item){
    if(item.value.length > maxLength || item.value.length < minLength){
        item.nextSibling.nextSibling.innerHTML = 'Please enter a value ' + minLength + ' to ' + maxLength + ' characters in length!';
        return false;
    }
    else{
        item.nextSibling.nextSibling.innerHTML = "";
        return true;
    }
}

// function validateZip(item){
//     if(item.value.length != 4){
//         item.nextSibling.nextSibling.innerHTML = 'Please enter exactly four digits!';
//     }
//     else if(isNaN(item.value)){
//         item.nextSibling.nextSibling.innerHTML = 'Please enter a number!';
//     }
//     else{
//         item.nextSibling.nextSibling.innerHTML = "";
//     }
// }

function validateZip(item){
    if(validateNonEmpty(item))
    {
        var pattern = /^[0-9]{4}$/;
        if(pattern.test(item.value)){
            item.nextSibling.nextSibling.innerHTML = "";
            return true;
        }
        else{
            item.nextSibling.nextSibling.innerHTML = "Please enter exactly five digits!";
            return false;
        }
    }
}

function validatePhone(item){
    if(validateNonEmpty(item)) {
        var pattern1 = /^(20|70|30)-\d{3}-\d{4}$/;
        var pattern2 = /^([1-9])?\d-\d{3}-\d{3}(\d)?$/;
        if (pattern1.test(item.value) || pattern2.test(item.value)) {
            item.nextSibling.nextSibling.innerHTML = "";
            return true;
        } else {
            item.nextSibling.nextSibling.innerHTML = "Please enter valid phone number!";
            return false;
        }
    }
}

function validateEmail(item){
    debugger;
    if(validateNonEmpty(item)) {
        var pattern = /^[a-zA-Z0-9][a-zA-Z0-9\._\-&!?=#]*@[\w-]+(\.\w{2,4})+$/;
        if(pattern.test(item.value)){
            item.nextSibling.nextSibling.innerHTML = "";
            return true;
        }
        else{
            item.nextSibling.nextSibling.innerHTML = "Please enter valid email!";
            return false;
        }
    }
}

// function validateDate(item) {
//     if (validateNonEmpty(item)) {
//         var pattern = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
//         if (pattern.test(item.value)) {
//             item.nextSibling.nextSibling.innerHTML = "";
//             return true;
//         } else {
//             item.nextSibling.nextSibling.innerHTML = "Please enter valid date!";
//             return false;
//         }
//     }
// }

function placeOrder(form) {
    debugger;
    if (validateLength(1, 32, form["message"]) &&
        validateZip(form["zip"]) &&
        validateNonEmpty(form["date"]) &&
        validateNonEmpty(form["name"]) &&
        validatePhone(form["phone"]) &&
        validateEmail(form["email"])) {
        form.submit
    } else {
        alert("I'm sorry but there is something wrong with the order information!")
        return false;
    }
}

/*  REGULAR EXPRESSION
 /^\d\d\d\d$/  4 számjegyet fogad el egybeírva d= digit;
                      /^\d{4}$/     rövidebb alak;
                      w - betű + szám + _
                      s - szóköz, tabulátor, újsor, kocsivissza
                      ^ - elejétől nézze az egyezést, ne bárhol
                      . - újsor kivételével mindenre
                      $ - végét jelzi  keresett kifejezésnek (ha ez után valamit beírunk nem lesz rá érvényes a láncunk)
                      /70332/  - pontos egyezésre is használhatjuk
                      mennyiségjelzők:  {4} négy karaktert vár
                                        {2,4} 2,3 vagy 4 karaktert vár {min, max}
                                        | vagy (70|20) valamelyik a kettő közül
                                        + - egyszer vagy többször szerepelhet
                                        * - egyszer, többször vagy nem szerepel
                                        ? - egyszer vagy nem szerepel
                            pl.: /^\d{4}(-\d{2})?$/  - a kötőjel és a 2 számjegy ami a zárójelben van vagy szerepel vagy nem a ? jel miatt

                    Karakterosztályok: [0,4] - 1,2,3,4 számokat keresi meg, ezekre illeszkedik
                                       [^0,4] - ezekre nem illeszkedik
                                       /(mas\más|mos)/ | - több lehetsőség megadása
*/
