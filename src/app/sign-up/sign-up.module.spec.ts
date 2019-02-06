import { SignUpModule } from './sign-up.module';

describe('SignUpModule', () => {
  let signUpModule: SignUpModule;

  beforeEach(() => {
    signUpModule = new SignUpModule();
  });

  it('should create an instance', () => {
    expect(signUpModule).toBeTruthy();
  });
});
