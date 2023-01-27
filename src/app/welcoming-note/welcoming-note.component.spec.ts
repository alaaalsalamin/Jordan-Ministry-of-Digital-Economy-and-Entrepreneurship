import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomingNoteComponent } from './welcoming-note.component';

describe('WelcomingNoteComponent', () => {
  let component: WelcomingNoteComponent;
  let fixture: ComponentFixture<WelcomingNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomingNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomingNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
