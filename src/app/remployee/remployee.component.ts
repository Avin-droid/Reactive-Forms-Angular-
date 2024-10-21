import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {Employee} from '../employee'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-remployee',
  templateUrl: './remployee.component.html',
  styleUrls: ['./remployee.component.css']
})
export class REmployeeComponent implements OnInit{
  empArr:Array<Employee>=[]
  frmemp=new FormGroup({
    emp_id:new FormControl(),
    emp_name:new FormControl(),   
    address:new FormControl(),
    dept:new FormControl(),
    salary:new FormControl(),
    join_date:new FormControl(),
    birth_date:new FormControl(),
  })

  empObj:Employee=
  {
    emp_id:0,
    emp_name:'',
    address:'',
    dept:'',
    salary:0,
    join_date:new Date(),
    birth_date:new Date(),
  }

  constructor(private fb:FormBuilder){}

  ngOnInit()
  {
    this.frmemp=this.fb.group({
      emp_id:[this.empObj.emp_id,[Validators.pattern('^[0-9]+'),Validators.required,Validators.min(1)]],
      emp_name:[this.empObj.emp_name,[Validators.pattern('^[a-zA-Z]+'),Validators.required,Validators.minLength(1),Validators.maxLength(30)]],
      address:[this.empObj.address,[Validators.pattern('^[a-zA-Z0-9]+'),Validators.required,Validators.minLength(1),Validators.maxLength(40)]],
      dept:[this.empObj.dept,[Validators.pattern('^[a-zA-Z]+'),Validators.required]],
      salary:[this.empObj.salary,[Validators.pattern('^[0-9,]+'),Validators.required,Validators.min(0)]],
      join_date:[this.empObj.join_date,[Validators.required]],
      birth_date:[this.empObj.birth_date,[Validators.required]],
     })
  }

  e:Employee=
  {
    emp_id:0,
    emp_name:'',
    address:'',
    dept:'',
    salary:0,
    join_date:new Date(),
    birth_date:new Date()
  }

  archive()
  {
    this.e=
    {
      emp_id:this.empObj.emp_id,
      emp_name:this.empObj.emp_name,
      address:this.empObj.address,
      dept:this.empObj.dept,
      salary:this.empObj.salary,
      join_date:this.empObj.join_date,
      birth_date:this.empObj.birth_date,
    }

    let temp={...this.e}
    this.empArr.push(temp)
    this.e=
    {
      emp_id:0,
      emp_name:'',
      address:'',
      dept:'',
      salary:0,
      join_date:new Date(),
      birth_date:new Date()
    }
  }

  clear(index:number)
  {
    this.empArr.splice(index,1)
  }
}
