//http://localhost:3000/meta-refresh
export default function Page() {
    return (
        <body>
            <div>
                <meta />
                <meta />
                <meta http-equiv="content-security-policy" />
                <meta http-equiv="content-type" />
                <meta http-equiv="default-style" />
            </div>
            <div>
                <meta name="viewport" />
                <meta name="viewport" content="" />
                <meta name="viewport" content="maximum-scale=2.6" />
                <meta name="viewport" content="maximum-scale=3" />
            </div>
        </body>
    );
}