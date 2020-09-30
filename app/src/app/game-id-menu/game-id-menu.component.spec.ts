import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameIdMenuComponent } from './game-id-menu.component';

describe('GameIdMenuComponent', () => {
  let component: GameIdMenuComponent;
  let fixture: ComponentFixture<GameIdMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameIdMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameIdMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
