export function checkComparison(value1, operation, value2){
    switch(operation){
        case '=?':
            return value1==value2;
        case '/=':
            return value1!=value2;
        case '>':
            return value1>value2;
        case '<':
            return value1<value2;
        case '>=':
            return value1>=value2;
        default:
            return value1<=value2;
    }
}