import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
    
  private url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }
  
  public getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url);
  }

  public createUser(userdetails){

    //this.httpClient.post<any>('http://localhost:6164/user/create', { country: 'someecountyyyyy', name: 'abcdddd' }).subscribe({

      this.httpClient.post<any>('http://localhost:3000/posts', userdetails).subscribe({  

    next: data => {

          console.log(JSON.stringify(data));

      },

      error: error => {

          console.error('There was an error!', error);

      }

  })
  
}
public deleteUser(userdetails){

  //this.httpClient.post<any>('http://localhost:6164/user/create', { country: 'someecountyyyyy', name: 'abcdddd' }).subscribe({

    this.httpClient.delete<any>('http://localhost:3000/posts/'+ userdetails.id).subscribe({  

  next: data => {

        console.log(JSON.stringify('Deleted'+data));

    },

    error: error => {

        console.error('There was an error!, during declaration', error);

    }

})

}
}