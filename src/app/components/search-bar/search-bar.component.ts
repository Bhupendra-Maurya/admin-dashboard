import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports:[FormsModule],
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {

  @Output() searchChange = new EventEmitter<string>();

  onSearch(event: any) {
    this.searchChange.emit(event.target.value);
  }
}
