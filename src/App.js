import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./routerSample/HomePage";
import AboutPage from "./routerSample/AboutPage";
import ContactPage from "./routerSample/ContactPage";
import NoMatch from "./routerSample/NoMatch";
import ProductList from "./routerSample/ProductList";
import ProductDetail from "./routerSample/ProductDetail";
import DataDisplay from "./materialSample/DataDisplay";
import ProductDataGrid from "./materialSample/ProductDataGrid";
import AutocomplateSample from "./materialSample/AutocomplateSample";
import { cartContext } from "./store/cartContext";
import { useContext } from "react";
import CartPage from "./routerSample/CartPage";
import RefHookSample from "./otherHooks/RefHookSample";
import LayoutHookSample from "./otherHooks/LayoutHookSample";
import IdHooksSample from "./otherHooks/IdHooksSample";

// import SupplierTable from "./task2/SupplierTable";

function App() {
  // const hola = () => {
  //   alert("hola alert!");
  // };

  const { cart } = useContext(cartContext);
  let totalPrice = 0;
  cart.forEach((element) => {
    totalPrice = totalPrice + element.price * element.quantity;
  });
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

      <h1>Site Header</h1>
      <h1>Cart Count:{cart.length}</h1>
      <h1>Total Price:{totalPrice.toFixed(2)}</h1>
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
        <li>
          <Link to="/datadisplay">Material Data Display</Link>
        </li>
        <li>
          <Link to="/productdatagrid">Product Data Grid</Link>
        </li>
        <li>
          <Link to="/autocomplate">Autocomplate Sample</Link>
        </li>
        <li>
          <Link to="/cart">Cart Sample</Link>
        </li>
        <li>
          <Link to="/refsample">Ref Sample</Link>
        </li>
        <li>
          <Link to="/layoutsample">Layout Sample</Link>
        </li>
        <li>
          <Link to="/idhook">Id Hook Sample</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/product" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/datadisplay" element={<DataDisplay />}></Route>
        <Route path="/productdatagrid" element={<ProductDataGrid />}></Route>
        <Route path="/autocomplate" element={<AutocomplateSample />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/refsample" element={<RefHookSample />}></Route>
        <Route path="/layoutsample" element={<LayoutHookSample />}></Route>
        <Route path="/idhook" element={<IdHooksSample />}></Route>

        {/* siteyi enterladıktan sonra route işleminde hiçbir sayfa ile eşleşmezsse yıldıza düşer bu da 404  */}
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
