export default function Audio() {
    return (
        (<main
            className="flex min-h-screen p-24"
            component-id="e8549065-584f-4f9f-b3f1-f43b7647e1a6"
            testparty-id={crypto.randomUUID()}>
            <audio
                controls
                component-id="5c1113cf-fff1-4300-8043-88862d05a577"
                testparty-id={crypto.randomUUID()}>
                <source
                    src="https://codify-audio.s3.amazonaws.com/20VC__Keith_Rabois_Exclusive.mp3"
                    type="audio/mpeg"
                    component-id="e1f3238f-a667-4448-b6ee-4a2ff6ed3ff1"
                    testparty-id={crypto.randomUUID()}></source>
            </audio>
        </main>)
    );
}