import AddCategory from "./fetchSample/AddCategory";
import AddCategoryWithAxios from "./fetchSample/AddCategoryWithAxios";
import UserList from "./fetchSample/UserList";
import SupplierTable from "./task2/SupplierTable";

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

      <AddCategoryWithAxios></AddCategoryWithAxios>
    </>
  );
}

export default App;
