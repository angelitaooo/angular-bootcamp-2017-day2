import { Component} from '@angular/core';

interface Client {
  id: number,
  fullname: string,
  checkedIn: boolean
}
@Component({
  selector: 'app-angela',
  templateUrl: './angela.component.html',
  styleUrls: ['./angela.component.css']
})
export class AngelaComponent {
    clients: Client[] = [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true
    }, {
      id: 2,
      fullname: 'adam levine',
      checkedIn: false
    }, {
      id: 3,
      fullname: 'james bond',
      checkedIn: true
    }, {
      id: 4,
      fullname: 'chris martin',
      checkedIn: true
    }, {
      id: 5,
      fullname: 'bob marley',
      checkedIn: false
    }];

  }


