const first_minus =document.getElementById("first_minus");
const first_plus =document.getElementById('first_plus');
const second_minus =document.getElementById("second_minus");
const second_plus =document.getElementById("second_plus");

const first_number =document.getElementById("first_number");
const second_number =document.getElementById("second_number");

const remove_1 =document.getElementById("remove_1");
const remove_2 =document.getElementById("remove_2");

const total_1 =document.getElementById("total_1");
const total_2 =document.getElementById("total_2");


const subtotal =document.getElementById("subtotal");
const tax =document.getElementById("tax");
const shippingalltotal =document.getElementById("shippingalltotal");
const alltotal =document.getElementById("alltotal");

let sTNumber=Number(subtotal.textContent);
let tax1=Number(tax.textContent);
let totalNumber=Number(alltotal.textContent);
let f1=Number(first_number.textContent); 
let f2=Number(total_1.textContent);
let f3=Number(second_number.textContent); 
let f4=Number(total_2.textContent);

first_plus.addEventListener("click",(e)=>{
    
    //? butona tıklandığında 1.sayıyı artır 2.total ücret ekle 3.subtotale totali ekle 4subtotalden taxi hesapla 5.subtotal+tax+ship alltotale ata

    
     
    f1=f1+1;
    f2=(54.99)*f1;
    first_number.textContent=''+f1;
    total_1.textContent=''+f2;
    sTNumber=f2+f4;
    subtotal.textContent=''+sTNumber;
    tax1=(sTNumber * (0.18)).toFixed(2);
    tax.textContent=''+tax1;

    totalNumber=(+sTNumber)+(+tax1)+(+19);
    alltotal.textContent=''+totalNumber;

    return totalNumber;
}
)

first_minus.addEventListener("click",(e)=>{
    
    //? butona tıklandığında 1.sayıyı artır 2.total ücret ekle 3.subtotale totali ekle 4subtotalden taxi hesapla 5.subtotal+tax+ship alltotale ata

    
    f1=f1 - 1;
    f2=(54.99)*f1;
    if(f1<0 ){
        return f1=0;//!Daha sonra ürün silinmesi için güncellenecek
    } 
    first_number.textContent=''+f1;
    total_1.textContent=''+f2;

    sTNumber=f2+f4;
    subtotal.textContent=''+sTNumber;
    tax1=(sTNumber * (0.18)).toFixed(2);
    tax.textContent=''+tax1;

    totalNumber=(+sTNumber)+(+tax1)+(+19);
    alltotal.textContent=''+totalNumber;
    
}
)




second_plus.addEventListener("click",(e)=>{
    
    //? butona tıklandığında 1.sayıyı artır 2.total ücret ekle 3.subtotale totali ekle 4subtotalden taxi hesapla 5.subtotal+tax+ship alltotale ata

    
     
    f3=f3+1;
    f4=(45.99)*f3;
    second_number.textContent=''+f3;
    total_2.textContent=''+f4;
    sTNumber=f2+f4;
    subtotal.textContent=''+sTNumber;
    tax1=(sTNumber * (0.18)).toFixed(2);
    tax.textContent=''+tax1;

    totalNumber=(+sTNumber)+(+tax1)+(+19);
    alltotal.textContent=''+totalNumber;

    return totalNumber;
}
)

second_minus.addEventListener("click",(e)=>{
    
    //? butona tıklandığında 1.sayıyı artır 2.total ücret ekle 3.subtotale totali ekle 4subtotalden taxi hesapla 5.subtotal+tax+ship alltotale ata

    
    f3=f3 - 1;
    f4=(45.99)*f3;
    if(f3<0 ){
        return f1=0;//!Daha sonra ürün silinmesi için güncellenecek
    } 
    second_number.textContent=''+f3;
    total_2.textContent=''+f4;

    sTNumber=f2+f4;
    subtotal.textContent=''+sTNumber;
    tax1=(sTNumber * (0.18)).toFixed(2);
    tax.textContent=''+tax1;

    totalNumber=(+sTNumber)+(+tax1)+(+19);
    alltotal.textContent=''+totalNumber;
    
}
)






