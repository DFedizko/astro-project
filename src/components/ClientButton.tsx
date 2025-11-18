import { useState } from "react";

type ClientButtonProps = {
    children: React.ReactNode;
};

const ClientButton = ({
    children,
}: ClientButtonProps) => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div>
            <p className="text-lg text-center">Counter: {counter}</p>
            <button
                type="button"
                className="cursor-pointer px-3 py-2 rounded-lg bg-gray-950"
                onClick={() => setCounter((prev) => prev + 1)}
            >
                {children}
            </button>
        </div>
    );
};

export default ClientButton;
