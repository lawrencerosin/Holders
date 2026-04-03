export default class Property{
    constructor(name, type, value){
        this.name=name;
        this.type=type;
        this.value=value;
    }
    toString(){
        return `[name:${this.name}, type:${this.type}, value:${this.value}]`;
    }
}