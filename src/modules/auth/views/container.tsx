import { Suspense, lazy } from "react";
import { Loading } from "../components/loading";

const AuthComponent = lazy(() => import("./component"));

export default function Auth() {
    return (
        <Suspense fallback={<Loading />}>
            <AuthComponent />
        </Suspense>
    );
}
