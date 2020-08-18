import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersGQL } from './graphql.component.graphql-gen';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.css']
})
export class GraphqlComponent implements OnInit {

  usersName$: Observable<string[]>;

  constructor(userNameService: UsersGQL) {
    this.usersName$ = userNameService.fetch({}).pipe(
      map(result => result.data.users.data.map(user => user.name)),
    );
  }

  ngOnInit(): void {
  }

}
