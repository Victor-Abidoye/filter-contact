// Get the search input
const searchInput = document.getElementById('searchInput');
// Get all the list items
const names = document.querySelectorAll('li:not(.list-head)')


let typed = () => {
    // Gets the value currently typed into the input box
    let word = searchInput.value.toUpperCase()
    check(word)
}

let check = (word) => {
    // for each name in the list, compare with the current input
    for (item of names) {
        let myName = item.innerHTML
        if (myName.toUpperCase().includes(word)) {
            item.style.display = ''
        } else {
            item.style.display = 'none'
        }
    }
}
searchInput.addEventListener('keyup', typed);

