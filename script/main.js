document.getElementById('wordsButton').addEventListener('click', function(){
    let wordsInput = document.getElementById('wordsInput').value;
    let Pattern = wordsInput.trim().split(/\s+/); 
    let wordsCount = Pattern.length > 0  ? Pattern.length : 0;
    document.write('Кількість слів ' + wordsCount);
});
