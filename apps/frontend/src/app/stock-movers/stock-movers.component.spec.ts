import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockMoversComponent } from './stock-movers.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StockMoversComponent', () => {
  let component: StockMoversComponent;
  let fixture: ComponentFixture<StockMoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockMoversComponent],
      imports: [HttpClientTestingModule], // Ensure HttpClientTestingModule is imported
    }).compileComponents();

    fixture = TestBed.createComponent(StockMoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Ensure detectChanges is called after component instance creation
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
