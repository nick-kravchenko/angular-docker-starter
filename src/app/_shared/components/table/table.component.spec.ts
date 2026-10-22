import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SharedModule } from '../../_shared.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [SharedModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('keys', [
      { key: 'id', title: 'ID', format: (v: number) => v },
      { key: 'email', title: 'Email', format: (v: string) => v },
    ]);
    fixture.componentRef.setInput('values', [
      { id: 2, email: 'b@test.test' },
      { id: 1, email: 'a@test.test' },
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort values by the selected key and toggle direction', () => {
    const initial = component.sortedValues().map((row) => row.id);
    component.sortValues('id');
    expect(component.dir).toBe('desc');
    expect(component.sortedValues().map((row) => row.id)).toEqual([...initial].reverse());
  });
});
