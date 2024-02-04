import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logged_in: Boolean = false;
  language: String = 'English';
  user_role: String;
  current_url: String;

  constructor(private translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.current_url = event.url;
      debugger
      // You can perform actions based on the URL change
    });
  }

  ngDoCheck() {
    this.user_role = sessionStorage.getItem("role");
    // console.log(this.user_role);

    const user_session_id = sessionStorage.getItem("user_session_id")
    if (user_session_id) {
      this.logged_in = true;
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    if (language == 'en') {
      this.language = "English";
    } else if (language == 'hn') {
      this.language = "हिंदी(Hindi)";
    }
  }

  logOut() {
    debugger
    sessionStorage.removeItem("user_session_id");
    sessionStorage.removeItem("role");
    this.router.navigateByUrl('/');
    location.reload()
  }

}
