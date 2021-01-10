import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ngtemplatengcontainer',
  templateUrl: './ngtemplatengcontainer.component.html',
  styleUrls: ['./ngtemplatengcontainer.component.css']
})
export class NgtemplatengcontainerComponent implements OnInit {

  links: LinkModel[] = [
    {
      title: 'facebook',
      children: [
        {
          title: 'profile',
          children: []
        },
        {
          title: 'newsfeed',
          children: []
        },
        {
          title: 'group',
          children: [
            {
              title: 'voz',
              children: []
            },
            {
              title: 'angular2vn',
              children: []
            }
          ]
        }
      ]
    },
    {
      title: 'instagram',
      children: [
        {
          title: 'profile',
          children: []
        },
        {
          title: 'following',
          children: []
        }
      ]
    },
    {
      title: 'zalo',
      children: []
    }

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

class LinkModel {
  public title: string;
  public children: LinkModel[];
}
