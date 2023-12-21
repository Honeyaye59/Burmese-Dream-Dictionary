function toggleResult(){
    const resultButton = document.getElementById('result-btn')
    const letterResult = document.getElementById('letter-result');
   
    if(letterResult.style.display === 'none' || letterResult.style.display === ""){
        resultButton.innerHTML = '';
        resultButton.innerHTML = `
        <i class="fa-solid fa-caret-down" ></i>&nbsp;&nbsp;&nbsp;<span>ရလဒ်ဖတ်ရှုရန်မြားကိုနှိပ်ပါ</span>
        `
        letterResult.style.display = 'block'
    }else {
        resultButton.innerHTML = '';
        resultButton.innerHTML = `
        <i class="fa-solid fa-caret-right" ></i>&nbsp;&nbsp;&nbsp;<span>ရလဒ်ဖတ်ရှုရန်မြားကိုနှိပ်ပါ</span>
        `
        letterResult.style.display = 'none'
    }
    
}




