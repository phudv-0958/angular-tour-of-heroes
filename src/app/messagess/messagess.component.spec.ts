import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagessComponent } from './messagess.component';

describe('MessagessComponent', () => {
  let component: MessagessComponent;
  let fixture: ComponentFixture<MessagessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
