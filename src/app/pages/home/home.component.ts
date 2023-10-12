import { Component, OnDestroy, OnInit } from '@angular/core';
import { dataFake, data } from '../../data/dataFake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  dataArray : data[] = []
  mainNews : data = { id : 0,
                      photo : "",
                      title : "" ,
                      description : ""}

  constructor() {
    this.mainNews = dataFake[0]
    console.log(this.mainNews)
    dataFake.shift()
    this.dataArray = dataFake
  }

  ngOnDestroy(): void {
    dataFake.unshift(this.mainNews)
  }

  ngOnInit(): void {
  }
}
