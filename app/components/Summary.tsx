import ScoreGauge from "~/components/ScoreGauge";
import ScoreBadge from "~/components/ScoreBadge";

const Category = ({ title, score }: { title: string, score: number }) => {
    const textColor = score > 70 ? 'text-[#6ee7d0]'
        : score > 49
            ? 'text-[#f5b97a]' : 'text-[#f87a8a]';

    return (
        <div className="resume-summary">
            <div className="category">
                <div className="flex flex-row gap-2 items-center justify-center">
                    <p className="text-2xl text-[#c4a8b8]">{title}</p>
                    <ScoreBadge score={score} />
                </div>
                <p className="text-2xl text-[#9e9aaa]">
                    <span className={textColor}>{score}</span>/100
                </p>
            </div>
        </div>
    )
}

const Summary = ({ feedback }: { feedback: Feedback }) => {
    const f = feedback as any;

    const overallScore = f.overallScore ?? f.overall_score ?? 0;
    const toneAndStyle = f.toneAndStyle ?? f.sections?.professional_summary ?? f.sections?.profileSummary;
    const content = f.content ?? f.sections?.experience ?? f.sections?.workExperience;
    const structure = f.structure ?? f.sections?.education;
    const skills = f.skills ?? f.sections?.skills;

    return (
        <div className="bg-[#fce8f1] border border-[#e8c8d8] rounded-2xl shadow-md w-full">
            <div className="flex flex-row items-center p-4 gap-8">
                <ScoreGauge score={overallScore} />
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-[#c4a8b8]">Your Resume Score</h2>
                    <p className="text-sm text-[#c9a8b8]">
                        This score is calculated based on the variables listed below.
                    </p>
                </div>
            </div>

            <Category title="Tone & Style" score={toneAndStyle?.score ?? 0} />
            <Category title="Content"      score={content?.score ?? 0} />
            <Category title="Structure"    score={structure?.score ?? 0} />
            <Category title="Skills"       score={skills?.score ?? 0} />
        </div>
    )
}
export default Summary