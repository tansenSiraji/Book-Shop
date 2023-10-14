import { FeaturedProducts } from "./components/FeaturedProducts"
import { Testimonials } from "./components/Testimonials"
import { Hero } from "./components/Hero"
import { Faq } from "./components/Faq"
import { useTitle } from "../../hooks/useTitle"
export const HomePage = () => {
  useTitle("Access eBooks");

  return (
    <main>
        <Hero/>
        <FeaturedProducts/>
        <Testimonials/>
        <Faq/>
    </main>
  )
}
