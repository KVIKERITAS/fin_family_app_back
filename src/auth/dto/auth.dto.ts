import { IsEmail, IsNotEmpty } from 'class-validator'

export class SignUpDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  pwRepeat: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class SignInDto {
  @IsNotEmpty()
  username: string 

  @IsNotEmpty()
  password: string
}
