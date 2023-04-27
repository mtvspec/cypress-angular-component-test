import {ImageComponent} from "./image.component";
import {HttpClientModule} from "@angular/common/http";

describe('ImageComponent', () => {

  beforeEach(() => {

    cy.intercept('GET', '**/assets/checkmark.svg', { fixture: 'checkmark.svg' }).as('checkmark');

    cy.mount(ImageComponent, {
      imports: [
        HttpClientModule,
      ],
    });

  });

  it('should stub and set image', () => {



    cy
      .get('img[alt="checkmark"]')
      .invoke('attr', 'src', cy.wait('@checkmark'))

  });

});
