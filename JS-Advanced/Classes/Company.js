class Company{
    constructor(){
        this.departments= {};
    }
    addEmployee(name,salary,position,department){

        if(name === ''||
        name===undefined||
        name ===null||
        salary === ''||
        salary===undefined||
        salary ===null||
        position === ''||
        position===undefined||
        position ===null||
        department === ''||
        department===undefined||
        department ===null||
        salary<0){
            throw new Error('Invalid input!');
        }
        if(this.departments[department]===undefined){
            this.departments[department]={
                averageSalary: 0
            };
            this.departments[department][name] = {
                salary:salary,
                position:position
            };

        }
        else{
            this.departments[department][name] = {
                salary:salary,
                position:position
            };

        }
        return `New employee is hired. Name: ${name}. Position: ${position}`

    }
    bestDepartment(){
        let count = 0;
        for(let dep in this.departments){
            count = 0;
          for(let employee in this.departments[dep]){
            if(employee !== 'averageSalary'){
                this.departments[dep].averageSalary += Number(this.departments[dep][employee].salary);
                count++;
            }
        }
        this.departments[dep].averageSalary= Math.round(this.departments[dep].averageSalary/count);
        }
        let max = -10;
        let resultObj = {};
        for(let dep in this.departments){
            if( this.departments[dep].averageSalary > max){
                resultObj[dep] = this.departments[dep];
                max =  this.departments[dep].averageSalary;
            }
        }
        let string = '';
        let countEmp =1;
        let result =[];
        for(let employee in resultObj){
            string +=`Best Department is: ${employee}${'\n'}`;
            for(let emp in resultObj[employee]){
                if(countEmp === 1){
                    string+= `Average salary: ${Number(resultObj[employee][emp]).toFixed(2)}${'\n'}`;
                }
                else{
                    let obj = {
                        name:emp,
                        salary:resultObj[employee][emp].salary,
                        position: resultObj[employee][emp].position

                    }
                    result.push(obj);
                }
                countEmp++;
        }
    }
        result.sort((a,b)=>b.salary-a.salary||a.name.localeCompare(b.name));
        for(let emp of result){
            string+= `${emp.name} ${emp.salary} ${emp.position}${'\n'}`;
        }
        return string.trimEnd();
    }
}
