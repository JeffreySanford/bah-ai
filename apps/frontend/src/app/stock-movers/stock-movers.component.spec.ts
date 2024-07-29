import 'web-animations-js';  // Add this import
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockMoversComponent } from './stock-movers.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StockMoversComponent', () => {
  let component: StockMoversComponent;
  let fixture: ComponentFixture<StockMoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockMoversComponent],
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MaterialModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StockMoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
