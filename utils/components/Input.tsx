import { ChangeEvent } from "react";

interface InputProps {
    lable: string;
    value?: string;
    wrapperClassName?: string;
    type?: 'NUMBER' | 'STRING'
    onChange: (value: string) => void;
}

const Input = (props: InputProps) => {

    const { lable, value, wrapperClassName, type = 'STRING', onChange } = props;

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (type === 'NUMBER') {
            const numericValue = e.target.value.replace(/\D/g, '');
            onChange(numericValue);
        } else {
            onChange(e.target.value);
        }
    }

    return (
        <div className={`flex flex-col justify-start items-start gap-2 text-dark text-[18.46px] font-bold w-full ${wrapperClassName}`}>
            <label
                htmlFor="name"
                className="text-white"
            >
                {lable}
            </label>
            <input
                type="text"
                id="name"
                className="py-4 px-2 rounded-[3846.15px] outline-none w-full"
                value={value}
                onChange={inputChangeHandler}
            />
        </div>
    )
}

export default Input