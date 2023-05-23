import { AuthForm } from "features/AuthForm";
// import { AuthLink } from "shared/ui/AuthLink/AuthLink";
import { Hlink } from "shared/ui/Hlink/Hlink";
import { Logo } from "shared/ui/Logo/Logo";
import classes from "./styles.module.scss";

export function AuthWindow() {
  return (
    <div className={classes.auth}>
      <Logo />
      <AuthForm />
      {/* <AuthLink /> */}
      <Hlink href="/#" text="Забыли пароль?" />
    </div>
  );
}
