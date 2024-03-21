import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
function Footer() {
    return (
        <>
            <div className="text-white px-80 pt-32 pb-10 hidden md:block">
                <div className="flex gap-10 *:hover:cursor-pointer">
                    <Facebook fill="#fff" size={28} />
                    <Instagram size={28} />
                    <Twitter fill="#fff" size={28} />
                    <Youtube size={28} />
                </div>
                <div className="text-[#808080] text-[13px] my-5 flex flex-col gap-4 ">
                    <div className="flex items-center gap-24 ">
                        <div className="flex flex-col gap-5 w-auto text-nowrap *:hover:cursor-pointer">
                            <p className="hover:underline">Audio Description</p>
                            <p className="hover:underline">
                                Investor Relations
                            </p>
                            <p className="hover:underline">Legal Notices</p>
                        </div>
                        <div className="flex flex-col gap-5 w-auto text-nowrap *:hover:cursor-pointer">
                            <p className="hover:underline">Help Center</p>
                            <p className="hover:underline">Jobs</p>
                            <p className="hover:underline">Cookie Prefrences</p>
                        </div>
                        <div className="flex flex-col gap-5 w-auto text-nowrap *:hover:cursor-pointer">
                            <p className="hover:underline">Gift Cards</p>
                            <p className="hover:underline">Terms of Use</p>
                            <p className="hover:underline">
                                Corporate Information
                            </p>
                        </div>
                        <div className="flex flex-col gap-5 w-auto text-nowrap *:hover:cursor-pointer">
                            <p className="hover:underline">Media Center</p>
                            <p className="hover:underline">Privacy</p>
                            <p className="hover:underline">Contact Us</p>
                        </div>
                    </div>
                    <p className="mt-5 *:hover:cursor-pointer">
                        <span className="py-1 px-2 border-[1px] border-gray-400">
                            Service Code
                        </span>
                    </p>
                    <p className="mt-5">
                        &copy;
                        <span className="text-xs">
                            &nbsp;1997-2024 Netflix,Inc.
                        </span>
                    </p>
                </div>
            </div>
            <div className="text-white md:hidden">
                <div className="grid grid-cols-2 text-[#808080]  text-sm font-light px-5 py-10 w-auto text-nowrap *:hover:cursor-pointer">
                    <p className="hover:underline">Terms of Use</p>
                    <p className="hover:underline">Privacy Statement</p>
                    <p className="hover:underline">Cookie Prefrences</p>
                    <p className="hover:underline">Help Center</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
