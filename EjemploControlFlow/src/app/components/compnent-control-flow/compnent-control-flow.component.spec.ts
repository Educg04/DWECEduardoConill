import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnentControlFlowComponent } from './compnent-control-flow.component';

describe('CompnentControlFlowComponent', () => {
  let component: CompnentControlFlowComponent;
  let fixture: ComponentFixture<CompnentControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompnentControlFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompnentControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
