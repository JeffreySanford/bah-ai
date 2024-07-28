import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockMoversComponent } from './stock-movers.component';

describe('StockMoversComponent', () => {
  let component: StockMoversComponent;
  let fixture: ComponentFixture<StockMoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockMoversComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StockMoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
