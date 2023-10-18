import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy {
 mobileQuery: MediaQueryList;

  fillerNav = [
    {name: 'Inicio', route: 'home', icon:'home'},
    {name: 'Nosotros', route: 'about-us', icon:'group'},
    {name: 'Productos', route: 'product/catalog', icon:'category'},
    {name: 'Contacto', route: 'contact', icon:'badge'},
    {name: 'Login', route: '../auth/login', icon:'person'},
  ];

  fillerNavScreen = [
    {name: 'Inicio', route: 'home', icon:'home'},
    {name: 'Nosotros', route: 'about-us', icon:'group'},
    {name: 'Productos', route: 'product/catalog', icon:'category'},
    {name: 'Contacto', route: 'contact', icon:'badge'},
  ];


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private router: Router,
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  exit(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
