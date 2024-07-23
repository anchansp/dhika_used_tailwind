import ProductDesktop from "./assets/image-product-desktop.jpg";
import ProductMobile from "./assets/image-product-mobile.jpg";
import Cart from "./assets/icon-cart.svg";

function App() {
  return (
    <main className="min-w-screen flex min-h-screen items-center justify-center bg-cream px-6 py-8 font-montserrat text-regular text-darkGrayishBlue">
      <div className="grid w-fit max-w-sm overflow-hidden rounded-xl bg-white sm:max-w-xl sm:auto-rows-max sm:grid-cols-2">
        <div>
          <picture>
            <source media="(max-width: 640px)" srcSet={ProductMobile} />
            <img
              src={ProductDesktop}
              alt="Perfume bottles on top of a table surrounded with leaves"
              className="h-full w-full"
            />
          </picture>
        </div>
        <div className="p-7">
          <p className="mb-5 uppercase tracking-[0.5em]">Perfume</p>
          <h1 className="mb-7 font-fraunces text-4xl font-bold text-veryDarkBlue">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="mb-5">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="mb-5 flex items-center gap-5">
            <span className="font-fraunces text-3xl font-bold text-darkCyan">
              $149.99
            </span>
            <span className="line-through">$169.99</span>
          </div>
          <button className="flex w-full justify-center gap-4 rounded-lg bg-darkCyan p-4 text-white">
            <img src={Cart} alt="Cart icon" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;

// <h1 className="text-7xl font-bold underline">Hello world!</h1>;

{
  /* <div>
        <p class="text-cyan-800 text-sm font-medium font-serif">Cyan</p>
        <p class="text-orange-50">Cream</p>

        <p class="text-blue-950">Blue</p>
        <p class="text-gray-500">Dark</p>
        <p class="text-white">White</p>
      </div> */
}

// import Content from "./components/Content";
