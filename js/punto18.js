function fibonacci(){
    let n1 = 0;
    let n2 = 1;
    for(let i = 0; i <8; i++){
        let num = n1 + n2;
        n1 = n2;
        n2 = num;
    }
    document.write(n2);
}

fibonacci();