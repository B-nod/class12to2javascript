const displayMgs = (id, mgscolor, mgs) =>{
    document.getElementById(id).innerHTML = `${mgs}`
    document.getElementById(id).style.color = `${mgscolor}`

}


const firstNameValidation =()=>{
    const fname = document.getElementById("fname").value
    if(fname === ""){
        displayMgs('fnamemgs', 'red', 'First Name is mandotory')
        return false
    }
    else if(!fname.match(/^([a-zA-Z])+$/)){
        displayMgs('fnamemgs', 'red', 'First Name doesnot contain number')
        return false
    }
    else if(fname.length <2){
        displayMgs('fnamemgs', 'red', 'First Name must be more than 1 character')
        return false
    }
    
    else{
        displayMgs('fnamemgs', 'green', 'First Name is valid')
        return true
    }
}

const lastNameValidation = ()=>{
    const lname = document.getElementById('lname').value
    if(lname === ""){
        displayMgs('lnamemgs', 'red', 'Last Name is mandotory')
        return false
    }
    else if(!lname.match(/^([a-zA-Z])+$/)){
        displayMgs('lnamemgs', 'red', 'Last Name must contain only alphabets')
        return false
    }
    else if(lname.length <2){
        displayMgs('lnamemgs', 'red', 'Last Name must be more than 1 character')
        return false
    }
    
    else{
        displayMgs('lnamemgs', 'green', 'Last Name is valid')
        return true
    }
}


const emailValidation=()=>{
    const email = document.getElementById('email').value
    if(email === ""){
        displayMgs('emailmgs', 'red', 'Email is mandotory')
        return false
    }
    else if(!email.match(/^([a-zA-Z])[a-z0-9\-\_\$]+\@+([a-z])+\.+([a-z])+$/)){
        displayMgs('emailmgs', 'red', 'Invalid email format')
        return false
    }
    else if (email.length < 2){
        displayMgs('emailmgs', 'red', 'Email must be more than 1 character')
        return false
    }
    else{
        displayMgs('emailmgs', 'green', 'Email is valid')
        return true
    }
}

const numberValidation = ()=>{
    const contact = document.getElementById('contact').value
    if(contact === ""){
        displayMgs('contactmgs', 'red', 'Contact is mandotory')
        return false
    }
    else if(!contact.match(/^([0-9]).{9,9}$/)){
        displayMgs('contactmgs', 'red', 'Contact number must be 10 digits')
        return false
    }
    else if (contact.length < 2){
        displayMgs('contactmgs', 'red', 'contact must be more than 1 character')
        return false
    }
    else{
        displayMgs('contactmgs', 'green', 'contact is valid')
        return true
    }
}

const pwdValidation = ()=>{
    const pwd = document.getElementById('password').value
    if(pwd ===""){
        displayMgs('passwordmgs', 'red', 'Password is mandotory')
        return false
    }
    else if(!pwd.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\@\#\$\\^\&]).{8,50}$/)){
        displayMgs('passwordmgs', 'red', 'weak password. Password must containe one uppercase, one number, one lowercase, one special character and must be 8 character.')
        return false
    }
    else{
        displayMgs('passwordmgs', 'green', 'Strong password')
        return true
    }
}

const cpwdValidation =()=>{
    const cpwd = document.getElementById('cpwd').value
    const pwd = document.getElementById('password').value

    if(cpwd == pwd){
        displayMgs('cpwdmgs', 'green', 'Password matched')
        return true
    }else{
        displayMgs('cpwdmgs', 'red', 'Password didnot match')
        return false
    }
}

const validform=()=>{
    if(firstNameValidation()&&lastNameValidation() && emailValidation() && numberValidation() && pwdValidation() && cpwdValidation()){
        return true
    } else{
        return false
    }
}