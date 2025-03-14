
import Hero from './components/hero/hero';
import Faqs from './components/faqs/faq';
import Whatare from './components/what/whatare';
import Luxgpt from './components/luxgpt/luxgpt';
import VideoSection from './components/Videosection/videos';
import PatientTalks from './components/Patienttalks/patients';
export default function Home() {
  return (
    <>
    <Hero />
    <VideoSection />
    <PatientTalks />
    <Luxgpt />
    <Whatare />
    <Faqs />
    </>
  );
}
