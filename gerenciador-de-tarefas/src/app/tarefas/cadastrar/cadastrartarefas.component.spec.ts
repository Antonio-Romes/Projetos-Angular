import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrartarefasComponent } from './cadastrartarefas.component';

describe('CadastrartarefasComponent', () => {
  let component: CadastrartarefasComponent;
  let fixture: ComponentFixture<CadastrartarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrartarefasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrartarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
