const categoryCount = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryCount.length}`);


const titleText = document.querySelectorAll('h2');

titleText.forEach(function (element) {
    console.log(`Category: ${element.textContent}`);
    console.log(`Elements: ${element.nextElementSibling.children.length}`);
});



