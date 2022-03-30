function show_menu(){
    let menu = document.getElementById("my-menu");

    if(menu.className == "menu"){
        menu.className += " responsive";}
    else{
        menu.className = "menu";
    }
}