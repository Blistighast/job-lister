import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import careersLoader from "./loaderFunctions/careerLoader";
import contactAction from "./actionFunctions/contactAction";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import Careers from "./pages/careers/Careers";
import CareerDetails from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";
import NoPage from "./pages/NoPage";

//layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";
import careerDetailsLoader from "./loaderFunctions/careerDetailsLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NoPage />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} /> {/* /help/faq */}
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />} // if no error element in child, error will bubble up and use this one
      >
        <Route
          index
          element={<Careers />}
          loader={careersLoader} //runs this function before it loads component element
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      {/* alternative way to do an error page, * catches all paths not above */}
      {/* <Route path="*" element={<NoPage />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
