fetch('/DreamDictionary.json').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
    getData(data)
}).catch(err => {
    console.log(err);
})

function getData(data){

    const blogHeadersList = data.BlogHeader;
    const blogDetailsList = data.BlogDetail;
    
    
   
    

    const selectLetter = document.getElementById('select-letter');
    selectLetter.addEventListener('change', () => {
        let selectedValue = selectLetter.value;
        let getLetterFromHeaderList;
        let blogId;
        let resultList = [];
    for(let i = 0; i < blogHeadersList.length; i++){
        getLetterFromHeaderList = blogHeadersList[i].BlogTitle.split(' ')[1];
        if(selectedValue === getLetterFromHeaderList){
            blogId = i + 1;
             resultList = blogDetailsList.filter(item => {
                return item.BlogId === blogId
             })
        }
        
        
    }

    displayResult(resultList);

    function displayResult(list){
        const letterResult = document.getElementById('letter-result');
        letterResult.innerHTML = '';
        list.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.BlogContent}`;
            letterResult.appendChild(li);
        })
    }
    
        

    })


    const textInput = document.getElementById('text-input');
    const searchButton = document.getElementById('search-btn');
    const deleteButton = document.getElementById('delete-btn');

    const inputResult = document.getElementById('input-result');

    searchButton.addEventListener('click', () => {
       const inputValue = textInput.value;
       let resultList = [];
       if(inputValue !== ''){
        resultList = blogDetailsList.filter(item => {
            return item.BlogContent.includes(inputValue);
        })
       }


       displayResult(resultList);

       function displayResult(list){
           
           inputResult.innerHTML = '';
           list.forEach(item => {
               const li = document.createElement('li');
               li.textContent = `${item.BlogContent}`;
               inputResult.appendChild(li);
           })
       }


       

    })

    
    
    
    deleteButton.addEventListener('click', () => {
        textInput.value = '';
        inputResult.innerHTML = '';
    })


    
}





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
