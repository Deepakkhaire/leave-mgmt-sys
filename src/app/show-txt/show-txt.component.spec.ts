import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTxtComponent } from './show-txt.component';

describe('ShowTxtComponent', () => {
  let component: ShowTxtComponent;
  let fixture: ComponentFixture<ShowTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTxtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
