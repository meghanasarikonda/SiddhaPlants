import clsx from "clsx";

const BenefitBox = (props) => {
    const {icon, title, description} = props;
    return <div className="flex flex-col items-center flex-1 mx-4 my-6">
        <i className={clsx("text-emerald-700 text-2xl", icon)}></i>
        <div className="my-1 text-slate-600">{title}</div>
        <div className="text-center text-slate-500">{description}</div>
    </div>
};

export default BenefitBox;