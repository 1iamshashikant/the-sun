let mul= fun (x,y)
{
    console.log(x*y);
}
let mulbytwo=mul.bind(this,3);
mulbytwo(5);