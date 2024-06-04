function sql_get_rg(args) {

    /*
        args is a map that has always three members:
        > value: in the document field value OR the column value specified in the Directive, by enclosing it in <>.
        > column: is just the column name, always the TABLE's column name. When using with a diferent col name like 
            sql_get_rg<SOME>, column won't take that name and remain always associated to the original field where this func is applied.
        > datatype: column's data type
    */

    if ((args.value === null) || (args.value === undefined)) return null;
    
    // Is it always in the same position? Apparently yes, I could not find any official documentation confirming this.
    // If that is the case, this solution is much faster than searching for the exact position in the array.
    
    // In functions, any improvement in the code, even if it seems small, has an impact. Bear in mind that the parallel JS contexts are limited
    // and this function is called PER ROW!, therefore the sooner we release the context the better the overall performance.
    return args.value.split("/")[4];
}