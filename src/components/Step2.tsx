export default function Step2({
    setStep,
}: {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
    return (
        <div className="w-full h-full flex flex-col md:px-24">
            <div className="flex flex-col w-full flex-grow">
                <h2 className="text-3xl font-bold text-slate-700 pt-12 pb-2">
                    Select your plan
                </h2>
                <p className="text-sm text-neutral-400">
                    You have the option of monthly or yearly billing.
                </p>
            </div>
            <div className="flex justify-between py-4 w-full">
                <button onMouseDown={() => setStep((prev) => prev - 1)} className="text-neutral-400">
                    Go Back
                </button>
                <button
                    onMouseDown={() => setStep((prev) => prev + 1)}
                    className="bg-blue-950 text-white px-6 py-3 rounded-lg"
                >
                    Next Step
                </button>
            </div>
        </div>
    );
}