function Print_table(N) {
    for (let i=1;i<=10;i++) {
        var table=N*i;
        console.log(`${N} * ${i} = ${table}`);
    }
}

const tb = parseInt(prompt("Enter the table number"));
Print_table(tb);
