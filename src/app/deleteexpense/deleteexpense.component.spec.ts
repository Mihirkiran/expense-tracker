import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteexpenseComponent } from './deleteexpense.component';

describe('DeleteexpenseComponent', () => {
  let component: DeleteexpenseComponent;
  let fixture: ComponentFixture<DeleteexpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ DeleteexpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
