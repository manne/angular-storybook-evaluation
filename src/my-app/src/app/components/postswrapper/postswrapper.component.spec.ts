import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostswrapperComponent } from './postswrapper.component';

describe('PostswrapperComponent', () => {
  let component: PostswrapperComponent;
  let fixture: ComponentFixture<PostswrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostswrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostswrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
