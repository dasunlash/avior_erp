import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.studentService.formModel.reset();
  }

  onSubmit(from:NgForm){

  }
}
