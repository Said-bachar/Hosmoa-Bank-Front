import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let  time1 = new Date(value);
    let time2 = new Date();
    let timePass = ((time2.getTime()-time1.getTime())/60000);
    let msg = "";
    if(timePass<1) msg = "Just now" ;
    else if ( timePass < 60 && timePass>1) msg = Math.floor(timePass)+" minutes ago";
    else if((timePass/60>=1) && (timePass/60<=24)) msg = Math.floor(timePass/60)+" hours ago";
    else if((timePass/1440) >= 1 && (timePass/1440)<=30) msg = Math.floor(timePass/1440)+" days ago";
    else if((timePass/43200)>=1 && (timePass/43200)<=12) msg = Math.floor(timePass/43200)+" months ago";
    else if((timePass/518400)>=1) msg = Math.floor(timePass/518400)+" years ago";
    return msg;
  }

}
