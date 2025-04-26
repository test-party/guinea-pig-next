import { RedirectToSignIn } from "@clerk/nextjs";

export default function SignIn() {
    return <RedirectToSignIn redirectUrl={"http://localhost:3000"} />
}