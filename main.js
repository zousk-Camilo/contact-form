const $inputName = document.querySelector(".nombre__input");
const $inputLastName = document.querySelector(".lastname__input");
const $nameErrorField = document.querySelector(".form__error__name__description")
const $lastNameErrorField = document.querySelector(".form__error__lastname__description")
const $inputEmail = document.querySelector(".email__input");
const $emailErrorField = document.querySelector(".form__error__email__description")
//variables query checked 

const $gEnquiryBtn = document.querySelector('#input__checkbox-id1');
const $sRequestBtn = document.querySelector("#input__checkbox-id2");
const $labelEquiry = document.querySelector("#label__checkbox-id1");
const $labelRequest = document.querySelector("#label__checkbox-id2");

//textarea
const $textArea = document.querySelector(".text__area");
const $textAreaError = document.querySelector(".error__message");

console.log($textArea)

//terms

const $terms = document.querySelector('#terminos_id');
const $termsError = document.querySelector('.error__message-terminos');


//submit variable
const submitBtn = document.querySelector(".submit");
const $modalSubmit = document.querySelector(".modal__submit-message");



const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

let validations = {
    name: false,
    apellidos: false,
    email: false,
    text:false
}


$inputName.addEventListener("keyup",e=>{
    console.log(expresiones.nombre.test(e.target.value))
    if(!expresiones.nombre.test(e.target.value)){
        $inputName.classList.add("nombre__error-active");
        $nameErrorField.classList.add("form__error__name__description-active")
        validations.name = false
        console.log(validations.name)
    }else{
        $inputName.classList.remove("nombre__error-active")
        $nameErrorField.classList.remove("form__error__name__description-active");
        validations.name = true;
    }
})
$inputName.addEventListener('blur', e=>{
    if(e.target.value === ""){
        $inputName.classList.remove("nombre__error-active");
        $nameErrorField.classList.remove("form__error__name__description-active");
    }
})

$inputLastName.addEventListener("keyup",e=>{
    if(!expresiones.nombre.test(e.target.value)){
        $inputLastName.classList.add("nombre__error-active")
        $lastNameErrorField.classList.add("form__error__lastname__description-active");
        validations.apellidos = false;
    }else{
        $inputLastName.classList.remove("nombre__error-active")
        $lastNameErrorField.classList.remove("form__error__lastname__description-active");
        validations.apellidos = true;
    }
})
$inputLastName.addEventListener('blur', e=>{
    if(e.target.value === ""){
        $inputLastName.classList.remove("nombre__error-active")
        $lastNameErrorField.classList.remove("form__error__lastname__description-active");
        
    }
})

$inputEmail.addEventListener("keyup",e=>{
    if(!expresiones.correo.test(e.target.value)){
        $inputEmail.classList.add("email__input-error");
        $emailErrorField.classList.add("form__error__email__description-active");
        validations.email = false
    }else{
        $inputEmail.classList.remove("email__input-error");
        $emailErrorField.classList.remove("form__error__email__description-active");
        validations.email = true
    }
})
$inputEmail.addEventListener('blur', e=>{
    if(e.target.value === ""){
        $inputEmail.classList.remove("form__error__email__description-active");
        $emailErrorField.classList.remove("form__error__email__description-active");
        $inputEmail.classList.remove("email__input-error");
        validations.email = false
    }
});



//general enquiry - support request checkbox

$gEnquiryBtn.addEventListener('click', (e)=>{
    if(e.target.checked){
        $labelEquiry.classList.add("label__checkbox-1-active");
        $labelRequest.classList.remove("label__checkbox-2-active");
        $sRequestBtn.checked = false
    }else{
        $labelEquiry.classList.remove("label__checkbox-1-active");
    };
    
});

$sRequestBtn.addEventListener('click',(e)=>{
    if(e.target.checked){
        $labelRequest.classList.add("label__checkbox-2-active");
        $gEnquiryBtn.checked = false;
        $labelEquiry.classList.remove("label__checkbox-1-active");
    }else{
        $labelRequest.classList.remove("label__checkbox-2-active");
    };
});


//text area request function

$textArea.addEventListener("keyup", (e)=>{
    if(e.target.value === ""){
        $textAreaError.classList.add('error__message-active')
        validations.text = false
    }else{
        $textAreaError.classList.remove('error__message-active');
        validations.text = true
    }
})


//submit btn
submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(validations.name && validations.apellidos && validations.email && $terms.checked && validations.text){
        console.log("enviado");
        if($gEnquiryBtn.checked || $sRequestBtn.checked){
            $modalSubmit.classList.add("modal__submit-message-active")
            $termsError.classList.remove("error__message-terminos-active")

            setTimeout(()=>{
                $modalSubmit.classList.remove("modal__submit-message-active")
            },3000)   
        }
    }else{
       $termsError.classList.add("error__message-terminos-active")
    }
})
