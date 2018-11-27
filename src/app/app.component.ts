import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'g';

  observable$ = new Observable( subscriber => {
  
    let array = [1,2,3,4,5,6,7,8,9,10];
    
    

    array.forEach((element)=>{
      subscriber.next(element)
    });

    subscriber.complete();


  });

  constructor(){

      var obs = {

      next(msg){
          console.log(msg);
      },
      complete(){}
        
    };

    //rxmables.com
    
    this.observable$.pipe(
      //map( nro=> <number>nro * 2 ),
      //ilter( nro=> <number>nro >= 4),
      filter( nro=> <number>nro%2 ==0 )
    )
    .subscribe(obs);
  }
}
