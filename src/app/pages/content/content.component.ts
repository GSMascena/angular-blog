import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private id : string | null = "0"
  contentPhoto : string = "../../../assets/imgs/placeholder.jpg"
  contentTitle : string = "Sample Title"
  contentDescription : string = "Quisque sodales urna tortor, vitae posuere velit pulvinar eget. Ut condimentum quam ac enim varius, sed viverra tortor consectetur. Proin sapien metus, volutpat id dictum id, aliquam a sem."

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id =  value.get('id')
    )
    console.log(this.id)
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id : string | null) {
    if (id != null) {
      const result = dataFake.filter(article => article.id == parseInt(id))[0]
      this.contentTitle = result.title
      this.contentPhoto = result.photo
      this.contentDescription = result.description
    }
  }
}
