import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ProjectSection from "./ProjectSection";
import Location from "./Location";
function PageContent() {
  return (
    <>
      <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <ProjectSection></ProjectSection>
        <AboutSection></AboutSection>
        <ContactSection></ContactSection>
        <Location></Location>
      </div>
    </>
  );
}
export default PageContent;
