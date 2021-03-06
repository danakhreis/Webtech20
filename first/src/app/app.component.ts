import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'jf-nav',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class NavComponent {
  title = 'first';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
        );
        constructor(private breakpointObserver: BreakpointObserver) {}
}
