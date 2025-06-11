//http://localhost:3000/meta-viewport
export default function Page() {
    return (
        <div>
            <meta name="viewport" />
            <meta name="viewport" content="user-scalable=no" />
            <meta name="viewport" content="user-scalable=no, maximum-scale=2.6" />
            <meta name="viewport" content="user-scalable=no, maximum-scale=1" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"
            />
        </div>
    )
}
