function changeAttribute() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].href = "index.html";
        links[i].innerHTML = "Home";
    }
}

function changeGoogle() {
    var link = document.getElementById("q2");
    var form = document.querySelector('form');
    var name = document.querySelector('input[type="text"]').value;
    var url = document.querySelector('input[type="url"]').value;
    link.textContent = name;
    link.href = url;
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="url"]').value = '';
}

function changeListStyle() {
    var orderedList = document.querySelector('ol');
    var unorderedList = document.createElement('ul');
    unorderedList.innerHTML = orderedList.innerHTML;
    orderedList.replaceWith(unorderedList);

}

function changeDiv3Style() {
    var arrayofDivs = document.getElementsByClassName('logic');
    for (var i = 0; i < arrayofDivs.length; i++) {
        if (i == 3) {
            arrayofDivs[i - 1].style.backgroundColor = 'navy';
            arrayofDivs[i - 1].style.color = 'white';
        }
    }
}
