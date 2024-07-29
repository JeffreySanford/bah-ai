import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StocksComponent } from './stocks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';

describe('StocksComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksComponent ],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule
   
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

