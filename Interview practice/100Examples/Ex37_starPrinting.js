function starPrint(rows){
    for(i=0;i<rows;i++){
        var row=''
        for(j=0;j<rows-i-1;j++){
            row+=" "

        }
        for(k=0;k<2*i+1;k++){
            row+='*'
        }
        console.log(row);
    }

}
starPrint(5)