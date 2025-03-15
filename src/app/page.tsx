
import Hero from './components/hero/hero';
import Faqs from './components/faqs/faq';
import Whatare from './components/what/whatare';
import Luxgpt from './components/luxgpt/luxgpt';
import VideoSection from './components/Videosection/videos';
import PatientTalks from './components/Patienttalks/patients';
import Second from './components/second/second';
import HospitalLocation from './components/HospitalLocation/hospitallocations';
import HospitalComparison from './components/Treatmenttable/Hospitalcomparison';
import Accreditations from './components/Accreditions/accreditions';
export default function Home() {
  return (
    <>
    <Hero />
    <Second />
    <HospitalLocation />
    <HospitalComparison />
    <Accreditations />
    <VideoSection />
    <PatientTalks />
    <Luxgpt />
    <Whatare />
    <Faqs />
    </>
  );
}
