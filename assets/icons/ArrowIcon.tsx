interface Props {
    className?: string;
    onClick?: () => void;
}

const ArrowIcon = ({className, onClick}: Props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
            <path d="M14.8844 5.16016L13.5322 6.51232L17.9493 10.9294H2.39941V12.8224H17.9493L13.5322 17.2395L14.8844 18.5916L21.6001 11.8759L14.8844 5.16016Z" fill="" />
        </svg>

    )
}

export default ArrowIcon