export async function displayPropertyBoxes(){
    const databaseMenu:HTMLSelectElement=document.getElementById("databaseMenu") as HTMLSelectElement, tableMenu:HTMLSelectElement=document.getElementById("tableMenu") as HTMLSelectElement;
    const added:HTMLFormElement=document.getElementsByName("added")[0] as HTMLFormElement;
    const propertyAPI=await fetch(`http://localhost:9000/properties?database=${databaseMenu.value}&chart=${tableMenu.value}`);
    const properties=await propertyAPI.json();
    
    for(let property of properties){
        const propertyBox:HTMLInputElement=document.createElement("input");
        propertyBox.setAttribute("placeholder", property.name);
        added.appendChild(propertyBox);
    }
   }