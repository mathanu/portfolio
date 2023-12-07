import Education from "./components/Education";
import Experience from "./components/Experience";
import HeaderCmp from "./components/HeaderCmp";
import HomeCmp from "./components/HomeCmp";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div  className="overflow-hidden">
      <HeaderCmp />
      <HomeCmp />
      <Experience />
      <Skills />
      <Education />

    </div>
  );
}
