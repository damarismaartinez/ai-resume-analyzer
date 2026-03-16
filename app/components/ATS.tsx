import React from 'react'

interface Suggestion {
    type: "good" | "improve";
    tip: string;
}

interface ATSProps {
    score: number;
    suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
    const borderColor = score > 69
        ? 'border-[#2a4a45]'
        : score > 49
            ? 'border-[#4a3a1a]'
            : 'border-[#4a2a32]';

    const iconSrc = score > 69
        ? '/icons/ats-good.svg'
        : score > 49
            ? '/icons/ats-warning.svg'
            : '/icons/ats-bad.svg';

    const subtitle = score > 69
        ? 'Great Job!'
        : score > 49
            ? 'Good Start'
            : 'Needs Improvement';

    const subtitleColor = score > 69
        ? "text-[#4a9e8e]"
        : score > 49
            ? 'text-[#f5b97a]'
            : "text-[#c4607a]";

    return (
        <div className={`bg-[#fce8f1] border ${borderColor} rounded-2xl shadow-md w-full p-6`}>
            <div className="flex items-center gap-4 mb-6">
                <img src={iconSrc} alt="ATS Score Icon" className="w-12 h-12" />
                <h2 className="text-2xl font-bold text-[#c4a8b8]">ATS Score - {score}/100</h2>
            </div>

            <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${subtitleColor}`}>{subtitle}</h3>
                <p className="text-[#9e9aaa] mb-4">
                    This score represents how well your resume is likely to perform in Applicant Tracking Systems used by employers.
                </p>

                <div className="space-y-3">
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <img
                                src={suggestion.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"}
                                alt={suggestion.type === "good" ? "Check" : "Warning"}
                                className="w-5 h-5 mt-1"
                            />
                            <p className={suggestion.type === "good" ? "text-[#6ee7d0]" : "text-[#f87a8a]"}>
                                {suggestion.tip}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <p className="text-[#c9a8b8] italic">
                Keep refining your resume to improve your chances of getting past ATS filters and into the hands of recruiters.
            </p>
        </div>
    )
}

export default ATS