import { Component } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { map, filter, } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rxjs';

  observable$ = new Observable( subscriber => {
  
    let array = [1,2,3,4,5,6,7,8,9,10];
    
    

    array.forEach((element)=>{
      subscriber.next(element)
    });

    subscriber.complete();


  });

 
  

  constructor(){

     var Observable2$ = of( 1,2,3,4,5,6);
     var subject$ = new Subject();
     subject$.next("Hola->");
     subject$.subscribe(value=> console.log(value));
     

     Observable2$.subscribe(subject$);

     
      var observable = {

      next(msg){
          console.log(msg);
      },
      complete(){}
        
    }


    
    //rxmables.com
/*
    this.observable$.pipe(
      map( nro=> <number>nro * 3 ),
      //ilter( nro=> <number>nro >= 4),
      filter( nro=> <number>nro%2 ==0 )
    )
    .subscribe(observable);
  }
*/
  }
}
