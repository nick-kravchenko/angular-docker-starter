import { RestorePasswordModule } from './restore-password.module';

describe('RestorePasswordModule', () => {
  let restorePasswordModule: RestorePasswordModule;

  beforeEach(() => {
    restorePasswordModule = new RestorePasswordModule();
  });

  it('should create an instance', () => {
    expect(restorePasswordModule).toBeTruthy();
  });
});
