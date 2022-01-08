import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarComponentComponent } from './menubar-component.component';

describe('MenubarComponentComponent', () => {
  let component: MenubarComponentComponent;
  let fixture: ComponentFixture<MenubarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
