<h1>
  {{title}}
</h1>
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  <div class="form-group">
    <label class="center-block">Name:
      <input type="text" class="form-control" formControlName="name">
    </label>
    <div *ngIf="formErrors.name" class="alert alert-danger">
      {{ formErrors.name }}
    </div>
  </div>
  <div class="form-group">
    <label class="center-block">oracleId:
      <input type="number" class="form-control" formControlName="oracleId">
    </label>
    <div *ngIf="formErrors.oracleId" class="alert alert-danger">
      {{ formErrors.oracleId }}
    </div>
  </div>
  <div class="form-group">
    <label class="center-block">password:
      <input type="password" class="form-control" formControlName="password">
    </label>
  </div>
  <div class="form-group">
    <input type="submit" value="login">
  </div>
</form>