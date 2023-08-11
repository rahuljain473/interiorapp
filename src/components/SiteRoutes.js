import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Homepage from './Homepage';
import Login from './Login';
import Thanks from './Thanks';
import ViewMembers from './ViewMembers';
import SearchUser from './SearchUser';
import ManageCat from './ManageCat';
import ManageSubCat from './ManageSubCat';
import ManageProduct from './ManageProduct';
import UpdateSubCat from './UpdateSubCat';
import ChangePassword from './ChangePassword';
import ShowCategory from './ShowCategory';
import ShowSubCategory from './ShowSubCategory';
import ShowProduct from './ShowProduct';
import UpdateProducts from './UpdateProducts';
import ProductDetails from './ProductDetails';
import ShowCart from './ShowCart';
import Checkout from './Checkout';
import OrderSummary from './OrderSummary';
import ViewOrders from './ViewOrders';
import OrderProducts from './OrderProducts';
import UserOrders from './UserOrders';
import SearchProducts from './SearchProducts';
import UpdateStatus from './UpdateStatus';
import AdminHomepage from './AdminHomepage';
import CreateAdmin from './CreateAdmin';
import Contact from './Contact';
import UserRoutesProtector from './UserRoutesProtector';
import AboutUs from './AboutUs';
import ResetPassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';
const SiteRoutes=()=>
{
    return(
        <Routes>
            <Route path='/' element={<Navigate to="/Homepage"/>}/>
            <Route path='/homepage' element={<Homepage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/viewmembers' element={<ViewMembers/>}/>
            <Route path='/searchmembers' element={<SearchUser/>}/>
            <Route path='/categories' element={<ShowCategory/>}/>
            <Route path='/subcategories' element={<ShowSubCategory/>}/>
            <Route path='/products' element={<ShowProduct/>}/>
            <Route path='/productdetails' element={<ProductDetails/>}/>
            <Route path='/cart' element={<ShowCart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/ordersummary' element={<UserRoutesProtector MyComp={OrderSummary}/>}/>
            <Route path='/vieworders' element={<ViewOrders/>}/>
            <Route path='/updatestatus' element={<UpdateStatus/>}/>
            <Route path='/orderproducts' element={<OrderProducts/>}/>
            <Route path='/searchproducts' element={<SearchProducts/>}/>
            <Route path='/userorders' element={<UserOrders/>}/>
            <Route path='/managecategory' element={<ManageCat/>}/>
            <Route path='/managesubcategory' element={<ManageSubCat/>}/>
            <Route path='/updatesubcategory' element={<UpdateSubCat/>}/>
            <Route path='/updateproduct' element={<UpdateProducts/>}/>
            <Route path='/manageproduct' element={<ManageProduct/>}/>
            <Route path='/changepassword' element={<UserRoutesProtector MyComp={ChangePassword}/>}/>
            <Route path='/thanks' element={<Thanks/>}/>
            <Route path='/adminhome' element={<AdminHomepage/>}/> 
            <Route path='/createadmin' element={<CreateAdmin/>}/> 
            <Route path='/contactus' element={<Contact/>}/> 
            <Route path='/aboutus' element={<AboutUs/>}/> 
            <Route path='/resetpassword' element={<ResetPassword/>}/> 
            <Route path='/forgotpassword' element={<ForgotPassword/>}/> 
            
          
            <Route path='/*' element={<h1>Page Not Found</h1>}/>
        </Routes>
    )
}
export default SiteRoutes;