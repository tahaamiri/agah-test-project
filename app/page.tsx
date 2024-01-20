import Header from "@/utils/shared/Header";
import Image1 from '@/assets/DrawKit Vector Illustration-1.svg';
import Image from "next/image";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import TickIcon from "@/assets/icons/TickIcon";


const items = ["Cursus Integer", "Integer Consequat", "Tellus Euismod Pellentesque", "Aliquot Tristique", "Pellentesque Tempus", "Mauris Fermentum Praesent"]

export default function Home() {
    return (
        <main className="min-h-screen bg-light-1 pt-10">
            <Header />
            <section className="flex flex-col md:flex-row-reverse md:mt-[115px] pb-10">
                <Image
                    src={Image1}
                    alt="Image title"
                    className="w-full max-w-md"
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
                    <div className="flex flex-col md:flex-row md:flex-wrap max-w-[655px] gap-[14px] text-dark text-[16.85px] font-semibold mt-[30px]">
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
        </main>
    );
}
