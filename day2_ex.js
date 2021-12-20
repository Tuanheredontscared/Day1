
let studentOb = [

]


function createTr(person) {
        let trElement = document.createElement('tr');

        let tdName = document.createElement('td');
        tdName.innerHTML = person.name

        let tdAge = document.createElement('td');
        tdAge.innerHTML = person.age;
        
        let tdGender = document.createElement('td')
        tdGender.innerHTML = person.gender

        
        trElement.appendChild(tdName);
        trElement.appendChild(tdAge);
        trElement.appendChild(tdGender)
        let tbody = document.getElementById('tableBody');
        tbody.appendChild(trElement);
}


function displayStudentList() {
        let tbody = document.getElementById('tableBody');
        tbody.innerHTML = '';
        for(let a = 0; a < studentOb.length; a++) {
                createTr(studentOb[a])
       }
}

displayStudentList();
function createStudent() {
        let personName = document.getElementById('info1')
        let personAge = document.getElementById('info2')
        let personGender = document.getElementById('info3')
        let infoPerson = {
                name:personName.value,
                age:personAge.value,
                gender:personGender.value,
        };
        studentOb.push(infoPerson)
        displayStudentList()
}
