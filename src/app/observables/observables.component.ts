import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  title = 'observablesDemo';
  data;
  err;
  constructor(private serv: ServiceService) { } 
   
    ngOnInit() { 
       console.log('************************** ngOnInit ***********************************');
       const observable = new Observable(observer => {
        observer.next(1);
        observer.next(2);
        observer.complete();
    });
    observable.subscribe(
        data => console.log("Received data: ", data),
        error => console.log("Error occurred: ", error),
        () => console.log("Data stream completed"),
    )


    } 
    demo1(){
      console.log('************************** DEMO 1 ***********************************');
      const d1 = new Observable(countOnetoTen); 
      d1.subscribe({ 
          next(num) { console.log(num); } 
      }); 

      function countOnetoTen(observer) { 
            
          for(var i = 1; i <= 10; i++) { 
              observer.next(i); 
          } 
      } 

    }
    demo2(){
       console.log('******************************* DEMO 2 ***********************************');
      const d2 = new Observable(generateError);  
      d2.subscribe({ 
          next(num) { console.log(num) }, 
          error(err) { console.log('Error Somewhere')} 
      }); 
        
      function generateError(observer){ 
          observer.next(1)
          observer.error( "Welcome" ); 
          observer.next(2)
      } 
    }
    
    demo3(){
       console.log('******************************* DEMO 3 **********************************');
       const d1 = new Observable(countOnetoTen); 
       d1.subscribe({ 
           next(num) { console.log(num); }, 
           error(err) { console.log("Error Occurred") },
           complete(){console.log("Completed!!!!")} 
       }); 
       function countOnetoTen(observer){ 
             
           for(var i = 1; i <= 10; i++) { 
               observer.next('2 * ' + i + ' = ' + i*2); 

           } 
           observer.complete();
           observer.next(3) 
       } 
    }

    demo4(){
      console.log('******************************* DEMO 4 **********************************');
       const observable = new Observable(observer => {
        setTimeout(() => { observer.next(1); }, 2000);
        setTimeout(() => { observer.next(2); }, 1000);
        setTimeout(() => { observer.next(3); }, 1000);
        setTimeout(() => { observer.error(4); }, 2500);
        setTimeout(() => { observer.complete(); }, 2000);
      });
      console.log('Before subscribe call');
      observable.subscribe(
          data => console.log("Received Data: ", data),
          error => console.log("Error occurred: ", error),
          () => console.log("Data stream completed"),
      )
      console.log('After subscribe call');
    }

    demo5(){
       console.log('******************************* DEMO 5 **********************************');
       const myObservable = of(1,'apple',2, 'orange',3, 'grappe',['mom','dad'],2/0);

      const myObserver = {
        next: (x: string) => console.log('Next value: ' + x),
        error: (err: string) => console.error('Error: ' + err),
        complete: () => console.log('Complete notification'),
      };
      myObservable.subscribe(myObserver);
    }


    demo6(){
       console.log('******************************* DEMO 6 **********************************');
       this.serv.getJSON().subscribe(
        success => {
          this.data = success;
          // console.log(this.data);
          // this.data = datas.map(d => {if(d.id<=5) return d })
        },
        error => this.err = error 
      )
    }
}
