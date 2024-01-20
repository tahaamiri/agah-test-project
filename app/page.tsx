import Image from "next/image";
import Header from "@/utils/shared/Header";
import Section1Img from '@/assets/DrawKit Vector Illustration-1.svg';
import Section2Img from '@/assets/section2.svg';
import ArrowIcon from "@/assets/icons/ArrowIcon";
import TickIcon from "@/assets/icons/TickIcon";


const items = ["Cursus Integer", "Integer Consequat", "Tellus Euismod Pellentesque", "Aliquot Tristique", "Pellentesque Tempus", "Mauris Fermentum Praesent"]

export default function Home() {
    return (
        <main className="min-h-screen bg-light-1 pt-10">
            <Header />
            <section className="flex flex-col md:flex-row-reverse md:mt-[115px] pb-10 px-5 md:px-10 lg:px-[160px]">
                <Image
                    src={Section1Img}
                    alt="Section one image"
                    className="w-full max-w-sm lg:max-w-md mx-auto"
                />
                <div className="-mt-5 flex-1">
                    <h3 className="text-yellow font-bold md:text-3xl md:font-bold">
                        risus praesent vulputate.
                    </h3>
                    <h1 className="text-4xl font-bold md:text-[40px] md:font-extrabold mt-2">
                        Cursus Integer
                    </h1>
                    <h1 className="text-[32px] font-bold md:text-[40px] md:font-extrabold">
                        Consequat Tristique.
                    </h1>
                    <div className="flex flex-wrap md:flex-row max-w-[655px] gap-[14px] text-dark text-[16.85px] font-semibold mt-[30px]">
                        {items.map((item) => (
                            <div className="flex items-center gap-[5.9px] bg-white py-[11.8px] px-[16.85px] w-fit rounded-[4212.59px]">
                                <TickIcon />
                                {item}
                            </div>
                        ))}
                    </div>
                    <button className="flex items-center justify-between w-full max-w-[350px] outline-none py-4 px-[38px] text-[18.46px] font-bold bg-yellow rounded-[3846.15px] mt-10">
                        Lorem Ipsum
                        <ArrowIcon className="fill-dark" />
                    </button>
                </div>
            </section>
            <section className="parent bg-yellow py-24 mt-16 w-full" >
                <div className="child flex flex-col md:flex-row-reverse md:mt-[115px] pb-10 px-5 md:px-10 lg:px-[160px]">
                    <Image
                        src={Section2Img}
                        alt="Section two image"
                        className="w-full max-w-sm lg:max-w-md mx-auto"
                    />
                    <div>
                        <h1 className="text-4xl font-bold text-left">
                            Phasellus a vitae
                            iaculis magna
                            eleifend pulvinar
                            velit odio.
                        </h1>
                        <p className="text-xl font-semibold text-left underline mt-5">
                            Vulputate et vulputate suspendisse natoque!
                        </p>
                        <p className="text-xl font-normal text-left mt-3">
                            Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et.
                        </p>
                        <button className="flex items-center justify-between w-full max-w-[350px] outline-none py-4 px-[38px] text-white text-[18.46px] font-bold bg-dark rounded-[3846.15px] mt-10">
                            Lorem Ipsum
                            <ArrowIcon className="fill-white" />
                        </button>
                    </div>
                </div>
            </section >
        </main>
    );
}
