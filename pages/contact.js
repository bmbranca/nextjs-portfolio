import SecondaryNav from "../public/components/SecondaryNav";
import { AppContainer, ContactHomeLink } from "../public/components/styled";
import ContactPage from "../public/components/ContactPage";
import Link from "next/link";

export default function Contact() {
  return (
    <AppContainer>
      <SecondaryNav />
      <ContactPage />
      <Link href="/">
        <ContactHomeLink>home</ContactHomeLink>
      </Link>
    </AppContainer>
  );
}
