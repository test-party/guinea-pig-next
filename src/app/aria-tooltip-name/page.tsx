const Page = () => {
    return (
        <div>
            <div role="tooltip" id="empty"></div>

            <div role="tooltip" id="alempty" aria-label=""></div>

            <div role="tooltip" id="albmissing" aria-labelledby="nonexistent"></div>

            <div role="tooltip" id="albempty" aria-labelledby="emptydiv"></div>
            <div id="emptydiv"></div>
        </div>
    );
};

export default Page;

// http://localhost:3000/aria-tooltip-name