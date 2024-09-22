const items = document.querySelectorAll('.item')
console.log(items);

const checkBoxes = document.querySelectorAll('input[type = "checkbox"]')
console.log(checkBoxes);

let lastChecked;



const handleCheck = function (e) {
    let inBetween = false
    // console.log(e)
    // console.log(this);
    if(e.shiftKey && lastChecked){
        // console.log("done");
        items.forEach( item => {
            const checkBox  = item.querySelector('input[type = "checkbox"]')
            console.log(checkBox);
            if(checkBox === this || checkBox === lastChecked){
                // console.log("correct");
                inBetween = !inBetween
                item.classList.add('checkBetween');
                checkBox.checked = true;
            }
            if(inBetween){
                checkBox.checked = true
                // checkBox.classList.add('checkBetween')
                item.classList.add('checkBetween');
            }
        });

    }else {
        items.forEach(item => item.classList.remove('checkBetween'));
    }
    
    if (!e.shiftKey && this.checked){
        lastChecked = this
        console.log(lastChecked);
    }
}







checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('click', handleCheck)
})
