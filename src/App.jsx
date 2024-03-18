import Navbar from "./components/Navbar";
import bg from "./assets/bg.mp4";
import Subdetails from "./components/Subdetails";
function App() {
    const movie = {
        title: "title",
        label: "#1 in Movies Today",
        labelType: "Top 10",
        subdetails:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laudantium cum enim vitae sequi aut ex et aliquid, asperiores dolorum.",
        type: "u/a 16+",
    };
    return (
        <div className="font-poppins">
            <section id="home" className="relative">
                <Navbar />
                <Subdetails
                    title={movie.title}
                    label={movie.label}
                    labelType={movie.labelType}
                    subdetails={movie.subdetails}
                    type={movie.type}
                />
                <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-black via-transparent to-transparent z-1"></div>

                <video
                    src={bg}
                    autoPlay
                    loop
                    muted
                    className="w-full h-screen object-cover -z-10 top0 left-0"
                ></video>
            </section>
        </div>
    );
}

export default App;
