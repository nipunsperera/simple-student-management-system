const tblStudent = document.getElementById('tbl-student');
const btnNew = document.getElementById('btn-new');
const btnSave = document.getElementById('btn-save');
const btnClear = document.getElementById('btn-clear');
const txtId = document.getElementById('txt-id');
const txtName = document.getElementById('txt-name');
const txtAddress = document.getElementById('txt-address');
const txtContact = document.getElementById('txt-contact');
const frmStudent = document.getElementById('frm-student');

// console.log(tblStudent,btnNew,btnSave,btnClear,txtId,txtName,txtAddress,txtContact, frmStudent);


class Student{
    id;
    name;
    address;
    contact;
    rowElm;


    constructor(id,name,address,contact){
        this.id = id;
        this.name= name;
        this.address = address;
        this.contact = contact;

        this.rowElm = tblStudent.tBodies[0].insertRow();
        const idCell = this.rowElm.insertCell();
        const nameCell = this.rowElm.insertCell();
        const contactCell = this.rowElm.insertCell();
        const removeCell = this.rowElm.insertCell();

        idCell.innerText = this.id;
        nameCell.innerText = this.name;
        contactCell.innerText = this.contact;
        removeCell.innerHTML = `<i class="bi bi-trash"></i>`;

        tblStudent.classList.remove('empty');
    }
}




frmStudent.addEventListener('submit',(eventData)=>{
    eventData.preventDefault(); /* Prevent from going to form provided link when submitting */
});

frmStudent.addEventListener('reset',(eventData)=>{
    eventData.preventDefault();
    [txtName,txtAddress,txtContact].forEach(input => {
        input.value = '';
        input.classList.remove('is-invalid');
    });
    txtName.focus();
});

const regExp4Name = /^[A-Za-z]+$/;
const regExp4Address = /[A-Za-z0-9,:./\- ]+/;
const regExp4Contact = /^\d{3}-\d{7}$/;

const inputListener = (eventData)=>{
    eventData.target.classList.remove('is-invalid');
};

[txtName,txtContact,txtAddress].forEach(input => input.addEventListener('input',inputListener));


btnNew.addEventListener('click',()=>{
    [txtId, txtName, txtContact,txtAddress,btnSave,btnClear].forEach(ctrl => ctrl.disabled = false);
    txtName.focus;
    txtId.value = generateNewStudentId();
    btnClear.click();
})

btnSave.addEventListener('click',()=>{
    let invalidInput = null;
   if(!regExp4Name.test(txtName.value.trim())){
    txtName.classList.add('is-invalid');
    invalidInput = txtName;
   }
   if(!regExp4Address.test(txtAddress.value.trim())){
    txtAddress.classList.add('is-invalid');
    if(!invalidInput) invalidInput = txtAddress;
    
   }
   if(!regExp4Contact.test(txtContact.value.trim())){
    txtContact.classList.add('is-invalid');
    if(!invalidInput) invalidInput = txtContact;
   }
   
   if(invalidInput){
    invalidInput.select();
    return;
   }

   new Student(txtId.value, txtName.value, txtAddress.value, txtContact.value);
});


function generateNewStudentId(){
    /* Todo: implementation of ID */
    return "S001";
}

