import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cards';
  posts = [
    {
      title: 'This is a super bike',
      imageUrl: 'assets/biking.jpeg',
      username: 'biker',
      content: 'Checkout out this cool thing!',
    },
    {
      title: 'This is a best tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'naturelover',
      content: 'One of the best tree pics',
    },
    {
      title: 'Guess the mountain name!',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainclimber',
      content: 'I have already climbed this mountain!',
    },
    {
      title: 'Guess the mountain name!',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainclimber',
      content: 'I have already climbed this mountain!',
    },
  ];
}
