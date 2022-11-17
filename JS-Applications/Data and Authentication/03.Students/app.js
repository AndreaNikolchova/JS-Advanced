async function table(){
    let tbody =  document.getElementsByTagName('tbody')[0];
    let promise = await fetch(`http://localhost:3030/jsonstore/collections/students`);
    let data = await promise.json();
    for(let obj in data){
        let tr = document.createElement('tr');
        let tdFirstName = document.createElement('td');
        tdFirstName.textContent = data[obj].firstName;
        let tdLastName = document.createElement('td');
        tdLastName.textContent = data[obj].lastName;
        let tdFacultyNumber = document.createElement('td');
        tdFacultyNumber.textContent = data[obj].facultyNumber;
        let tdGrade = document.createElement('td');
        tdGrade.textContent = data[obj].grade;
        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdFacultyNumber);
        tr.appendChild(tdGrade);
        tbody.appendChild(tr);
    }
    let button = document.getElementById('submit');
    button.addEventListener('click',async()=>{
        let student = {
            firstName: document.getElementsByTagName('input')[0].value,
            lastName: document.getElementsByTagName('input')[1].value,
            facultyNumber: document.getElementsByTagName('input')[2].value,
            grade: document.getElementsByTagName('input')[3].value,

        }
        await fetch(`http://localhost:3030/jsonstore/collections/students`,{
            method:'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(student)
        });
        let tr = document.createElement('tr');
        let tdFirstName = document.createElement('td');
        tdFirstName.textContent = student.firstName;
        let tdLastName = document.createElement('td');
        tdLastName.textContent = student.lastName;
        let tdFacultyNumber = document.createElement('td');
        tdFacultyNumber.textContent = student.facultyNumber;
        let tdGrade = document.createElement('td');
        tdGrade.textContent = student.grade;
        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdFacultyNumber);
        tr.appendChild(tdGrade);
        tbody.appendChild(tr);
    });

}
table();
