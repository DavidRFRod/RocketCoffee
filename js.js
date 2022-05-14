
function openMenu(){
    const menu = document.getElementById('menu-list');
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
        menu.style.transition = "2s ease"
    }
}
// function toggleMenu() {
//     var menuBox = document.getElementById('menu-box');    
//     if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
//       menuBox.style.display = "none";
//     }
//     else { // if is menuBox hidden, display it
//       menuBox.style.display = "block";
//     }
//   }