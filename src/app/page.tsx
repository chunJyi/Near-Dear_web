import { Header, Footer, Hero, Features, HowItWorks, SharingModes, Screenshots, Privacy, FAQ, Download } from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Hero />
        <Features />
        <HowItWorks />
        <SharingModes />
        <Screenshots />
        <Privacy />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </>
  );
}
