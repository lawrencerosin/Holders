export async function displayPropertyBoxes(){
    const databaseMenu:HTMLSelectElement=document.getElementById("databaseMenu") as HTMLSelectElement, chartMenu:HTMLSelectElement=document.getElementById("chartMenu") as HTMLSelectElement;
    const added:HTMLFormElement=document.getElementsByName("added")[0] as HTMLFormElement;
    const propertyAPI=await fetch(`http://localhost:9000/properties?database=${databaseMenu.value}&chart=${chartMenu.value}`);
    const properties=await propertyAPI.json();
    
    for(let property of properties){
        const propertyBox:HTMLInputElement=document.createElement("input");
        propertyBox.setAttribute("placeholder", property.name);
        switch(property.type){
            case "Real":
                propertyBox.setAttribute("type", "number");
                break;
            case "Integer":
                propertyBox.setAttribute("type", "number");
                propertyBox.setAttribute("step", "1");
                break;
            case "Character":
                propertyBox.setAttribute("type", "text");
                propertyBox.setAttribute("minlength", "1");
                propertyBox.setAttribute("maxlength", "1");
                break;
            case "Boolean":
                propertyBox.setAttribute("type", "checkbox");
                break;
            default:
                propertyBox.setAttribute("type", "text");

        }
        added.appendChild(propertyBox);
    }
   }