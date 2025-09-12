import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponantComponent } from './second-componant.component';

describe('SecondComponantComponent', () => {
  let component: SecondComponantComponent;
  let fixture: ComponentFixture<SecondComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondComponantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
