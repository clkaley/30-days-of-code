function main() {
    const n = parseInt(readLine().trim(), 10);
    
    for(var i=1;i<=10;i++){
        var result;
        result=n*i;
        console.log(n,"x",i, "=", result);
    }
}
