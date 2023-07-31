import dynamic from "next/dynamic";

const Auth = dynamic(() => import("@/modules/auth"), {
    ssr: false,
});
export default Auth;
