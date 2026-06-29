export function createConditionCommand():string{
    let condition:string="";
    const conditions:HTMLFormElement=document.getElementById("conditions") as HTMLFormElement;

    const conditionParts:NodeListOf<HTMLSelectElement>|NodeListOf<HTMLInputElement>=conditions.querySelectorAll("input,select") as NodeListOf<HTMLSelectElement>|NodeListOf<HTMLInputElement>;
    for(let conditionPart of conditionParts)
        condition+=conditionPart.value+"|";
    return condition;
}
