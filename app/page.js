
import Category from "./component/Category";
import Hero from "./component/Hero";
import Products from "./component/Products";
import ScrollToTop from "./component/ScrollToTop";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Products/>
      <Category/>
      <Products/>
      <ScrollToTop/>
    </main>
  );
}
