// pseudo code how it works
function MyPartialPseudo(type: any): any {
    const tranformedType: any = {}; 
    Object.keys(type).forEach(P => {
        makeOptional(P);
        tranformedType[P] = type[P];
    });
    return tranformedType;
}

function makeOptional(P: any): void {}