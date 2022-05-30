import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./routerSample/HomePage";
import AboutPage from "./routerSample/AboutPage";
import ContactPage from "./routerSample/ContactPage";
import NoMatch from "./routerSample/NoMatch";
import ProductList from "./routerSample/ProductList";
import ProductDetail from "./routerSample/ProductDetail";
// import SupplierTable from "./task2/SupplierTable";

function App() {
  // const hola = () => {
  //   alert("hola alert!");
  // };
  return (
    <>
      {/* propslarla alakalı konunun kodları diğerleri gibi aklında kalmayabilir burada yorum satırı olarak kalsın 
       <div>Form</div>
      <TechButton title="Add" width={75} height={75}></TechButton> */}

      {/* <PropClickEventSample hello={hola}></PropClickEventSample> */}

      {/* <SupplierList></SupplierList> */}

      {/* <EffectSample1></EffectSample1> */}

      {/* <UserList></UserList> */}

      {/* <SupplierTable></SupplierTable> */}

      {/* <AddCategory></AddCategory> */}

      {/* <AddCategoryWithAxios></AddCategoryWithAxios> */}

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/product" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        {/* siteyi enterladıktan sonra route işleminde hiçbir sayfa ile eşleşmezsse yıldıza düşer bu da 404  */}
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
