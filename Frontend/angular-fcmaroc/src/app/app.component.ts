import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fcmaroc';

  @ViewChild('footer', { static: false }) footer!: ElementRef;

  // Method to scroll to the footer section when 'Kontakt' is clicked
  scrollToContact(): void {
    this.footer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }

  // Method to scroll to the top of the page
  scrollToTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
