import { cn } from "cn"

import { Button } from "./ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "./ui/field"
import { Input } from "./ui/input"
import useLogin from "../hooks/useLogin"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

    const {mutate} = useLogin();

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get("email")?.toString() || "";
        const password: FormDataEntryValue = formData.get("password")?.toString() || "";
        mutate({
            email, password
        })
    }

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={(e)=>handleSubmit(e)}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" name="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
          </div>
          <Input id="password" name="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit">Login</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
