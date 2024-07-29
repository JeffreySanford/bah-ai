import 'web-animations-js';  // Add this import
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockMoversComponent } from './stock-movers.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('StockMoversComponent', () => {
  let component: StockMoversComponent;
  let fixture: ComponentFixture<StockMoversComponent>;

  beforeAll(() => {
    // Mock the animate function
    if (!Element.prototype.animate) {
      Element.prototype.animate = () => ({
        currentTime: 0,
        effect: null,
        finished: Promise.resolve({} as Animation),
        id: '',
        oncancel: null,
        onfinish: null,
        onremove: null,
        pause: () => {},
        play: () => {},
        reverse: () => {},
        updatePlaybackRate: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        pending: false,
        playState: 'idle',
        playbackRate: 1,
        ready: Promise.resolve({} as Animation),
        startTime: null,
        cancel: () => {},
        finish: () => {}, 
        getAnimations: () => [],
        getComputedTiming: () => null,
        pauseAnimations: () => {},
        playAnimations: () => {},
        reverseAnimations: () => {},
        updateAnimations: () => {},
        replaceState: () => {},
        timeline: null,
        commitStyles: () => {},
        persist: () => {},
        dispatchEvent: () => true,
      });
    }
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockMoversComponent],
      imports: [
        HttpClientTestingModule,
        NoopAnimationsModule,
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
