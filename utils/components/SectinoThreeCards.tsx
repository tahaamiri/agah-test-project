import Icon1 from '@/assets/icons/icon1.svg';
import Icon2 from '@/assets/icons/icon2.svg';
import Icon3 from '@/assets/icons/icon3.svg';
import Icon4 from '@/assets/icons/icon4.svg';
import Image from 'next/image';


const items = [
    {
        icon: Icon1,
        index: 1,
        title: "Phasellus Vitae",
        subtitle: 'Quisque',
        text: 'Porttitor vitae vel amet '
    },
    {
        icon: Icon2,
        index: 2,
        title: "Iaculis Magna",
        subtitle: 'Porttitor',
        text: 'Porttitor'
    },
    {
        icon: Icon3,
        index: 3,
        title: "Eleifend Pulvinar ",
        subtitle: 'Vitae',
        text: 'Consectetur nibh velit '
    },
    {
        icon: Icon4,
        index: 4,
        title: "Velit Odio Phir",
        subtitle: 'Ametneq',
        text: 'magna consectetur leo. '
    },
]
const SectinoThreeCards = () => {
    return (
        <div className="mt-14 flex gap-10 xl:grid xl:grid-cols-2 max-w-[760px] w-full flex-wrap pb-52 xl:[&>*:nth-child(2)]:mt-[123px] xl:[&>*:nth-child(3)]:-mt-[123px]">
            {items.map((item) => (
                <div
                    key={item.index}
                    className="flex flex-col justify-start bg-white rounded-[57.43px] px-[47.86px] py-[53px] max-w-[350px] max-h-[382px] w-full h-full">
                    <Image
                        src={item.icon}
                        alt="Icon"
                        width={60}
                        height={60}
                    />
                    <div className="inline-flex justify-start items-end gap-2">
                        <span className="text-[68.91px] font-bold h-[75px]">{item.index}</span>
                        <div className="w-2 h-2 bg-yellow rounded-full" />
                    </div>
                    <span className="text-[22.97px] text-dark font-bold text-left mt-[18px]">
                        {item.title}
                    </span>
                    <span className="text-[19.14px] text-dark font-semibold text-left mt-[18px]">
                        {item.subtitle}
                    </span>
                    <span className="text-[17.23px] font-[350] text-dark text-left">
                        {item.text}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default SectinoThreeCards