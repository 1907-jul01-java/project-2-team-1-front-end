import { Component } from '@angular/core';

//Banner pixels:50
@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <img width="100%" height="100" src="assets/anime_header.png">
    </div><div style="text-align:center">
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'the Anime Interactive Database';
}
