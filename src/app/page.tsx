import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/modules/home"), {
    ssr: false,
});

export default Home;
