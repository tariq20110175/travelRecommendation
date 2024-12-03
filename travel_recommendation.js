const searchbar=    document.getElementById('searchbar');
const resetbtn =document.getElementById('reset');

function clearSearch()
{ 
    document.getElementById('searchbar').value = '';
searchbar.value='';
}

resetbtn.onclick=clearSearch();