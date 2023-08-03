import { Suspense, lazy } from "react";
import { Loading } from "../components/loading";

const HomeComponent = lazy(() => import("./component"));

export default function Home() {
    return (
        <Suspense fallback={<Loading />}>
            <HomeComponent />
        </Suspense>
    );
}
