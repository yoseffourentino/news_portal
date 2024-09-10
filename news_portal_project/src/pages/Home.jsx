import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import News from "../components/News";

export default function Home(){
    return(
        <>
            <Header/>
            <Hero/>
            <News/>
            <Category/>
            <Footer />
        </>
    )
};
