'use client'
import Image from "next/image";
import Header from "@/utils/shared/Header";
import Section1Img from '@/assets/DrawKit Vector Illustration-1.svg';
import Section2Img from '@/assets/section2.svg';
import ArrowIcon from "@/assets/icons/ArrowIcon";
import TickIcon from "@/assets/icons/TickIcon";
import SectinoThreeCards from "@/utils/components/SectinoThreeCards";
import Input from "@/utils/components/Input";
import { FormEvent, useState } from "react";
import { post, responseValidator } from "@/scripts/helper";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface FormData {
    phoneNumber: string;
    userName: string;
}

const items = ["Cursus Integer", "Integer Consequat", "Tellus Euismod Pellentesque", "Aliquot Tristique", "Pellentesque Tempus", "Mauris Fermentum Praesent"]

export default function Home() {

    const router = useRouter()
    const [formData, setFormData] = useState<FormData>({
        phoneNumber: '',
        userName: ''
    });
    const [loading, setLoading] = useState<boolean>(false);

    const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        post((data, status) => {
            if (responseValidator(status)) {
                router.push("/form");
                toast.success("Thanks for you submitting!");
            }
        }, 'https://dummyjson.com/auth/login', {
            username: formData.userName,
            password: formData.phoneNumber,
        })
    }

    return (
        <>
            <main className="min-h-screen bg-light-1 pt-10">
                <Header />
                <section className="flex flex-col md:flex-row-reverse md:mt-[115px] pb-10 lg:pb-56 px-5 md:px-10 lg:px-[160px]">
                    <Image
                        src={Section1Img}
                        alt="Section one image"
                        className="w-full max-w-sm xl:max-w-2xl mx-auto"
                    />
                    <div className="-mt-5 flex-1">
                        <h1 className="text-yellow font-bold md:text-3xl md:font-bold leading-10">
                            risus praesent vulputate.
                        </h1>
                        <h1 className="text-4xl font-bold md:text-[40px] xl:text-[70px] md:font-extrabold mt-2 min-w-fit leading-[50px]">
                            Cursus Integer
                        </h1>
                        <h1 className="text-[32px] font-bold md:text-[40px] xl:text-[70px] md:font-extrabold">
                            Consequat Tristique.
                        </h1>
                        <div className="flex flex-wrap md:flex-row max-w-[655px] gap-[14px] text-dark text-[16.85px] xl:text-xl font-semibold mt-[30px]">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-[5.9px] bg-white py-[11.8px] px-[16.85px] w-fit rounded-[4212.59px]"
                                >
                                    <TickIcon />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <button className="group flex items-center justify-between w-full max-w-[350px] outline-none py-4 px-[38px] text-[18.46px] xl:text-2xl font-bold bg-yellow rounded-[3846.15px] mt-10 hover:border-2 hover:border-dark hover:shadow-[9px_9px_0px_0px_#262626]"
                        >
                            Lorem Ipsum
                            <ArrowIcon className="fill-dark group-hover:rotate-90 transition" />
                        </button>
                    </div>
                </section>
                <section className="parent bg-yellow py-24 lg:py-56 mt-16 w-full" >
                    <div className="child flex flex-col md:flex-row-reverse md:mt-[115px] pb-10 px-5 md:px-10 lg:px-[160px]">
                        <Image
                            src={Section2Img}
                            alt="Section two image"
                            className="w-full max-w-sm xl:max-w-2xl mx-auto"
                        />
                        <div className="xl:mt-40">
                            <h1 className="text-4xl xl:text-[50px] font-bold text-left leading-[50px]">
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
                            <button className="group flex items-center justify-between w-full max-w-[350px] outline-none py-4 px-[38px] text-white text-[18.46px] xl:text-2xl font-bold bg-dark rounded-[3846.15px] mt-10 hover:border-2 hover:border-white hover:shadow-[9px_9px_0px_0px_#FFF]">
                                Lorem Ipsum
                                <ArrowIcon className="fill-white group-hover:rotate-90 transition" />
                            </button>
                        </div>
                    </div>
                </section >
                <section className="parent bg-dark py-24 lg:py-56 w-full">
                    <div className="child flex flex-col lg:flex-row md:gap-[153px] px-5 md:px-10 lg:px-[160px]">
                        <div className="pt-3 md:pt-10 lg:pt-36">
                            <p className="text-xl font-normal text-yellow text-left">
                                Quisque porttitor vitae vel amet neque scelerisque mattis. Consectetur nibh velit magna consectetur leo.
                            </p>
                            <h1 className="text-4xl text-left text-white font-bold mt-5">
                                Cursus Integer Conseq Aliquam Tristique.
                            </h1>
                            <button className="group flex items-center justify-between w-full max-w-[350px] outline-none py-4 px-[38px] text-dark text-[18.46px] xl:text-2xl font-bold bg-white rounded-[3846.15px] mt-10 hover:border-2 hover:border-yellow hover:shadow-[9px_9px_0px_0px_#F9B800]">
                                Lorem Ipsum
                                <ArrowIcon className="fill-dark group-hover:rotate-90 transition" />
                            </button>
                            {!loading && (
                                <form
                                    className="flex flex-col max-w-[350px] border border-yellow p-4 rounded-3xl mt-10"
                                    onSubmit={formSubmitHandler}
                                >
                                    <Input
                                        lable="User Name"
                                        wrapperClassName="mt-5"
                                        value={formData.userName}
                                        onChange={(value) => setFormData((prv) => ({ ...prv, userName: value }))}
                                    />
                                    <Input
                                        lable="Phone Number"
                                        wrapperClassName="mt-5"
                                        value={formData.phoneNumber}
                                        onChange={(value) => setFormData((prv) => ({ ...prv, phoneNumber: value }))}
                                    />
                                    <button
                                        className="flex items-center justify-center w-full outline-none py-4 px-[38px] text-dark text-[18.46px] font-bold bg-yellow rounded-[3846.15px] mt-10"
                                    >
                                        Submit
                                    </button>
                                </form>
                            )}
                        </div>
                        <SectinoThreeCards />
                    </div>
                </section>
                <section className="mt-[500px] py-10 text-justify px-5 md:px-10 lg:px-[160px] flex items-center justify-between">
                    <span className="text-4xl xl:text-[50px] font-bold max-w-3xl leading-[60px]">
                        Vulputate et pulvinar ethre Suspendisse tellus consecteur
                    </span>
                    <button className="group flex items-center justify-between w-full max-w-[350px] outline-none py-4 px-[38px] text-[18.46px] xl:text-2xl font-bold bg-yellow rounded-[3846.15px] mt-10 hover:border-2 hover:border-dark hover:shadow-[9px_9px_0px_0px_#262626]"
                    >
                        Lorem Ipsum
                        <ArrowIcon className="fill-dark group-hover:rotate-90 transition" />
                    </button>
                </section>
            </main>
        </>
    );
}
