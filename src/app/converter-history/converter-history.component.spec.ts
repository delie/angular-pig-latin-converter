import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from './../_shared/shared.module';
import { ConverterHistoryComponent } from './converter-history.component';

describe('ConverterHistoryComponent', () => {
  let component: ConverterHistoryComponent;
  let fixture: ComponentFixture<ConverterHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ ConverterHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
