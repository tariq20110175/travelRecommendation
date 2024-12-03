function clearSearch()
{
    document.getElementById('searchbar').innerText="";
}
document.getElementById("reset").addEventListener('click',clearSearch);