import Container from "@/components/Container";
import SignIn from "@/components/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SignIn',
}

export default function SignInPage() {
  return (
    <Container>
      <SignIn />
    </Container>
  );
}
