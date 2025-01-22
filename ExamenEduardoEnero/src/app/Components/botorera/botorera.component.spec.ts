import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoreraComponent } from './botorera.component';

describe('BotoreraComponent', () => {
  let component: BotoreraComponent;
  let fixture: ComponentFixture<BotoreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotoreraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
