import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className="flex h-[calc(100vh-96px)] items-center justify-center">
      <SignUp />
    </div>
  );
}