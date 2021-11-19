export const Theme = {

    addButton: function (){
        let flag = "light";
        let button = document.createElement("div");
        button.className = "themeButton";
        button.innerHTML = "Changer de theme";
        document.body.prepend(button);

        button.addEventListener("click", ()=>{
            if (flag === "dark"){
                this.light();
                flag = "light";
            }
            else {
                this.dark();
                flag = "dark";
            }
        });

    },

    dark: function (){
        document.body.style.backgroundColor = "#2f2f2f";
        document.body.style.color = "#bebebe";
    },

    light: function (){
        document.body.style.backgroundColor = "#f3f3f3";
        document.body.style.color = "#2f2f2f";
    }
}