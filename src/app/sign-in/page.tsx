import { RedirectToSignIn, SignedIn } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'

export default async function SignIn() {
    const { userId } = await auth()
    if (!userId) {
        return (
            <div>
                <RedirectToSignIn redirectUrl="/protected-link-name" />
            </div>
        )
    }
    return (
        <div>
            <SignedIn>
                <h1>Welcome to the Sign In page</h1>
                <p>You are signed in!</p>
                <p>Your user ID is: {userId}</p>
                <p>Click the link below to go to the protected page:</p>
                <a href="/protected-link-name">Go to Protected Page</a>
            </SignedIn>
        </div>
    )
}
