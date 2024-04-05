import Container from "@/components/Container";
import SignUp from "@/components/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SignUp',
}

export default function SignUpPage() {
  return (
    <Container>
      <SignUp />
    </Container>
  );
}
