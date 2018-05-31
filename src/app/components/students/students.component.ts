import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  private firstName:string;
  private lastName:string;
  private studentID:number;
  private faculty:string;
  private major:string;
  private skills:string[];
  private address: {
    city:string,
    province:string,
    postcode:number
  }

  constructor() { }

  ngOnInit() {
    this.firstName = "Suphakiat";
    this.lastName = "Kiatkanya";
    this.studentID = 58160433;
    this.faculty = "Informatics";
    this.major = "Information Technology";

    this.skills = ["Eating", "Coding", "Sleep"];

    this.address = {
      city: "Taphaya",
      province: "Sakao",
      postcode: 27180
    }
  }

  private addSkill(skill) {
    this.skills.unshift(skill); // push ขึ้นด้านบน
    return false;
  }

  private deleteSkill(skill) {
    // this.skills.splice(skill, 1); ส่ง index มาลบได้เลย
    this.skills.forEach((element, index) => {
      if(element == skill) {
        this.skills.splice(index, 1);
      }
    });
    return false;
  }
}