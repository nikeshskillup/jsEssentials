// Initialize arrays
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Step 1: Map method for breakfastMenu
const breakfastMenuItemsHTML = breakfastMenu
    .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
    .join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Step 2: forEach method for mainCourseMenu
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Step 3: For loop for dessertMenu
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
