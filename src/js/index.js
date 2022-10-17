const tblStudent = document.getElementById('tbl-student');
const btnNew = document.getElementById('btn-new');
const btnSave = document.getElementById('btn-save');
const btnClear = document.getElementById('btn-clear');
const txtId = document.getElementById('txt-id');
const txtName = document.getElementById('txt-name');
const txtAddress = document.getElementById('txt-address');
const txtContact = document.getElementById('txt-contact');

// console.log(tblStudent,btnNew,btnSave,btnClear,txtId,txtName,txtAddress,txtContact);

btnNew.addEventListener('click',()=>{
    [txtId, txtName, txtContact,txtAddress,btnSave,btnClear].forEach(ctrl => ctrl.disabled = false);
    txtName.focus;
    txtId.value = generateNewStudentId();
})


function generateNewStudentId(){
    /* Todo: implementation of ID */
    return "S001";
}