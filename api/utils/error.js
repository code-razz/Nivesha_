export const createError=(status,message)=>{
    const err=new Error();   //creted and errror object
    err.status=status;
    err.message=message;
    return err;
};